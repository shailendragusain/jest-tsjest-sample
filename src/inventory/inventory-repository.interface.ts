export interface InventoryRepository {
    getProducts(includeOutOfStocks: boolean);
}