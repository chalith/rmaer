import { Injectable } from "@angular/core";
import { JudgeDto, UserDto } from "../dtos/user-dto";
import { ApiService } from "./api.service";

@Injectable()
export class UserService {

    constructor(private apiService: ApiService) {
    }

    register(userDto: UserDto) {
        return this.apiService.post('User/Register', {}, userDto);
    }

    get(id: number) {
        this.apiService.get('User/Get/' + id, {}).subscribe(data => {
            console.log(data);
        });
    }

    getAll() {
        this.apiService.get('Photo/Get', {}).subscribe(data => {
            console.log(data);
        });
    }

    MakeJudge(judgeDto: JudgeDto) {
        this.apiService.post('User/MakeJudge', {}, judgeDto).subscribe(data => {
            console.log(data);
        });
    }
}