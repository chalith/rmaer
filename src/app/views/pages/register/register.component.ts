import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/dtos/user-dto';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public userDto: UserDto;
  public retypePassword: string;

  constructor(private userService: UserService,
    private router: Router) {
    this.userDto = new UserDto();
    this.retypePassword = '';
  }

  submit() {
    this.userDto.userName = this.userDto.email;
    if (!this.userDto.firstName || !this.userDto.lastName ||
      !this.userDto.email || !this.userDto.password) {
      alert('Register info cannot be empty!');
      return;
    }
    else if (this.userDto.password !== this.retypePassword) {
      alert('Password missmatch!');
      return;
    }

    this.userService.register(this.userDto).subscribe(data => {
      alert('User registration successful!');
      this.router.navigateByUrl('/login');
    })
  }
}
