import { createSelector } from "@ngrx/store";
import { AppState } from "../States/app.state";
import { UserState } from "../States/user.state";

const selectUser = (state: AppState) => state.user;

export const selectUsers = createSelector(
  selectUser,
  (state: UserState) => {
      return state.users;
  }
);