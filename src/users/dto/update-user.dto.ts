import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { UserRole } from '../users.entity';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  first_name?: string;

  @IsOptional()
  @IsString()
  last_name?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
