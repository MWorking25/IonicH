import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[hide-header], header',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeaderDirective implements OnInit {

  @Input() header: HTMLElement;
  headerHeight;
  scrollContent;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
  
    this.headerHeight = this.header.clientHeight;
    this.renderer.setStyle(this.header, 'webkitTransition', 'top 700ms');
    this.scrollContent = this.elem.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setStyle(this.scrollContent, 'webkitTransition', 'margin-top 700ms');


  }

  onContentScroll(event){
    if(event.scrollTop > 56){
      this.renderer.setStyle(this.header, "top", "-56px")
      this.renderer.setStyle(this.scrollContent, "margin-top", "0px")
    } else {
      this.renderer.setStyle(this.header, "top", "0px");
      this.renderer.setStyle(this.scrollContent, "margin-top", "56px")
    }
  }

}
