import React from 'react';
import { Card, CardImage, CardInfo, CardButton, Button, Title, Description } from './styles';

const CardCurso = (props) => {

    const color = props.colorButton;

    return (
        <Card>
            <CardImage src={props.urlimg} />
            <CardInfo>
                <Title>{props.title}</Title>
                <Description>{props.desc}</Description>
            </CardInfo>
            <CardButton>
                <Button color={color} >{props.button}</Button>
            </CardButton>
        </Card>
    );
};

export default CardCurso;