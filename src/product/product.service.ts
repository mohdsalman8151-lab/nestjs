import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products: { id: number, name: string, price: number, isPublish: boolean }[] = [
        { id: 1, name: "mobile", price: 12000, isPublish: true },
        { id: 2, name: "laptop", price: 42000, isPublish: false },
        { id: 3, name: "tablet", price: 16000, isPublish: true }
    ];
    getAllProducts() {
        return this.products;
    }
    getProductById(id: number) {
        return this.products.find((p) => p.id == id);
    }
    createProduct(product: { id: number, name: string, price: number, isPublish: boolean }) {
        this.products.push(product);
        return product;
    }
    updateProduct() {

    }
}
