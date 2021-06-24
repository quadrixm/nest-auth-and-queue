import { Injectable } from '@nestjs/common';
import { UsersService } from 'app/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'app/auth/create-user.dto';
import { User } from 'app/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      return null;
    }
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      return null;
    }
    delete user.password;
    return user;
  }

  async login(user: any) {
    const payload = { username: user.username, id: user.id };
    try {
      const token = this.jwtService.sign(payload);
      return { token };
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async signup(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const user: User = { ...createUserDto };
    user.password = await bcrypt.hash(createUserDto.password, salt);
    const newUser = await this.usersService.create(user);
    delete newUser.password;
    return newUser;
  }
}
