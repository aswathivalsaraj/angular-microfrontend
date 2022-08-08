import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;
  let http;
  beforeEach(() => {   
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BooksService]
    });
    service = TestBed.inject(BooksService);
    http = HttpClient;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
