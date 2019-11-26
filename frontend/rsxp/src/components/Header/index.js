import React from 'react';
import { Link } from 'react-router-dom'

import { Wrapper, Content, Logo, Config, Button } from './styles';

export default function Header(props) {
    return (
        <Wrapper>
            <Content>
                <Logo>
                    <Link to="/">
                        Devbaby
                    </Link>
                </Logo>
                <Config>
                    <Link to="/#cursos">
                        <span>Cursos</span>
                    </Link>
                    <Link to="/vagas">
                        <span>Vagas</span>
                    </Link>
                    <Button>
                        <Link to="/logout">
                            <span>Logout</span>
                        </Link>
                    </Button>
                </Config>
            </Content>
        </Wrapper>
    );
}