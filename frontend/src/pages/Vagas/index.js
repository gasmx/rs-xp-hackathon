import React from 'react';
import HeaderComponent from '../../components/Header';
import { Container, Succes, Image, Title, Description, Intro, Content } from './styles';

import CardVagas from '../../components/CardVagas';
import CardProccess from '../../components/CardProccess';

const Vagas = () => {
    return (
        <>
            <HeaderComponent />
            <Container>
                <Intro>
                    <Title>Suas Oportunidades</Title>
                    <Description>Vagas que se encaixam com seu perfil.</Description>
                </Intro>
                <Content>
                    <CardVagas
                        opacidade="1"
                        noButton={true}
                        urlimg="https://via.placeholder.com/100"
                        title="Web Designer"
                        desc="Criar páginas estáticas"
                        end="Rua Apolônio Pint0 164"
                        empresa="Empresa - Não leia os termos."
                        button="Participando"
                        colorButton="#999"
                    />
                    <CardVagas
                        opacidade="1"
                        noButton={true}
                        urlimg="https://via.placeholder.com/100"
                        title="Suporte"
                        desc="Suporte para usuários em plataforma web"
                        end="Rua Apolônio Pint0 164"
                        empresa="Empresa - Não leia os termos."
                        button="Participar"
                        colorButton="#14bf98"
                    />
                    <CardVagas
                        opacidade="1"
                        noButton={true}
                        urlimg="https://via.placeholder.com/100"
                        title="Protótipos"
                        desc="Desenvolver protótipos"
                        end="Rua Apolônio Pint0 164"
                        empresa="Empresa - Não leia os termos."
                        button="Participar"
                        colorButton="#14bf98"
                    />
                </Content>
                <Intro>
                    <Title>Oportunidades bloqueadas</Title>
                    <Description>Corre! Faça outros cursos e desbloqueie estas vagas.</Description>
                </Intro>
                <Content>
                    <CardVagas
                        opacidade="0.4"
                        noButton={false}
                        urlimg="https://via.placeholder.com/100"
                        title="PHP"
                        desc="Desenvolver aplicações escaláveis."
                        end="Rua Apolônio Pint0 164"
                        empresa="Não leia os termos."
                        button="Quero essa vaga"
                        colorButton="#14bf98"
                    />
                    <CardVagas
                        opacidade="0.4"
                        noButton={false}
                        urlimg="https://via.placeholder.com/100"
                        title="JavaScript"
                        desc="Desenvolver aplicações com javascript."
                        end="Rua Apolônio Pint0 164"
                        empresa="Não leia os termos."
                        button="Quero essa vaga"
                        colorButton="#14bf98"
                    />
                    <CardVagas
                        opacidade="0.4"
                        noButton={false}
                        urlimg="https://via.placeholder.com/100"
                        title="React"
                        desc="Desenvolver aplicações com react."
                        end="Rua Apolônio Pint0 164"
                        empresa="Não leia os termos."
                        button="Quero essa vaga"
                        colorButton="#14bf98"
                    />
                </Content>
                <Intro>
                    <Title>Processos seletivos</Title>
                    <Description>Vagas que você está participando do processo seletivo.</Description>
                </Intro>
                <Content>
                    <CardProccess
                        opacidade="1"
                        noButton={true}
                        urlimg="https://via.placeholder.com/100"
                        title="Web Designer"
                        desc="Suporte para usuários em plataforma web"
                        end="Rua Apolônio Pint0 164"
                        empresa="Empresa - Não leia os termos."
                        button="Participar"
                        colorButton="gray"
                        percentageBackground="#14bf98"
                        percentageNumber="20%"
                    />
                </Content>
            </Container>
        </>
    );
};

export default Vagas;