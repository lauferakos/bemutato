import { User } from "src/app/Models/user";

export interface UserState {
    readonly users:User[]
  }
  
  
  export const initialUserState: UserState = {
    users:[]
  }