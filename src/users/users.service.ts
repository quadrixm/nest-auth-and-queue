import { Injectable } from '@nestjs/common';
import { User } from 'app/users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({ username });
  }

  async create(user: DeepPartial<User>): Promise<User | undefined> {
    return this.usersRepository.save(user);
  }
}
