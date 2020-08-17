import React, { Component } from "react";
import { UserModel } from "../shared/models/UserModel";
import { UsersService } from "../services/UsersService";
import { formatDate } from "../shared/utils/dateFormat";

interface UsersListProps {
    usersService: UsersService;
}

interface UsersListState {
    users: UserModel[];
}

export class UsersList extends Component<UsersListProps, UsersListState> {
    public state = {
        users: []
    };

    public componentDidMount() {
        const usrs = this.props.usersService.getUsers();

        this.setState({ users: usrs });
    }

    public render() {
        return (
            <ol>
                {this.state.users.map((x: UserModel, i: number) => (
                    <li key={`${x.firstName}${i}${x.lastName}`}>{`${x.firstName} ${x.lastName} ${formatDate(
                        x.birthDate
                    )}`}</li>
                ))}
            </ol>
        );
    }
}
