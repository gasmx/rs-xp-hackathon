import React from 'react';
import HeaderComponent from '../../components/Header';
import { Container, Title } from './styles';

const Vagas = () => {
    const vagas = [
        {
            title: 'Web Designer',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            company: 'Rocket',
            time: '8:00 as 13:00',
            valor: 'R$: 600'

        },
        {
            title: 'Web Designer',
            desc: 'hfsdgfdhfgshdfgkjsgfhksfjhgds teste',
            company: 'Rocket',
            time: '8:00 as 13:00',
            valor: 'R$: 600'

        }
    ]
    return (
        <>
            <HeaderComponent />
            <Container>
                <Title>Vagas Page</Title>
            </Container>
        </>
    );
};

export default Vagas;