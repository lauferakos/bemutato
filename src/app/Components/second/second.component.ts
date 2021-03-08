import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input() counter: number;

  @Output() incrementEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  increment(): void {
    this.incrementEvent.emit();
  }

}
