import { Component, OnInit } from '@angular/core';
import { formConfig } from '../../config/form-config';
import { UtilityService } from '../../services/utility.service';
@Component({
  selector: 'lib-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent extends formConfig implements OnInit {

  constructor(private utilityService: UtilityService) {
    super();
  }

  ngOnInit(): void {
  }
  
  radioChange(){
    if(this.field) {
      this.utilityService.invokeEvent.next(this.field);
    }
  }
}
