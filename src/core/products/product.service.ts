import { Product } from "./product.model";

class ProductService {
    constructor() { }

    create(product: Product): Product {
        return product;
    }

    findAll(): Product[] {
        return [];
    }
}

export default ProductService;