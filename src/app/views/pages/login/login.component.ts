import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/dtos/login-dto';
import { AuthResultDto } from 'src/dtos/auth-result-dto';
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
    if (!this.loginDto.userName || !this.loginDto.password) {
      alert('Login info cannot be empty!');
      return;
    }

    this.authService.login(this.loginDto).subscribe((data) => {
      if (data) {
        let res: AuthResultDto;
        res = data as AuthResultDto;
        localStorage.setItem('jwt', res.token)
        this.router.navigateByUrl('');
      }
      else
        alert('Invalid login!');
    })
  }

}
