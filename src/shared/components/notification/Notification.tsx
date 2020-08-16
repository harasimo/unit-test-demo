import classNames from "classnames";
import React, { Component } from "react";
import styles from "./notification.module.scss";

export type NotificationType = "success" | "info" | "warning" | "error";

interface NotificationProps {
    type: NotificationType;
    additionalClassname?: string;
}

export class Notification extends Component<NotificationProps, {}> {
    public render() {
        const className = classNames(styles.notification, this.props.additionalClassname, styles[this.props.type]);

        return (
            <div className={className}>
                <div className={styles.content}>{this.props.children}</div>
            </div>
        );
    }
}

export default Notification;
