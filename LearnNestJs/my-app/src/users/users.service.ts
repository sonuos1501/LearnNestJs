import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = ['User1', 'User2', 'User3'];

    getUsers() {
        return this.users
    }

    addUser(user: any) {
        this.users.push(user)
    }

    updateUser(id: number, user: any) {
        this.users[id] = user
    }

    deleteUser(id: number) {
        this.users.splice(id, 1)
    }

}
