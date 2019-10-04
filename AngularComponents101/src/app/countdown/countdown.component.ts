import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

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
    // Emmit Event COUNT
    console.log('Count is: ', this.counter);

    if (this.counter === 0) {
      // Emmit Event COUNT END
      console.log('Counter END');
    } else {
      this.doCountdown();
    }
  }

}
