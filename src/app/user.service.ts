import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  addUser(user: IUser) {
    this.users.push(user);
  }
}
