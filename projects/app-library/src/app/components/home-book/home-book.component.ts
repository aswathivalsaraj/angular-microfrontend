import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../../models/books.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-home-book',
  templateUrl: './home-book.component.html',
  styleUrls: ['./home-book.component.scss']
})
export class HomeBookComponent implements OnInit {

  public booksList: any;
  public book: any;
  public filteredBooks: any;
  public apiUrl: string;
  public booksForm: FormGroup;
  constructor(private bookService: BooksService, private activatedRoute: ActivatedRoute) { 
    this.apiUrl = this.bookService.apiUrl;
    this.booksForm = new FormGroup({
      bookId: new FormControl(''),
      bookTitle: new FormControl(''),
    });
  }
  
  ngOnInit(): void {
   // this.getAllBooks();
    this.activatedRoute.data.subscribe(({ books }) => {
      this.booksList = books;
      this.bookService.allbooks = this.booksList;
    })
  }

 /* public getAllBooks(): void {
    this.bookService.getAllBooks().subscribe((books)=> {      
      this.booksList = books;
      this.bookService.allbooks = this.booksList ;
    });
  } */
  public getBook(id: number): void {    
    this.bookService.getBook(id).subscribe((book)=> {      
      this.book = book;
    });
  }
  public editBook(id: number): void {
    console.log(id)
  }
  public searchBook() {
    const bookTitle = this.booksForm.get('bookTitle')?.value;
    this.bookService.searchBook(bookTitle).subscribe((books: any)=> {    
      if(books && books.length >0) {
        this.filteredBooks = books;
      }     
    });
  }

}
