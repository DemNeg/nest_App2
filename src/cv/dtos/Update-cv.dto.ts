/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UpdateCvDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  firstname: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(15)
  @Max(65)
  age: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  cin: number;

  @IsOptional()
  @IsString()
  job: string;

  @IsOptional()
  @IsString()
  path: string;
}
