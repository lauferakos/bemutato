import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserStoreService } from 'src/app/Services/user-store.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  users: User[]
  
  constructor(private store:UserStoreService) {
    this.store.users$.subscribe(u => this.users = u)
   }

  ngOnInit(): void {
  }

  delete(u:User):void {
    this.store.removeUser(u)
  }

}
