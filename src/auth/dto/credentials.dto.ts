import { IsNotEmpty, IsString, MaxLength, MinLength, isString } from "class-validator";

export class CredentialsDto {
    @IsString()
    @IsNotEmpty()
    username: string;
    
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    password: string;
}
