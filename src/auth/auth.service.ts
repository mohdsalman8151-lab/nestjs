import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(() => UserService)) private readonly userService: UserService) { }
    isAuthencated: Boolean = false;
    login(email: string, password: string) {
        const user = this.userService.users.find((u) => u.email === email && u.password === password);
        if (!user) {
            return "User not found";
        }
        this.isAuthencated = true;
        return "MY_TOKEN";
    }
}
