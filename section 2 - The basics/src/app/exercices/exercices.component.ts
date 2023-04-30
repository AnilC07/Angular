import { Component } from '@angular/core';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styles: [`
  .whiteText{
    color:white;
  }
  `]
})
export class ExercicesComponent {
  displayPara= true
  array: Array<number> = []

  onDisplayHide = () => {
    this.displayPara = !this.displayPara
    this.array.push( this.array.length + 1)
  }
}
