import { User } from "./user.model";

export class UserRepository {
    getUserById(id: string): User | null {
        let user: User = {
            id: id,
            name: 'John Doe',
            dateOfBirth: "20-06-1947"
        };

        return user;
    }

    getUsers(includeInactive: boolean): User[] {
        return [];
    }
}