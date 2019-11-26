import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import Main from '../pages/Main';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cursos from '../pages/Cursos';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/cadastro" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/cursos" exact component={Cursos} />
            <Route component={() => (<h1>Error 404</h1>)} />
        </Switch>
    );
}