import { IsBoolean, IsOptional } from "class-validator";
import { Type } from "class-transformer";
export class CreateProductParamDto {
    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    ispublish: Boolean;

}