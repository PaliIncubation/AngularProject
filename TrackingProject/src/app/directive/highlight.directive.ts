import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef,private renderder:Renderer2) { }
  @HostListener("click") highlighting(){
      this.renderder.addClass(this.element.nativeElement,"highLightBox")
  }

}
