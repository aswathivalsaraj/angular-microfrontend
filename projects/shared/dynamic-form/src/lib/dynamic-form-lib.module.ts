import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormLibComponent } from './dynamic-form-lib.component';
import { CustomFieldDirective } from './directives/custom-field.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { StaticHtmlComponent } from './fields/static-html/static-html.component';
import { ButtonComponent } from './fields/button/button.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';
import { ChipComponent } from './fields/chip/chip.component';
import { DateComponent } from './fields/date/date.component';
import { DropdownComponent } from './fields/dropdown/dropdown.component';
import { FileComponent } from './fields/file/file.component';
import { InputComponent } from './fields/input/input.component';
import { RadioComponent } from './fields/radio/radio.component';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    DynamicFormLibComponent,
    CustomFieldDirective,
    StaticHtmlComponent,
    ButtonComponent,
    CheckboxComponent,
    ChipComponent,
    DateComponent,
    DropdownComponent,
    FileComponent,
    InputComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,    
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  exports: [
    DynamicFormLibComponent
  ],
  providers: [ DatePipe ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    StaticHtmlComponent,
    ButtonComponent,
    CheckboxComponent,
    ChipComponent,
    DateComponent,
    DropdownComponent,
    FileComponent,
    InputComponent,
    RadioComponent
  ]
})
export class DynamicFormLibModule { }
