import {Component, OnInit, Input} from '@angular/core'

@Component({
  selector:'app-odd-component',
  templateUrl:'./odd.component.html',
  styles:[`p{color:blue}`]
})

export class OddComponent implements OnInit{
@Input() number:number[];

  constructor(){

  }

  ngOnInit(): void {

  }
}
