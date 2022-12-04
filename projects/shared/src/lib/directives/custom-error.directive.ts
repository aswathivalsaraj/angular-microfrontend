import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomError]'
})
export class CustomErrorDirective  implements AfterViewInit{
  @Input() bgColor: string = '';
  constructor(private el: ElementRef) { }
  ngAfterViewInit(){
    this.el.nativeElement.bgColor = this.bgColor;
    console.log("Directives loaded", this.bgColor)
  }
}
