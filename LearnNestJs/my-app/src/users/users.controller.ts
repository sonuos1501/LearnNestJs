import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll() {
        return this.usersService.getUsers();
    }

    @Post()
    create(@Body() user: any) {
        this.usersService.addUser(user);
        return 'User added successfully';
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() user: any) {
        this.usersService.updateUser(id, user);
        return 'User updated successfully';
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        this.usersService.deleteUser(id);
        return 'User deleted successfully';
    }
}
