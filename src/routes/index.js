import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoaderScreen from "../screens/LoaderScreen";

const IndexRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/loader" component={LoaderScreen} />
        </Switch>
    );
};

export default IndexRouter;
