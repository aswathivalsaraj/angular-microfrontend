import { Component, OnInit } from '@angular/core';
import { formConfig } from '../../config/form-config';
import { UtilityService } from '../../services/utility.service';
@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends formConfig implements OnInit  {

  constructor(private util: UtilityService) {
    super();
  }

  ngOnInit(): void {
  }
  checkBoxChecked(event: any) {
    if(this.field) {
      this.field.isChecked = event.checked;
      this.util.invokeEvent.next(this.field);
    }
  }

}
