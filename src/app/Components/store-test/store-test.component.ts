import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-test',
  templateUrl: './store-test.component.html',
  styleUrls: ['./store-test.component.css']
})
export class StoreTestComponent implements OnInit {

  isServiceStoreVisible : boolean = false;
  isNgrxStoreVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleServiceStore() {
    this.isServiceStoreVisible = !this.isServiceStoreVisible
  }

  toggleNgrxStore() {
    this.isNgrxStoreVisible = !this.isNgrxStoreVisible;
  }
}
