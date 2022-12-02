import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appControlDirective]'
})
export class ControlDirectiveDirective {

  constructor(private el:ElementRef) { }
  appControlDirective : string ='';

  controlPostalCode(cp : string) : boolean
  {
    if(cp.length < 5 && cp.length > 0)
    {
      return false;
    }
    if(cp.length == 0)
    {
      return false;
    }
    if (isNaN(parseInt(cp)) == true)
    {
      return false;
    }
    return true;
  }
  @HostListener ('click') onclick(){
    if (!this.controlPostalCode(this.el.nativeElement.value))
    {
      this.el.nativeElement.style.background = 'red';
    }
    else{
      this.el.nativeElement.style.background = 'green';
    }
  }
}
