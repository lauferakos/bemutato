import { Action } from '@ngrx/store';
import { User } from '../../Models/user';

export const USER_ADD = '[USER] User add';
export const USER_REMOVE = '[USER] User remove';

export class UserAdded implements Action {
    public readonly type = USER_ADD;
    constructor(public payload: User) { }
  }

  export class UserRemoved implements Action {
    public readonly type = USER_REMOVE;
    constructor(public payload: User) { }
  }

  export type UserActions = UserAdded | UserRemoved;