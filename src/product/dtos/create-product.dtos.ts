import { IsNotEmpty, IsNumber, IsString, MinLength, MaxLength, Min, Max, IsOptional, IsBoolean } from "class-validator";
import { Type } from "class-transformer";

export class CreateProductDto {
    @IsNumber()
    @IsNotEmpty({ message: "id is required" })
    id: number;
    @IsString({ message: "name must be a string" })
    @IsNotEmpty({ message: "name is required" })
    @MinLength(3, { message: "name must be at least 3 characters long" })
    @MaxLength(10, { message: "name must be at most 10 characters long" })
    name: string;
    @IsNumber()
    @IsNotEmpty({ message: "price is required" })
    @Min(1)
    @Max(100000)
    price: number;
    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    isPublish: boolean;
    @IsNumber()
    @IsNotEmpty({ message: "userId is required" })
    userId: number;
}