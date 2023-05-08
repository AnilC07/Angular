import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Ce qui se passe ici c'est que l'application de la classe a l'element depend de letat du booleen. cela ne se fera que l'orsque celui ci est a true
  @HostBinding('class.open') isOpen: boolean = false

  constructor(private elRef: ElementRef) { }

  // Refereme la miste dans lelement qui contien la directive

  // @HostListener('click') toggleOpen(eventData: Event) {
  //   this.isOpen = !this.isOpen;
  // }

  // Applique la directive au document
  @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
