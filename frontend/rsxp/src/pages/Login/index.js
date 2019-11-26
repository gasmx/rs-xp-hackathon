import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { signInRequest } from '../../store/modules/auth/actions';
import api from '../../services/api';

import {
    Container,
    ContainerLogin,
    Formulario,
    Info,
    SubmitLogin,
} from './styles';

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [tipoLogin, setTipoLogin] = useState('estudante');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            dispatch(signInRequest(email, senha, tipoLogin));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <ContainerLogin>
                <Formulario >
                    <h1>Login</h1>
                    <label>Acessar como</label>
                    <select id="tipo" onChange={tipo => setTipoLogin(tipo.target.value)} value={tipoLogin}>
                        <option value="estudante">Estudante</option>
                        <option value="empresa">Empresa</option>
                    </select>
                    <Info>
                        <label>E-mail</label>
                        <input id="email" type="email" onChange={email => setEmail(email.target.value)} value={email} />
                    </Info>
                    <Info>
                        <label>Senha</label>
                        <input id="senha" type="password" onChange={senha => setSenha(senha.target.value)} value={senha} />
                    </Info>
                    <SubmitLogin type="submit" onClick={submit}>Acessar</SubmitLogin>
                </Formulario>
            </ContainerLogin>
        </Container>
    );
};