import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private readonly _userSource = new BehaviorSubject<User[]>([]);

  readonly users$ = this._userSource.asObservable();

  getUsers(): User[] {
    return this._userSource.getValue();
  }

  private _setUsers(users: User[]) {
    this._userSource.next(users);
  }

  addUser(user: User): void {
    const users = [...this.getUsers(), user];
    this._setUsers(users);
  }

  removeUser(user: User): void {
    const users = this.getUsers().filter(u => u.id !== user.id);
    this._setUsers(users);
  }
  constructor() { }
}
