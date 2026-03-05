import { IsNotEmpty, IsString, IsEmail, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  nombre: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefono?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  direccion?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  ciudad?: string;
}
