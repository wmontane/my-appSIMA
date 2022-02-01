import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Btnloading]'
})
export class BtnloadingDirective implements OnInit {

  constructor(private elementRef: ElementRef<HTMLButtonElement>,private renderer: Renderer2 ) { 
  }


  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement,'btn-outline-success');
 
     }


     @HostListener('click')

onclick(){
  console.log('CLick Directiva');
  this.renderer.setProperty(this.elementRef.nativeElement,'innerHTML',
  '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> loading...');
 
}

/*
@HostListener('mouseenter')  
onMouseEnter()
{
  this.renderer.removeClass(this.elementRef.nativeElement,'btn-outline-success');
  this.renderer.addClass(this.elementRef.nativeElement,'btn-outline-primary');
  console.log('onMouseEnter');
 }
*/

}
