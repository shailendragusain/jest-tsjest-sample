/***
 * NOTE: test and it are exactly the same thing. The keyword 'it' 
 * is used to add readability to the tests.
 * */
import { User, UserRepository, UserService } from '../src/users';

jest.mock('../src/users/user.repository.ts'); // Mock UserRepository

describe('User Tests', () => {
    let userRepositoryMock: jest.Mocked<UserRepository>;
    let userService: UserService;

    beforeEach(() => {
        // Create a Mock instance of UserRepository
        userRepositoryMock = new UserRepository() as jest.Mocked<UserRepository>;

        // Initialize the UserService with the mocked UserRepository
        userService = new UserService(userRepositoryMock);
    });

    it('should return user details when getUserById is called with a valid ID', () => {
        const userId = "12345";
        const mockUser: User = { id: userId, name: 'John Doe', dateOfBirth: '20-06-1947' };

        // Mock the getUserById method to return the mock user
        userRepositoryMock.getUserById.mockReturnValue(mockUser);

        // Act
        const result = userService.getUserById(userId);

        // Assert
        expect(result).toEqual(mockUser);
        expect(userRepositoryMock.getUserById).toHaveBeenCalledTimes(1);
        expect(userRepositoryMock.getUserById).toHaveBeenCalledWith(userId);
    });

    it('should return null when getUserById is called with an invalid ID', () => {
        // Arrange
        const userId = "Invalid-Id";

        // Mock the getUserById method to return null
        userRepositoryMock.getUserById.mockReturnValue(null);

        // Act
        const result = userService.getUserById(userId);

        // Assert
        expect(result).toBeNull();
        expect(userRepositoryMock.getUserById).toHaveBeenCalledTimes(1);
        expect(userRepositoryMock.getUserById).toHaveBeenCalledWith(userId);
    });
});
