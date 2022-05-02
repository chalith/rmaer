import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/dtos/login-dto';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginDto: LoginDto;

  constructor(private authService: AuthService,
    private router: Router) {
    this.loginDto = new LoginDto();
  }

  login() {
    if (!this.loginDto.userName || !this.loginDto.password)
      alert('Login info cannot be empty!');

    this.authService.login(this.loginDto).subscribe(data => {
      if (data) {
        localStorage.setItem('jwt', data.toString())
        this.router.navigateByUrl('');
      }
      else
        alert('Invalid login!');
    })
  }

}
