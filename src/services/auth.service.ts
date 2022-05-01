import { ApiService } from "./api.service";
import { LoginDto } from "../dtos/login-dto";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    constructor(private apiService: ApiService) {
    }

    login(loginDto: LoginDto) {
        return this.apiService.post('Auth/Login', {}, loginDto);
    }

    getAuthStatus() {
        return localStorage.getItem('jwt') ? true : false;
    }
}