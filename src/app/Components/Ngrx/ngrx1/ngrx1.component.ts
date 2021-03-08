import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/Models/user';
import { AppState } from 'src/app/Store/States/app.state';
import * as UserActions from 'src/app/Store/Actions/action'
import { selectUsers } from 'src/app/Store/Selectors/user.selectors';

@Component({
  selector: 'app-ngrx1',
  templateUrl: './ngrx1.component.html',
  styleUrls: ['./ngrx1.component.css']
})
export class Ngrx1Component implements OnInit {

  name:string
  age:number
  id: number


  constructor(private store: Store<AppState>) { 
    this.store.pipe(select(selectUsers)).subscribe(
      u => this.id = u.length +1
    );
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
    this.store.dispatch(new UserActions.UserAdded(u))
  }
  
}
