import React, { Component } from "react";
import { Heading } from "../shared/components/heading/Heading";
import { Notification } from "../shared/components/notification/Notification";
import { UsersList } from "../UsersList/UsersList";
import defaultUsersService from "../services/UsersService";

export class Home extends Component {
    render() {
        return (
            <>
                <Heading>I'm such an empty thing...</Heading>
                <Notification type="info" additionalClassname="">
                    To jest jakieś powiadomienie, prawdopodobnie coś się udało, lub nie.
                </Notification>
                <UsersList usersService={defaultUsersService} />
            </>
        );
    }
}
