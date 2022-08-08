import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditBookComponent } from './edit-book.component';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookComponent ],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
