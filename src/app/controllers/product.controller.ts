import { Request, Response } from "express";
import ProductService from "../../core/products/product.service";

class ProductController {
    constructor(private productService: ProductService) {
    }

    async create(req: Request, res: Response) {
        try {
            const data: any = req.body;
            const product = await this.productService.create(data);
            res.status(201).json(product);
        } catch (error: unknown) {
            throw new Error(error as string);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const products = await this.productService.findAll();
            res.status(200).json(products);
        } catch (error: unknown) {
            throw new Error(error as string);
        }
    }
}

export default ProductController;