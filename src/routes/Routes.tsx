import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home } from "../Home/Home";
import { paths } from "./paths";

export const Routes: FC = () => {
    return (
        <Switch>
            <Route path={paths.home} component={Home} />
            <Redirect to={paths.home} />
        </Switch>
    );
};

export default Routes;
