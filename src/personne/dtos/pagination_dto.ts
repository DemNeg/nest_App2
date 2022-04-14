import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

/* eslint-disable prettier/prettier */
export class PaginationDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  size: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page: number;
}
