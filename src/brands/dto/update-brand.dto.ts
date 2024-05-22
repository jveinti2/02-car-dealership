// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { IsString, MinLength } from 'class-validator';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
// Toma todos los las propiedades de createBrand y las hace opcionales

export class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  name: string;
}
