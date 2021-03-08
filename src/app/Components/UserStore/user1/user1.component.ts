import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserStoreService } from 'src/app/Services/user-store.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  name:string
  age:number
  id: number

  constructor(private store:UserStoreService) {
    store.users$.subscribe(u => length = this.id = u.length +1)
   }

  ngOnInit(): void {
  }

  

  submit():void {
    let u:User = {
      id: this.id,
      name: this.name,
      age: this.age
    }
    if(this.id !== 0)
    this.store.addUser(u)
  }

}
