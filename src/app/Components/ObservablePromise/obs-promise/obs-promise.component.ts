import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-promise',
  templateUrl: './obs-promise.component.html',
  styleUrls: ['./obs-promise.component.css']
})
export class ObsPromiseComponent implements OnInit {

  constructor() { }

  observable = interval(1000); 
  promise
  

  sub:Subscription

  ngOnInit(): void {
  }

  initPromise(): void {
    this.promise = new Promise((resolve, reject) => {
      resolve(123);
      console.log('Promise értéke megváltozott')
    });
  }
  logPromise(): void {
    this.promise.then((value) => {
      console.log(value);
    });
  }

  logObservable(): void {
    
    this.sub = this.observable.subscribe((value) => {
      console.log(value)
    });
  }


  notlogObservable():void {
    this.sub.unsubscribe();
  }


}
