import { IsInt, IsNotEmpty, MinLength } from 'class-validator';

export class CreateChoiceDto {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @MinLength(2)
  search: string;
}
