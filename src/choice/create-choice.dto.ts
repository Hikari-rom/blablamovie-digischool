import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateChoiceDto {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  imdbId: string;
}
