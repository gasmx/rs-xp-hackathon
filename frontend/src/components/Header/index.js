import React from 'react';
import { Link } from 'react-router-dom'

import { Wrapper, Content, Logo, Config, Button } from './styles';

import logo from '../../assets/logo.svg'

export default function Header({ urlCourse }) {
    return (
        <Wrapper>
            <Content>
                <Logo>
                    <img src={logo} width="200" height="100"/>
                    {/* <Link to={urlCourse}>
                        Plataforma
                    </Link> */}
                </Logo>
                <Config>
                    <Link to="/cursos">
                        <span>Cursos</span>
                    </Link>
                    <Link to="/vagas">
                        <span>Vagas</span>
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