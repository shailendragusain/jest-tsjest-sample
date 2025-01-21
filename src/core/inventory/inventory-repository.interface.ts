import { Product } from "./product.model";

export interface InventoryRepository {
    getProducts(includeOutOfStocks: boolean): Product[];
}