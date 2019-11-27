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
    function acessar() {
        history.push("/cursos");
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
                    <select>
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