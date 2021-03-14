import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private ele: ElementRef, private render2: Renderer2) { }

  @HostBinding('style.backgroundColor') bgColor = 'aqua';

  @HostListener('mouseenter') SuKienHover() {
    this.ele.nativeElement.style.backgroundColor = 'red'; // cach 1
    // this.render2.setStyle(this.ele.nativeElement, 'background-color', 'yellow'); // cach 2
  }
  @HostListener('mouseleave') SuKienLeave() {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'blue');
  }

}
