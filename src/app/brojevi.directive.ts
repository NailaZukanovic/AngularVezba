import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[brojevi]'
})
export class BrojeviDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup.leave') keyUp(){
    let value = this.el.nativeElement.value;
    let krajBroja = "";
    if(value.length === 10)
      krajBroja = value.substring(6,9) + "-" + value.substring(9);
    else
      krajBroja = value.substring(6);
    this.el.nativeElement.value = value.substring(0,3) + '/' + value.substring(3,6) + '-' + krajBroja;
 }

}
