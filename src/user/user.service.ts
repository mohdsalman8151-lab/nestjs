import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) { }
    users: { id: number, name: string, email: string, password: string }[] = [
        { id: 1, name: "John", email: "john@gmail.com", password: "Aa@123456" },
        { id: 2, name: "Jane", email: "jane@gmail.com", password: "Aa@123456" },
        { id: 3, name: "Bob", email: "bob@gmail.com", password: "Aa@123456" }
    ];
    getAllUsers() {
        if (!this.authService.isAuthencated) {
            return "You are not authorized";
        }
        return this.users;
    }
    getUserById(id: number) {
        if (!this.authService.isAuthencated) {
            return "You are not authorized";
        }
        return this.users.find((u) => u.id == id);
    }
    createUser(user: { id: number, name: string, email: string, password: string }) {
        this.users.push(user);
        return user;
    }
    updateUser() {

    }
    deleteUser() {

    }
}
