import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../user.entity';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  first: string;

  @IsNotEmpty()
  @IsString()
  last: string;

  @IsEnum(UserRole)
  role: UserRole;
}
