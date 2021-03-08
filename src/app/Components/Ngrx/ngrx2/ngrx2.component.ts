import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUsers } from 'src/app/Store/Selectors/user.selectors';
import { AppState } from 'src/app/Store/States/app.state';
import * as UserActions from 'src/app/Store/Actions/action'
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-ngrx2',
  templateUrl: './ngrx2.component.html',
  styleUrls: ['./ngrx2.component.css']
})
export class Ngrx2Component implements OnInit {

  users$ = this.store.pipe(select(selectUsers))

  constructor(private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
  }

  delete(u:User):void {
    this.store.dispatch(new UserActions.UserRemoved(u))
  }

}
