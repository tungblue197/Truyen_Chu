import { routes } from './config/routerConfig';

import React from 'react';
import {Switch, Route} from 'react-router-dom';

export default function Routes() {
    return (
        <Switch>
            {
                routes.map(item => <Route path={item.path} component={item.component}/>)
            }
        </Switch>
    )
}
