import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {
  
  constructor(private data:DataService,private element:ElementRef,private renderder:Renderer2) { }
  @Input("Highlight")set value(object:{x:number,y:number}){
    if(this.data.Xvalue===object.x&&this.data.Yvalue===object.y){
      this.renderder.setStyle(this.element.nativeElement,'backgroundcolor','black')
    }else{
      this.renderder.setStyle(this.element.nativeElement,'backgroundcolor','transparent')
    }
  }
}
