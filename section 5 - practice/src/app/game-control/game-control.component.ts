import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  interval: any;
  timer = 0
  @Output() timerEventEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  startTimer() {
    this.interval = setInterval(() => {
      this.timerEventEmitter.emit(this.timer+1)
      this.timer = this.timer+1
    },1000)
  }


  stopTimer(){
   clearInterval(this.interval)
  }

}
