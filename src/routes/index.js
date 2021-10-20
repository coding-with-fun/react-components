import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoaderScreen from "../screens/LoaderScreen";
import NavbarScreen from "../screens/NavbarScreen";

const IndexRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/loader" component={LoaderScreen} />
            <Route exact path="/navbar" component={NavbarScreen} />
        </Switch>
    );
};

export default IndexRouter;
