import React from "react";
import { shallow } from "enzyme";
import Notification, { NotificationType } from "./Notification";
import styles from "./notification.module.scss";

interface NotificationTestData {
    type: NotificationType;
    className: string;
}

describe("Notification", () => {
    it("should render notification", () => {
        const component = shallow(<Notification type="error" children="test" />);

        expect(component).toBeTruthy();
    });

    test.each([
        { type: "info", className: styles.info } as NotificationTestData,
        { type: "warning", className: styles.warning } as NotificationTestData,
        { type: "success", className: styles.success } as NotificationTestData,
        { type: "error", className: styles.error } as NotificationTestData
    ])("should render notification with proper type", (param) => {
        const component = shallow(<Notification type={param.type} children={"test"} />);

        expect(component.find(`.${param.className}`).length).toBe(1);
    });
});
