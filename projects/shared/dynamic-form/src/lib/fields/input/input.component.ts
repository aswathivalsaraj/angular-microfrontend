import { Component, OnInit } from '@angular/core';
import { formConfig } from '../../config/form-config';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends formConfig implements OnInit {
  public showClearBtn: boolean = false;
  constructor(private utilityService: UtilityService) {
    super();
  }
  ngOnInit(): void {}
  public valueEntered(event: any): void {
    this.showClearBtn   =   this.group.get(this.field.name)?.value ? true: false;
    if(this.field && event.type) {
      this.field['methodName'] = event.type == "keyup" ? this.field['onKeyUp'] : (event.type == "keydown" ? 
      this.field['onKeyDown']: (event.type == "keypress" ? this.field['onKeyPress']: this.field['onblur'] ))
      this.utilityService.invokeEvent.next(this.field);
    }
  }
  public clearInput(): void {
    this.utilityService.dynamicForm.controls[this.field.name].reset();
  }

}
