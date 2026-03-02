import { Body, Render, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dtos';
import { UpdateProductDto } from './dtos/update-product.dto';


@Controller('product')
export class ProductController {
     constructor(private readonly productService: ProductService) { }
     @Get()
     // @Render('index')
     // root() {
     //      return { name: 'Salman' };
     // }
     // @Get('getProducts')
     getProducts(
          @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
          @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
     ) {
          return this.productService.getAllProducts();
     }
     @Get(':id')
     getProduct(@Param('id', ParseIntPipe) id: number) {
          return this.productService.getProductById(id);
     }
     @Post()
     createProduct(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) product: CreateProductDto) {

          return this.productService.createProduct(product);
     }
     @Patch()
     updateProduct(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) updateProduct: UpdateProductDto) {
          console.log(updateProduct);
          return updateProduct;
     }

}
