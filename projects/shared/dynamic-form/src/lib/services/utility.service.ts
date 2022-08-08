import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public dynamicForm!: FormGroup;
  public invokeEvent:Subject<any> = new Subject();
  public formSubmitted:Subject<any> = new Subject();
  constructor() { }
}
