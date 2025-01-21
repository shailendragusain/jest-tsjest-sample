/***
 * NOTE: test and it are exactly the same thing. The keyword 'it' 
 * is used to add readability to the tests.
 * */
import { User, UserRepository, UserService } from '../src/core/users';

jest.mock('../src/core/users/user.repository.ts'); // Mock UserRepository

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
        const userId = '1';
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

    it('should return list of all active users when getUsers is called with no parameter', () => {
        // Arrange
        const mockUsers: User[] = [
            { id: '1', name: 'Test User 1' },
            { id: '2', name: 'Test User 2' }
        ];

        // Mock the getUsers method to return list
        userRepositoryMock.getUsers.mockReturnValue(mockUsers);

        // Act
        const result = userService.getUsers();

        expect(result.length).toBeGreaterThanOrEqual(2);
    });

    it('should return list of all active users when getUsers is called with includeInactive parameter', () => {
        // Arrange
        const mockUsers: User[] = [
            { id: '1', name: 'Test User 1', active: true },
            { id: '2', name: 'Test User 2', active: true },
            { id: '3', name: 'Test User 3', active: false }
        ];

        // Mock the getUsers method to return list
        userRepositoryMock.getUsers.mockReturnValue(mockUsers.filter(x => x.active));

        // Act
        const result = userService.getUsers(true);

        // Act
        expect(result.length).toBeGreaterThanOrEqual(2);
        expect(result[0]).toEqual(mockUsers[0]);
        expect(result[1]).toEqual(mockUsers[1]);
    });
});
