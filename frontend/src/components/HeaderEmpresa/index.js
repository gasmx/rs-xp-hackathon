import React from 'react';
import { Link } from 'react-router-dom'

import { Wrapper, Content, Logo, Config, Button } from './styles';

import logo from '../../assets/logo.svg'

export default function Header(props) {

    const urlCourse = props.urlCourse;

    return (
        <Wrapper>
            <Content>
                <Logo>
                    <img src={logo} width="200" height="100" />
                </Logo>
                <Config>
                    <Link to="/empresa/vagas-cadastro">
                        <span>Minhas Vagas</span>
                    </Link>
                    <Link to="/empresa/vagas-cadastro">
                        <span>Processos</span>
                    </Link>
                    <Button href="/login">
                        <Link to="/login">
                            <span>Logout</span>
                        </Link>
                    </Button>
                </Config>
            </Content>
        </Wrapper>
    );
}