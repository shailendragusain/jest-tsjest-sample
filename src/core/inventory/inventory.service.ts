import { InventoryRepository } from ".";
import { Product } from "./product.model";

export class InventoryService {
    constructor(private inventoryRepository: InventoryRepository) {
    }

    getAvailableProducts(): Product[] {
        const products = this.inventoryRepository.getProducts(false);
        return products;
    }

    getOutOfStockProducts(): Product[] {
        const products = this.inventoryRepository.getProducts(true);
        // Add condition to filter and get
        // only the products that are out of stock.
        return products;
    }
}