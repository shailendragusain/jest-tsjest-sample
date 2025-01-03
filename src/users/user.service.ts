import { User } from "./user.model";

export class UserService {
    getUserById(id: string): User {
        const user: User = {
            id: '12345',
            name: 'John Doe'
        };
        return user;
    }
}