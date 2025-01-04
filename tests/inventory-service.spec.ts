import { InventoryRepository, InventoryService, Product } from "../src/inventory";

jest.mock('../src/inventory/inventory-repository.interface.ts'); // Mock InventoryRepository

describe('Inventory Tests', () => {
    let inventoryRepositoryMock: jest.Mocked<InventoryRepository>;
    let inventoryService: InventoryService;
    const mockProducts: Product[] = [
        { id: 1, name: 'Test Product', mrp: 200, isOutOfStock: false },
        { id: 2, name: 'Test Product 2', mrp: 300, isOutOfStock: true }
    ];

    beforeEach(() => {
        // Create a mock for InventoryRepository
        inventoryRepositoryMock = {
            getProducts: jest.fn(),
        };

        // Initialize the InventoryService with the mocked TestInventoryRepository
        inventoryService = new InventoryService(inventoryRepositoryMock);
    });

    it('should return all the available products', () => {
        // Arrange
        inventoryRepositoryMock.getProducts.mockReturnValue(mockProducts.filter(x => x.isOutOfStock == false));

        // Act
        const result = inventoryService.getAvailableProducts();

        // Assert
        expect(result.length).toEqual(1);
        expect(result).toContain(mockProducts.filter(x => x.id == 1)[0]);
        expect(inventoryRepositoryMock.getProducts).toHaveBeenCalledTimes(1);
    });
});