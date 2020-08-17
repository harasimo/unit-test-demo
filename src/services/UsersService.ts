import { UserModel } from "../shared/models/UserModel";

export interface UsersService {
    getUsers(): UserModel[];
}

export class DefaultUsersService implements UsersService {
    getUsers(): UserModel[] {
        return [
            { firstName: "Karol", lastName: "Kowalski", birthDate: new Date(1986, 6, 21) },
            { firstName: "Michalina", lastName: "Nowak", birthDate: new Date(1938, 12, 24) },
            { firstName: "Ted", lastName: "Żyzny", birthDate: new Date(2001, 8, 12) }
        ];
    }
}

export default new DefaultUsersService();
