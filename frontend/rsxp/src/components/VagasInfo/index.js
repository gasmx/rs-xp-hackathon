import React from 'react';
import { Container } from './styles';
import { useParams } from 'react-router-dom';

const VagasInfo = (props) => {

    const { id } = useParams();

    return (
        <Container>
            <h1>Vagas Infomações - ID: {id}</h1>
        </Container>
    );
};

export default VagasInfo;