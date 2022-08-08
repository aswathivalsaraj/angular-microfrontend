import { Component } from '@angular/core';
import * as myData from '../assets/mockData/sample.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-library';
  public formData: any;
  constructor(){
   const jsonData: any = myData;
    this.formData = jsonData.views.sections[0];
  } 

  triggerEvent(field: any) {
     /* if(field.methodName && this[field.methodName]) {
        this[field.methodName](field);
        console.log("bnnbnhg")
      } */
  }
  validateLogin(...field: any[]){
    console.log("INNNNNNNNNNNNN", field)
  }
  checkBoxChecked(...field: any[]) {
    console.log("Checked")
  }
  radioSelected(...field:any[]) {
    console.log("Radio selected")
  }
  dateSelected(...field: any[]) {
    console.log("dateSelected selected", ...field)
  }
  
 /* onBlurMethod(...field) {
    console.log("Blur method invoked")
  }
  onKeyPressMethod(...field) {
    console.log("onKeyPressMethod method invoked")
  }
  onKeyDownMethod(...field) {
    console.log("onKeyDownMethod invoked")
  }
  onKeyUpMethod(...field) {
    console.log("onKeyUpMethod method invoked")
  } */
}
