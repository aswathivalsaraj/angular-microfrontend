import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs/internal/Observable';
import { formConfig } from '../../config/form-config';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'lib-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent extends formConfig implements OnInit {

  public filteredOptions: Observable<any[]>;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private util: UtilityService) {
    super();
  }

  ngOnInit(): void {
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
    //  this.field.options.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

  //  this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
  //  const index = this.fruits.indexOf(fruit);

    if (0) {
      //this.fruits.splice(index, 1);
    }
  }
  deselect(){}
  selectViaInteraction(){
    let result = this.field.options?.filter(res=>res.selected).map(ele=>ele.value);
    this.group.controls[this.field.name].setValue(result);
    this.group.controls[this.field.name].updateValueAndValidity();
    if(this.field) {
      this.util.invokeEvent.next(this.field);
    }
  }
  changeSelected($event: any, category: any): void {
    category.selected = $event.selected;
  }
  selectChange(event: any): void {
    debugger;
    console.log("EVENT", event)
 //   this.fruits.push(event.option.viewValue);
 //   this.chipInput.nativeElement.value = '';
  //  this.fruitCtrl.setValue(null);
  }

}
