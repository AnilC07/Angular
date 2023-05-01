import { Component, EventEmitter, Output } from "@angular/core";

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

  onAddServer(nameInput: { value: any; }, contentInput: { value: any; }) {
    console.log(nameInput.value)
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: contentInput.value });

  }

  onAddBlueprint(nameInput: { value: any; }, contentInput: { value: any; }) {
    this.blueprintCreated.emit({ blueprintName: nameInput.value, blueprintContent: contentInput.value })
  }
}
