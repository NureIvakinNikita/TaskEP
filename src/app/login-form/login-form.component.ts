import { Component } from '@angular/core';
import { LoginFormService } from '../services/login-form.service'; // Assuming you're using a service for login

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user = { fullName: '', email: '', password: '' };

  constructor(private loginFormService: LoginFormService) {}

  onSubmit() {
    const result = this.loginFormService.loginUser(this.user.email, this.user.password);
    console.log("hello", result);
    alert(result);
    
  }
}
