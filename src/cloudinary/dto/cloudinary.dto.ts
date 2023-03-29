import { IsNotEmpty, IsString } from 'class-validator';

export class CloudinaryDto {
  @IsNotEmpty()
  @IsString()
  file: string;

  @IsNotEmpty()
  @IsString()
  folder: string;

  /* @IsNotEmpty()
  @IsString()
  name: string; */
}
