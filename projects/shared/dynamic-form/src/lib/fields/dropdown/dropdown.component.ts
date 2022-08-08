import { Component, OnInit } from '@angular/core';
import { formConfig } from '../../config/form-config';
import { UtilityService } from '../../services/utility.service';
@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent extends formConfig implements OnInit {

  constructor(private util: UtilityService) {
    super();
  }

  ngOnInit(): void {
  }
  dropDownValueChanged(event: any, opt: any) {
    if(this.field) {
      this.util.invokeEvent.next(this.field);
    }
  }

}
