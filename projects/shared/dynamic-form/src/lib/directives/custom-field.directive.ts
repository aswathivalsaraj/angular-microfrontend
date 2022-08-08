import { Directive, Input, OnInit, ElementRef,ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../config/field-config';
import { ButtonComponent } from '../fields/button/button.component';
import { CheckboxComponent } from "../fields/checkbox/checkbox.component";
import { ChipComponent } from "../fields/chip/chip.component";
import { DateComponent } from "../fields/date/date.component";
import { FileComponent } from "../fields/file/file.component";
import { DropdownComponent } from "../fields/dropdown/dropdown.component";
import { RadioComponent } from "../fields/radio/radio.component";
import { InputComponent } from "../fields/input/input.component";
import { StaticHtmlComponent } from "../fields/static-html/static-html.component";

@Directive({
  selector: '[libCustomField]'
})
export class CustomFieldDirective extends FieldConfig implements OnInit {
  @Input() public fieldConfig: FieldConfig;
  @Input() public group: FormGroup;
  private componentInstance: any;
  public componentConfig: any = {
    input: InputComponent,
    date: DateComponent,
    radio: RadioComponent,
    dropdown: DropdownComponent,
    checkbox: CheckboxComponent,
    file: FileComponent,
    chip: ChipComponent,
    button: ButtonComponent,
    static: StaticHtmlComponent
  }
  constructor(private factoryResolver: ComponentFactoryResolver, private elementRef: ElementRef, private viewContainerRef: ViewContainerRef) {
    super();
  }

  ngOnInit(){
    this.loadComponent();
    this.formSubmit();
    this.group.controls[this.fieldConfig.name].valueChanges.subscribe((value) => {
        this.loadErrorMEssage(this.fieldConfig);
    });
  }

  private loadComponent(){
    const field = this.fieldConfig.control;
    const component = this.componentConfig[field];
    if(field && component) {
      const compoentFactory  = this.factoryResolver.resolveComponentFactory(component);
      this.componentInstance = this.viewContainerRef.createComponent(compoentFactory);
      this.componentInstance.instance.field = this.fieldConfig;
      this.componentInstance.instance.group = this.group;
      const dynamicElement = this.componentInstance.location.nativeElement;
      this.elementRef.nativeElement.appendChild(dynamicElement)
    } else {
      console.log("Please verify json format")
    }
  }

  private loadErrorMEssage(field: FieldConfig) {
    const fieldErrors = this.group.controls[field.name].errors;
    this.elementRef.nativeElement.nextElementSibling.innerHTML = "";
    if(field.errorMsg && fieldErrors) {
      const errorKey:string = Object.keys(fieldErrors)[0];
      const filteredMsgs = field.errorMsg.filter(err=> err[errorKey]);
      if(filteredMsgs && filteredMsgs.length > 0) {
        let filteredMsg  =  filteredMsgs[0];
        const customerrorMsg = filteredMsg[errorKey];
        this.elementRef.nativeElement.nextElementSibling.innerHTML = customerrorMsg;
      }
    }  
    console.log(this.fieldConfig.formsubmit)  
  } 
  
  private formSubmit(){
    console.log("Form submit Invoked");
   
  }
}
