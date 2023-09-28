import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter: any[] = [];
  count: number = 0;

  countUp() {
    this.count++;
    return this.count;
  }
  countDown() {
    this.count--;
    return this.count;
  }
}
