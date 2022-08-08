import { Component, OnInit } from '@angular/core';
import { formConfig } from '../../config/form-config';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends formConfig implements OnInit {

  constructor(private util: UtilityService) {
    super();
  }

  ngOnInit(): void {
  }

  buttonClicked() {
      if(this.field.formsubmit) {
        this.util.invokeEvent.next(this.group.value);
      } else {
        this.util.invokeEvent.next(this.field);
      }
  }
}
