import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


export type User = {
  id : number;
  name : string;
  username : string;
  password: string;
}


@Injectable()
export class UsersService {
  private readonly users : User[] = [
    {
      id: 1,
      name: 'Tpho',
      username: 'tpho',
      password: 'secure'
    },

    {
      id: 2,
      name: 'Tpho2',
      username: 'tpho2',
      password: 'secure2'
    }
  ]
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOneById(id: number) {
    return `This action returns a #${id} user`;
  }

  findOneByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
