import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent implements OnInit {
  public booksList: any;
  @Input() public search: boolean = false;
  public apiUrl;
  constructor(private bookService: BooksService, public router: Router) { 
    this.bookService.selectedBookId = 0;
    this.apiUrl = this.bookService.apiUrl;
  }
  
  ngOnInit(): void {
    console.log("On Init 2")
    this.getAllBooks();    
  }
  public getAllBooks() {
    this.bookService.getAllBooks().subscribe((books)=> {     
      this.booksList = books;
      // this.bookService.allbooks = this.booksList ;
    });
  }
  public editBook(id: number) {   
    this.bookService.selectedBookId = id;
  }
  public deleteBook(id: number) {    
    if(Number(id) > 0) {
      this.bookService.deleteBook(id).subscribe((allBooks: any) => { 
        this.getAllBooks();  
        this.router.navigate(['home']);
      });      
    }
  }
}
