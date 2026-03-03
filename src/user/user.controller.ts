import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { UserService } from './user.service';

@Controller('user') //controller decorator
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    getUserData() {
        return this.userService.getAllUsers();
    }

}
