import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { formConfig } from '../../config/form-config';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'lib-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent extends formConfig implements OnInit {
  constructor(private util: UtilityService, private datepipe: DatePipe) {
    super();
  }

  ngOnInit(): void {
  }
  dateSelected(event: any) {
    if(event.target.value && event.target.value!="") {
      let value =  this.datepipe.transform(event.target.value, this.field.format);
      this.field.value = value?.toString();
    }
    if(this.field) {
      this.util.invokeEvent.next(this.field);
    }
  }

}
