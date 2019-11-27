import React from 'react';
import { Container, WrapperHeader, Header, Logotipo, Menu } from './styles';

import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <Container>
            <WrapperHeader>
                <Header>
                    <Logotipo>
                        <img src="https://placeholder.com/70" />
                    </Logotipo>
                    <Menu>
                        <nav>
                            <ul>
                                <li><Link to="/#oquesomos">O que somos</Link></li>
                                <li><Link to="/#nossofoco">Nosso Foco</Link></li>
                                <li><Link to="/#nossoscursos">Nossos cursos</Link></li>
                                <li><Link to="/#oquesomos">Idealizadores</Link></li>
                                <li id="login"><Link to="/#oquesomos">Login</Link></li>
                            </ul>
                        </nav>
                    </Menu>
                </Header>
            </WrapperHeader>
        </Container>
    );
};

export default Main;