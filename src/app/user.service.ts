import { Injectable } from '@angular/core';
import { data, User } from './data';

@Injectable({
  providedIn: 'root', //Available for the whole application
})
export class UserService {
  private userData: User[] = data;

  constructor() {}

  getUserData(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.userData);
    });
  }
}
