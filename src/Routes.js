import { routers } from './config/routerConfig';

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UserManagermentPage from './pages/UserManagermentPage';

export default function Routes() {
    return (
        <Switch>
            <Route path="/users" exact component={UserManagermentPage} />
        </Switch>
    )
}
