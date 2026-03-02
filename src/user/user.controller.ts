import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('user') //controller decorator
export class UserController {
    @Get()
    getUserData(){
        return "get user data successfully!."
    }
}
