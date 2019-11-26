import React from 'react';
import HeaderComponent from '../../components/Header';
import CardCurso from '../../components/CardCurso';
import {
    Container,
    Introducao,
    Title,
    ContentIntroducao,
    ContentInfo,
    TextInfo,
    ImageInfo,
    CursosSection,
    ContentCursos,
    Modal,
    ModalContent
} from './styles';

import logica from '../../assets/logica.png';
import html5 from '../../assets/html.png';
import css from '../../assets/css.png';

const Cursos = (props) => {

    return (
        <>
            <HeaderComponent />
            <Container>
                <Introducao>
                    <Title>
                        Introdução
                    </Title>
                    <ContentIntroducao>
                        <ContentInfo>
                            <TextInfo>
                                Anim sint laboris eu elit dolore do pariatur excepteur enim dolore ullamco do pariatur. Minim occaecat quis elit veniam deserunt laboris nostrud sunt veniam aliqua voluptate occaecat irure. Consectetur non deserunt deserunt Lorem officia officia culpa.
                                Anim sint laboris eu elit dolore do pariatur excepteur enim dolore ullamco do pariatur. Minim occaecat quis elit veniam deserunt laboris nostrud sunt veniam aliqua voluptate occaecat irure. Consectetur non deserunt deserunt Lorem officia officia culpa.
                                Anim sint laboris eu elit dolore do pariatur excepteur enim dolore ullamco do pariatur. Minim occaecat quis elit veniam deserunt laboris nostrud sunt veniam aliqua voluptate occaecat irure. Consectetur non deserunt deserunt Lorem officia officia culpa.
                        </TextInfo>
                        </ContentInfo>
                    </ContentIntroducao>
                </Introducao>
                <CursosSection id="cursos">
                    <Title>
                        Cursos
                    </Title>
                    <ContentCursos>
                        <CardCurso urlimg={logica}
                            title="Lógica de Programação"
                            desc="Um curso que aborda os principais conceitos de Lógica de Programação."
                            button="Finalizado"
                            colorButton="#34556"
                        />
                        <CardCurso urlimg={html5}
                            title="HTML 5"
                            desc="Você vai aprender como criar sites estáticos e personalizados."
                            button="Visualizar"
                            colorButton="#ff6800"
                        />
                        <CardCurso urlimg={css}
                            title="CSS 3"
                            desc="Você vai aprender como criar sites estáticos e personalizados."
                            button="Visualizar"
                            colorButton="#ff6800"
                        />
                    </ContentCursos>
                </CursosSection>
            </Container>
        </>
    );
};

export default Cursos;