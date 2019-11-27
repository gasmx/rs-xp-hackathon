import React from 'react';
import { Link } from 'react-router-dom'

import { Wrapper, Content, Logo, Config, Button } from './styles';

export default function Header({ urlCourse }) {
    return (
        <Wrapper>
            <Content>
                <Logo>
                    <Link to="/">
                        Plataforma
                    </Link>
                </Logo>
                <Config>
                    <Link to="/cursos">
                        <span>Cursos</span>
                    </Link>
                    <Link to="/vagas">
                        <span>Vagas</span>
                    </Link>
                    <Link to="/vagas-cadastro">
                        <span>Cadastro de vagas</span>
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