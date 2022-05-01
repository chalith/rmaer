import { UserType } from "../../common/enums";

export class UserDto
{
    id: number = 0;
    email: string = '';
    phoneNumber: string = '';
    userName: string = '';
    firstName: string = '';
    lastName: string = '';
    type: UserType = UserType.Contestant;
    password: string = '';
}

export class JudgeDto extends UserDto
{
    judgeCode: string = '';
}