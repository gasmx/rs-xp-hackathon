import React from 'react';



import {
    Container,
    ContainerLogin,
    Formulario,
    Info,
    SubmitLogin,
} from './styles';

export default function Login({ history }) {
    async function submit(e) {
        history.push("/cursos");
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
                    <SubmitLogin type="submit" onClick={submit}>Acessar</SubmitLogin>
                </Formulario>
            </ContainerLogin>
        </Container>
    );
};