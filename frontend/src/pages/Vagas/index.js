import React from 'react';
import HeaderComponent from '../../components/Header';
import {
    Container, Succes, Image, Title, Description, Intro, Content,
    Close,
    ContainerModal,
    TitleModal,
    DescriptionModal,
    ButtonModal
} from './styles';

import CardVagas from '../../components/CardVagas';
import CardProccess from '../../components/CardProccess';

import Modal from 'react-modal';

const Vagas = () => {

    const [modalIsOpen, setIsOpen] = React.useState(true);

    const modalStyles = {
        content: {
            width: '70%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <>
            <HeaderComponent />
            <Container>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={() => null}
                    onRequestClose={closeModal}
                    style={modalStyles}
                    contentLabel="Vaga"
                >
                    <Close onClick={closeModal}>
                        X
                    </Close>
                    <ContainerModal>
                        <TitleModal>
                            Otíma notícia!!
                        </TitleModal>
                        <DescriptionModal>
                            A empresa Novatic gostou do seu perfil e quer te conhecer melhor! Estamos te encaminhando um email com todas as informações e instruções.
                        </DescriptionModal>
                        <ButtonModal onClick={closeModal}>
                            OK! Entendi
                        </ButtonModal>
                    </ContainerModal>
                </Modal>

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
                        empresa="Empresa - Novatic."
                        button="Participar"
                        colorButton="gray"
                        percentageBackground="#14bf98"
                        percentageNumber="5%"
                    />
                </Content>
            </Container>
        </>
    );
};

export default Vagas;