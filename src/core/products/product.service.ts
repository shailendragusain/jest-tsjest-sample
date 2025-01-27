import { Product } from "./product.model";

class ProductService {
    products: Product[] = [
        {
            id: 1,
            name: "Test Product 1",
            description: "Test Product 1 Description"
        },
        {
            id: 2,
            name: "Test Product 2",
            description: "Test Product 2 Description"
        },
        {
            id: 3,
            name: "Test Product 3",
            description: "Test Product 3 Description"
        },
        {
            id: 4,
            name: "Test Product 4",
            description: "Test Product 4 Description"
        }
    ];

    constructor() { }

    async create(product: Product): Promise<Product> {
        return product;
    }

    async findAll(): Promise<Product[]> {
        return this.products;
    }

    async getById(id: number): Promise<Product | undefined> {
        return this.products.find(x => x.id == id);
    }
}

export default ProductService;