import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterServiceService {
  private existingUsers: User[] = [];

  constructor() {
    const usersCookie = this.getCookie('users');
    if (usersCookie) {
      this.existingUsers = JSON.parse(atob(usersCookie)); 
    }
  }

  registerUser(userData: User): string {
    const userExists = this.existingUsers.some(
      (user) => user.email === userData.email
    );

    if (userExists) {
      return 'User already exists';
    }
    this.existingUsers.push(userData);

    const encryptedUsers = btoa(JSON.stringify(this.existingUsers));
    this.setCookie('users', encryptedUsers);

    return 'User created successfully';
  }

  private setCookie(name: string, value: string): void {
    document.cookie = `${name}=${value}; path=/;`;
  }

  private getCookie(name: string): string | null {
    const matches = document.cookie.match(new RegExp(
      `(\\s|^)${name}=([^;]+)`
    ));
    return matches ? matches[2] : null;
  }
}