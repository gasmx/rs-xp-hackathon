import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import Main from '../pages/Main';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cursos from '../pages/Cursos';
import Vagas from '../pages/Vagas';
import Error from '../pages/Error';

import VagasInfo from '../components/VagasInfo';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/cursos" component={Cursos} />
            <Route path="/vagas" exact component={Vagas} />
            <Route path="/vagas/:id" component={VagasInfo} />
            <Route component={Error} />
        </Switch>
    );
}