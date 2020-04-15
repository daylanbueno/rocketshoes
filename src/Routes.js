import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Card from './pages/Card';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/card" component={Card} />
        </Switch>
    );
}
