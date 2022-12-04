import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { CustomErrorDirective } from './directives/custom-error.directive';
import { UtcDatePipe } from './pipes/utc-date.pipe';


const sharedDirectives =[CustomErrorDirective]
@NgModule({
  declarations: [
    SharedComponent,
    CustomErrorDirective,
    UtcDatePipe
  ],
  imports: [
  ],
  exports: [
    SharedComponent, CustomErrorDirective, UtcDatePipe
  ]
})
export class SharedModule { }
