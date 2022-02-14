import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/Home';
import NotFound from './views/NotFound';

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
    )
}

export default injectContext(App);