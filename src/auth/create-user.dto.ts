import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsOptional()
  mobile?: string;
  @IsNotEmpty()
  name: string;
  @IsOptional()
  address?: string;
  @IsOptional()
  status?: string;
}
