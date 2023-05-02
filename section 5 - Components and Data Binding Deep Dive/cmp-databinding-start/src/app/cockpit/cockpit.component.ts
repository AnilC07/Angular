import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styles: [` p{ color: blue }`]
})

export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
 @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  // newServerName = '';
  // newServerContent = '';

 @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;

  onAddServer(nameInput: { value: any; }) {
    console.log(this.serverContentInput)
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });

  }

  onAddBlueprint(nameInput: { value: any; }) {
    this.blueprintCreated.emit({blueprintName: nameInput.value, blueprintContent:this.serverContentInput.nativeElement.value})
  }
}
