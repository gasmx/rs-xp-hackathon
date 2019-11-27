import React from 'react';

import {
    Container,
    ContainerLogin,
    Formulario,
    Info,
    SubmitLogin,
    CriarConta,
} from './styles';

export default function Login({ history }) {

    const [select, setSelect] = React.useState('');

    function acessar(e) {
        const tipo = document.getElementById("tipo").value

        if (tipo == "estudante") {
            history.push("/cursos");
        } else {
            history.push("/empresa/vagas-cadastro");
        }
    }

    function irParaCriarConta() {
        history.push("/cadastro");
    }

    return (
        <Container>
            <ContainerLogin>
                <Formulario >
                    <h1>Login</h1>
                    <label>Acessar como</label>
                    <select id="tipo">
                        <option value="estudante">Estudante</option>
                        <option value="empresa">Empresa</option>
                    </select>
                    <Info>
                        <label>E-mail</label>
                        <input id="email" type="email" />
                    </Info>
                    <Info>
                        <label>Senha</label>
                        <input id="senha" type="password" />
                    </Info>
                    <SubmitLogin type="submit" onClick={acessar}>Acessar</SubmitLogin>
                </Formulario>
            </ContainerLogin>

            <CriarConta onClick={irParaCriarConta}>Cria nova conta</CriarConta>
        </Container>
    );
};