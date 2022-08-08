import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewBooksComponent } from './view-books.component';
import { BooksService } from 'src/app/services/books.service';
import  * as  booksData  from "./../../../assets/data/books-data.json";
describe('ViewBooksComponent', () => {
  let component: ViewBooksComponent;
  let fixture: ComponentFixture<ViewBooksComponent>;
  let bookService: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBooksComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBooksComponent);
    component = fixture.componentInstance;
    bookService = TestBed.get(BooksService);
    component.booksList = booksData;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should call getAllbooks for fetching all the books', () => {   
    spyOn(bookService, 'getAllBooks').and.callThrough();    
    //expect(component.booksList.length); 
  })
});
