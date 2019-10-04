import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init: number = null;
  public counter: number = 0;
  private countdownTimeRef: any = null;
  constructor() { }

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.clearTimeout();
  }

  ngOnChanges(changes: any) {
    console.log(changes.init.currenValue);
    this.startCountdown();
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countdownTimeRef = setTimeout(() => {
       this.counter = this.counter - 1;
       this.processCount();
     }, 1000);
  }

  private clearTimeout() {
    if (this.countdownTimeRef) {
      clearTimeout(this.countdownTimeRef);
      this.countdownTimeRef = null;
    }
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
