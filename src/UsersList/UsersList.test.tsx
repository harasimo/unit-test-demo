import { mount } from "enzyme";
import React from "react";
import { UsersList } from "./UsersList";
import { UsersService } from "../services/UsersService";
import { UserModel } from "../shared/models/UserModel";

describe("UsersList", () => {
    let usersService: UsersService = { getUsers: jest.fn(() => []) };

    afterEach(() => {
        usersService = { getUsers: jest.fn(() => []) };
    });

    test("should render component", () => {
        const component = mount(<UsersList usersService={{ getUsers: () => [] } as UsersService} />);

        expect(component.first()).toBeTruthy();
    });

    test("should render users list", () => {
        const service: UsersService = {
            getUsers: jest.fn(() => [
                { firstName: "Test", lastName: "Testowy" } as UserModel,
                { firstName: "Jan", lastName: "Kowalski" } as UserModel
            ])
        };

        const component = mount(<UsersList usersService={service} />);

        expect(component.find("li").children()).toHaveLength(2);
    });
});
