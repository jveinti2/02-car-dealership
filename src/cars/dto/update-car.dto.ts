import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  id: number;

  @IsString()
  @IsOptional()
  readonly make?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  readonly year?: number;
}

//Readonkly es importante para no permitir modificar la data que viaja por la petici[on tipado con el dto
