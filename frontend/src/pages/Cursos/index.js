import React from 'react';
import HeaderComponent from '../../components/Header';
import CardCurso from '../../components/CardCurso';
import {
    Container,
    Introducao,
    Title,
    TitleCurso,
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

export default function Cursos({ history }) {
    const cursos = [
        {
            id: 1,
            urlimg: logica,
            title: "Lógica de Programação",
            desc: "Um curso que aborda os principais conceitos de Lógica de Programação.",
            button: "Finalizado",
            colorButton: "#32CD32",
            percentageBackground: "#DA70D6",
            percentageNumber: "100%",
        },
        {
            id: 2,
            urlimg: html5,
            title: "HTML 5",
            desc: "Aprenda a fazer sites para internet.",
            button: "Em andamento",
            colorButton: "#FFD700",
            percentageBackground: "#ff6800",
            percentageNumber: "70%",
        },
        {
            id: 3,
            urlimg: css,
            title: "CSS 3",
            desc: "CSS é uma forma de personalizar seu site de forma fácil e ilimitada.",
            button: "Em andamento",
            colorButton: "#FFD700",
            percentageBackground: "#1E90FF",
            percentageNumber: "30%",
        },
        {
            id: 4,
            urlimg: css,
            title: "JavaScript",
            desc: "CSS é uma forma de personalizar seu site de forma fácil e ilimitada.",
            button: "Iniciar",
            colorButton: "#4682B4",
            percentageBackground: "#FFD700",
            percentageNumber: "0%",
        }
    ];

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
                    <TitleCurso>
                        Cursos
                    </TitleCurso>
                    <ContentCursos>
                        {cursos.map(cr => (
                            <CardCurso
                                key={cr.id}
                                urlimg={cr.urlimg}
                                title={cr.title}
                                desc={cr.desc}
                                button={cr.button}
                                colorButton={cr.colorButton}
                                percentageBackground={cr.percentageBackground}
                                percentageNumber={cr.percentageNumber}
                                history={history}
                            />
                        ))}
                    </ContentCursos>
                </CursosSection>
            </Container>
        </>
    );
};
