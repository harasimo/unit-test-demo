import { UserModel } from "../shared/models/UserModel";

export interface UsersService {
    fetchUsers(): UserModel[];
}

export class DefaultUsersService implements UsersService {
    fetchUsers(): UserModel[] {
        return [
            { firstName: "Karol", lastName: "Kowalski" },
            { firstName: "Michalina", lastName: "Nowak" },
            { firstName: "Ted", lastName: "Żyzny" }
        ];
    }
}

export default new DefaultUsersService();
