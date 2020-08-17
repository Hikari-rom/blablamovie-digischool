import { IsInt, IsNotEmpty, MinLength } from 'class-validator';

export class CreateChoiceDto {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  imdbId: string;
}
