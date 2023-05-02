import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styles: [` p{ color: blue }`]
})

export class ServerElementComponent implements OnInit, OnChanges,DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string }
  @ViewChild('heading',{static:true}) header: ElementRef;
  @ContentChild('paragraph',{static:true}) paragraph: ElementRef;

  constructor(){
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
    console.log('textContent ' + this.header.nativeElement.textContent)
    console.log('textContent  of paragraph ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
    console.log('textContent of paragraph ' + this.paragraph.nativeElement.textContent)
  }


  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
    console.log('textContent ' + this.header.nativeElement.textContent)
  }


  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called')
  }
}
