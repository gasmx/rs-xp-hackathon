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
    ContentCursos
} from './styles';

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
                <CursosSection>
                    <Title>
                        Cursos
                    </Title>
                    <ContentCursos>
                        <CardCurso urlimg="https://via.placeholder.com/100"
                            title="Lógica de Programação"
                            desc="Um curso que aborda os principais conceitos de Lógica de Programação."
                            button="Finalizado"
                            colorButton="red"
                        />
                        <CardCurso urlimg="https://via.placeholder.com/100"
                            title="HTML 5"
                            desc="Você vai aprender como criar sites estáticos e personalizados."
                            button="Visualizar"
                            colorButton="black"
                        />
                        <CardCurso urlimg="https://via.placeholder.com/100"
                            title="CSS 3"
                            desc="Você vai aprender como criar sites estáticos e personalizados."
                            button="Visualizar"
                            colorButton="black"
                        />
                        <CardCurso urlimg="https://via.placeholder.com/100"
                            title="Javascript"
                            desc="Vai aprender manipular páginas Web."
                            button="Visualizar"
                            colorButton="black"
                        />
                    </ContentCursos>
                </CursosSection>
            </Container>
        </>
    );
};

export default Cursos;