import React from "react";
import { Route, Switch } from "react-router-dom";
import ButtonScreen from "../screens/ButtonScreen";
import HomeScreen from "../screens/HomeScreen";
import LoaderScreen from "../screens/LoaderScreen";
import ModalScreen from "../screens/ModalScreen";
import NavbarScreen from "../screens/NavbarScreen";

const IndexRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/loader" component={LoaderScreen} />
            <Route exact path="/navbar" component={NavbarScreen} />
            <Route exact path="/modal" component={ModalScreen} />
            <Route exact path="/buttons" component={ButtonScreen} />
        </Switch>
    );
};

export default IndexRouter;
