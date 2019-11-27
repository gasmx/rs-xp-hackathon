import React from 'react';
import { Link } from 'react-router-dom'

import { Wrapper, Content, Logo, Config, Button } from './styles';

export default function Header({ urlCourse }) {
    return (
        <Wrapper>
            <Content>
                <Logo>
                    <Link to={urlCourse}>
                        Plataforma
                    </Link>
                </Logo>
                <Config>
                    <Link to="/empresa/vagas-cadastro">
                        <span>Minhas Vagas</span>
                    </Link>
                    <Link to="/empresa/vagas-cadastro">
                        <span>Processos</span>
                    </Link>
                    <Button>
                        <Link to="/login">
                            <span>Logout</span>
                        </Link>
                    </Button>
                </Config>
            </Content>
        </Wrapper>
    );
}