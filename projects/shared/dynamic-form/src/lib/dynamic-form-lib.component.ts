import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UtilityService } from './services/utility.service'; 
import { FieldConfig } from "./config/field-config";
@Component({
  selector: 'dynamic-form-lib',
  templateUrl: `./dynamic-form-lib.component.html`,
  styleUrls: ['./dynamic-form-lib.component.css']
})
export class DynamicFormLibComponent implements OnInit {
  @Input() public formData: any;
  public fbGroup: any = {};
  public fieldControls: any;
  @Output() public invokeEvent: EventEmitter<FieldConfig> = new EventEmitter<FieldConfig>();
  constructor(public utilityService: UtilityService, private fb: FormBuilder) { console.log("Library loaded"); }
  get form() { return this.utilityService.dynamicForm.controls } 
  ngOnInit(): void {
    this.fieldControls  = this.formData.controls ? this.formData.controls: [];
    if(this.fieldControls && this.fieldControls.length > 0) {
      this.utilityService.dynamicForm =  this.createFormGroup();
    } 
    this.utilityService.invokeEvent.subscribe((fieldData)=>{
      this.invokeEvent.emit(fieldData);
    });
  }
  public formSubmitted(): void {
    
  }
  private createFormGroup(): FormGroup {
    this.fieldControls.forEach((control: FieldConfig) => {
      const value = control.defaultVal ? control.defaultVal: (control.value ? control.value: "");
      this.fbGroup[control.name] = new FormControl(value, this.addValidations(control))
    });
    return this.fb.group(this.fbGroup);
  }  
  private addValidations(control: FieldConfig):  ValidatorFn[] {
    const validator: ValidatorFn[] = [];
    control.required ? validator.push(Validators.required): validator;
    control.pattern ? validator.push(Validators.pattern(control.pattern)): validator;
    control.minlength ? validator.push(Validators.minLength(control.minlength)): validator;
    control.maxlength ? validator.push(Validators.maxLength(control.maxlength)): validator;
    return validator;
  }
}
