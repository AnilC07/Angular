import { Component, OnInit, Input } from '@angular/core' ;

@Component({
  selector:' app-even-component',
  templateUrl: './even.component.html',
  styles:[`p{color:palegreen}`]
})

export class EvenComponent {
@Input() number:number[]

  constructor(){}


}
