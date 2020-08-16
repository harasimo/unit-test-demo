import React, { FC } from "react";
import styles from "./heading.module.scss";

export const Heading: FC = (props) => {
    return <h1 className={styles.dummy}>{props.children}</h1>;
};
