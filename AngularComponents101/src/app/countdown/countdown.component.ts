import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init: number = null;
  public counter: number = 0;

  constructor() { }

  ngOnInit() {
    this.startCoutdown();
  }

  startCoutdown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
     setTimeout(() => {
       this.counter = this.counter - 1;
       this.processCount();
     }, 1000);
  }

  processCount() {
    this.onDecrease.emit(this.counter);
    console.log('Count is: ', this.counter);

    if (this.counter === 0) {
      this.onComplete.emit();
      console.log('Counter END');
    } else {
      this.doCountdown();
    }
  }

}
