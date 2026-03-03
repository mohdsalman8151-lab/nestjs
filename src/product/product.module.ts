import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UserModule } from 'src/user/user.module';

@Module({
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService],
    imports: [UserModule]
})
export class ProductModule {

}
