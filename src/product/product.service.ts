import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProductService {
    constructor(private readonly userServices: UserService) { }
    private products: { id: number, name: string, price: number, isPublish: boolean, userId: number }[] = [
        { id: 1, name: "mobile", price: 12000, isPublish: true, userId: 1 },
        { id: 2, name: "laptop", price: 42000, isPublish: false, userId: 2 },
        { id: 3, name: "tablet", price: 16000, isPublish: true, userId: 3 }
    ];
    getAllProducts() {
        return this.products;
    }
    getProductById(id: number) {
        return this.products.find((p) => p.id == id);
    }
    createProduct(product: { id: number, name: string, price: number, isPublish: boolean, userId: number }) {
        const user = this.userServices.getUserById(product.userId);
        if (!user) {
            return "User not found";
        }
        this.products.push(product);
        return product;
    }
    updateProduct() {

    }
}
