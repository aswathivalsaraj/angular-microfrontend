import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormComponent } from './dynamic-form.component';
import { CustomFieldDirective } from './directives/custom-field.directive';
import { ButtonComponent } from './fields/button/button.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';
import { ChipComponent } from './fields/chip/chip.component';
import { DateComponent } from './fields/date/date.component';
import { DropdownComponent } from './fields/dropdown/dropdown.component';
import { FileComponent } from './fields/file/file.component';
import { RadioComponent } from './fields/radio/radio.component';
import { InputComponent } from './fields/input/input.component';
@NgModule({
  declarations: [
    DynamicFormComponent, CustomFieldDirective,
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
    MatIconModule,
    
  ],
  providers: [ DatePipe ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
