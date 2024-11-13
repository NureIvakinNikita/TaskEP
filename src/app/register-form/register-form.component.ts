import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { RegisterServiceService } from '../services/register-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  user: User = new User('', '', ''); // Ініціалізація новим об'єктом User

  constructor(private registerService: RegisterServiceService, private router: Router) {}

  onSubmit() {
    const result = this.registerService.registerUser(this.user);

    if (result === 'User already exists') {
      console.log('Error: User already exists');
      alert('Error: User already exists');
    } else if (result === 'User created successfully') {
      console.log('User registered successfully');
      alert('User registered successfully');
      this.router.navigate(['/login']);
    }
  }
}
