import React from 'react';
import {Route, Switch} from 'react-router-dom';
import UserIndex from "./components/pages/users/UserIndex";
import UserEdit from "./components/pages/users/UserEdit";
import UserNew from "./components/pages/users/UserNew";

const Routing = () => (
    <Switch>
        <Route path='/admin' exact component={UserIndex}/>
        <Route path='/admin/users' exact component={UserIndex}/>
        <Route path='/admin/users/new' exact component={UserNew}/>
        <Route path={`/admin/users/:id(\\d+)`} exact component={UserEdit}/>
    </Switch>
);

export default Routing;
