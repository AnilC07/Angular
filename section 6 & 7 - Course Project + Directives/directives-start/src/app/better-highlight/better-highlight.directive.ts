import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'lightBlue'
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','lightblue')
    this.backgroundColor = this.defaultColor

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','lightblue')
    // this.backgroundColor = 'lightblue'
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent')
    // this.backgroundColor = 'transparent'
    this.backgroundColor = this.defaultColor

  }
}
