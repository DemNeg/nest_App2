/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

/* eslint-disable prettier/prettier */
export class PersonneAddDto {
  @IsNotEmpty()
  @MinLength(5, { message: 'Au minimum 5 caractères requis' })
  @MaxLength(25, { message: 'Au maximum 25 caractères requis' })
  nom: string;

  @IsNotEmpty()
  @MinLength(5, { message: 'Au minimum 5 caractères requis' })
  @MaxLength(25, { message: 'Au maximum 25 caractères requis' })
  prenom: string;

  @IsInt({ message: 'Le age doit etre un entier' })
  age: number;

  @IsNotEmpty()
  @MaxLength(50, { message: 'Au maximum 50 caractères requis' })
  @MinLength(10, { message: 'Au minimum 10 caractères requis' })
  adresse: string;

  @IsEmail({ message: 'Ce doit un etre un email' })
  email: string;
}
