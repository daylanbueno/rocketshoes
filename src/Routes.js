import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Card from './pages/Card';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/card" component={Card} />
        </Switch>
    );
}
