import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeBookComponent } from './home-book.component';
import { BooksService } from 'src/app/services/books.service';
import { HttpClientModule } from '@angular/common/http';
describe('HomeBookComponent', () => {
  let component: HomeBookComponent;
  let fixture: ComponentFixture<HomeBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBookComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
