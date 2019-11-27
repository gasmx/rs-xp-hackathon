import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import Main from '../pages/Main';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cursos from '../pages/Cursos';
import CursoDetalhe from '../pages/Cursos/CursoDetalhe';
import Vagas from '../pages/Vagas';
import VagasCadastro from '../pages/VagasCadastro';
import Error from '../pages/Error';

import VagasInfo from '../components/VagasInfo';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/cursos" component={Cursos} />
            <Route path="/curso/:nome" component={CursoDetalhe} />
            <Route path="/vagas" exact component={Vagas} />
            <Route path="/vagas/:id" component={VagasInfo} />
            <Route path="/vagas-cadastro" component={VagasCadastro} />
            <Route component={Error} />
        </Switch>
    );
}