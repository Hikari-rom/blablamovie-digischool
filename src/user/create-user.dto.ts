import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  pseudo: string;

  @IsDate()
  birthDate: Date;
}
