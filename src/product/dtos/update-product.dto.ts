import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dtos";

export class UpdateProductDto extends PartialType(CreateProductDto) {

}