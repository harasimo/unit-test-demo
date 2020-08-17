import { UserModel } from "../shared/models/UserModel";

export interface UsersService {
    getUsers(): UserModel[];
}

export class DefaultUsersService implements UsersService {
    getUsers(): UserModel[] {
        return [
            { firstName: "Karol", lastName: "Kowalski" },
            { firstName: "Michalina", lastName: "Nowak" },
            { firstName: "Ted", lastName: "Żyzny" }
        ];
    }
}

export default new DefaultUsersService();
