import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {

  constructor() {}

  loginUser(email: string, password: string): string {
    // Перевіряємо, чи є масив користувачів в cookie
    const usersCookie = this.getCookie('users');
    if (!usersCookie) {
      return 'No users found';
    }

    const existingUsers: User[] = JSON.parse(atob(usersCookie)); // Розшифровуємо дані з cookie

    // Шукаємо користувача в масиві за email
    const user = existingUsers.find((u) => u.email === email);

    if (!user) {
      return 'User not found';
    }

    // Перевіряємо пароль
    if (user.password === password) {
      return `Welcome, ${user.fullName}! Next functionality is not available yet.`; // Вітаємо користувача
    } else {
      return 'Incorrect password'; // Якщо пароль невірний
    }
  }

  private getCookie(name: string): string | null {
    const matches = document.cookie.match(new RegExp(
      `(\\s|^)${name}=([^;]+)`
    ));
    return matches ? matches[2] : null;
  }
}
