import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly make: string;

  @IsString()
  readonly model: string;

  @IsNumber()
  @Type(() => Number)
  readonly year: number;
}

//Readonkly es importante para no permitir modificar la data que viaja por la petici[on tipado con el dto
