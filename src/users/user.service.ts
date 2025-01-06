import { User } from "./user.model";
import { UserRepository } from "./user.repository";

export class UserService {
    constructor(private userRepository: UserRepository) { }

    getUserById(id: string): User | null {
        return this.userRepository.getUserById(id);
    }

    getUsers(includeInactive: boolean = false): User[] {
        return this.userRepository.getUsers(includeInactive);
    }
}