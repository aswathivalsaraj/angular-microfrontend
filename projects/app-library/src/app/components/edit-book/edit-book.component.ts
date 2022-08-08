import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { LoggerService } from '../../logger/logger.service'
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  public bookId: number = 0;
  public topics: any;
  public alertMessage: string = "";
  public topicsPath = "../../../assets/data/bookTopics.json";
  private bookData: any = {};

  booksForm = new FormGroup({
    topics: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    summary: new FormControl('', Validators.required)
  });

  constructor(private bookService: BooksService, private log: LoggerService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookService.getJSON(this.topicsPath).subscribe((topics: any) => {        
      this.topics = topics;
    }); 

    this.bookId =  this.route.snapshot.paramMap.get('id') ? Number(this.route.snapshot.paramMap.get('id')): 0;
    if(this.bookId > 0) {
      this.bookService.getBook(this.bookId).subscribe((bookDetails: any) => {        
        if(bookDetails && bookDetails.length > 0) {
          this.setFormValues(bookDetails[0])
        } else {
          this.alertMessage = "Book does not exists";
        }       
      });      
    }
  }
  public isBookExists() {
    const title = this.booksForm.controls["title"].value ? this.booksForm.controls["title"].value: "";
    let index = this.bookService.allbooks.findIndex((x: any) => x.title === title);
    this.alertMessage = (index >= 0) ? "Book Already Exists": "";    
  }
  private setFormValues(bookDetails: any) {
    this.bookData = bookDetails;
    this.booksForm.patchValue({     
      topics: bookDetails.topics,
      title: bookDetails.title,
      summary: bookDetails.summary,
    });
  }
 
  public bookUpdate(): void {
    let formData = this.booksForm.getRawValue();
    if(Number(this.bookId) > 0) { // This will update existing book
     
        this.alertMessage = (this.bookId <= this.bookService.allbooks.length) ? "": "Book does not exists"; 
          const patchObj = { original_book: this.bookData.title , new_book:  this.booksForm.controls["title"].value }
          this.bookService.updateBookTitle(patchObj).subscribe((bookDetails: any) => {        
             this.router.navigate(['home'])
          });  

         /* 
         
         formData.id = this.bookId.toString(); 
         this.bookService.updateBookDetails(formData).subscribe((bookDetails: any) => {        
            this.router.navigate(['home'])
        });  */
    } else { 
     //   formData.id = ((this.bookService.allbooks).length + 1).toString() ; 
        let bookData: any = { newBook: formData, allBooks: this.bookService.allbooks };
        this.bookService.addNewBook(bookData).subscribe((bookDetails: any) => {     
          this.router.navigate(['home'])
        });

    }    
  }

}
