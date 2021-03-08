import { initialUserState, UserState } from "../States/user.state";
import * as Actions from '../Actions/action'

export function userReducers (state = initialUserState, action: Actions.UserActions): UserState {
    switch (action.type) {
      case Actions.USER_ADD:
        console.log('User add to ngrx store');
        return {
          ...state,
          users: state.users.concat(action.payload),
        };
      case Actions.USER_REMOVE:
        console.log('User remove from ngrx store');
        return {
          ...state,
          users: state.users.filter(u => u.id != action.payload.id)
        };
      default:
        return state;
    }
  }