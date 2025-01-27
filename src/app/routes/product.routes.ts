import { Router } from "express";
import ProductController from "../controllers/product.controller";
import ProductService from "../../core/products/product.service";

class ProductRoute {
    public readonly router: Router;

    constructor(private readonly productController: ProductController) {
        this.router = Router();
        this.configureRoutes();
    }

    private configureRoutes(): void {
        this.router.post("/", this.productController.create.bind(this.productController));
        this.router.get("/", this.productController.findAll.bind(this.productController));
        this.router.get("/:id", this.productController.findOne.bind(this.productController));
    }
}

const productController = new ProductController(new ProductService());
export default new ProductRoute(productController).router;

