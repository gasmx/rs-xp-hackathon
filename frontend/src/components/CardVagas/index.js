import React from 'react';

import {
    Card,
    CardImage,
    CardInfo,
    CardButton,
    Button,
    Title,
    Description,
} from './styles';

const CardVagas = (props) => {

    const color = props.colorButton;

    return (
        <Card
            opacidade={props.opacidade}
        >
            <CardImage src={props.urlimg} />
            <CardInfo>
                <Title>{props.title}</Title>
                <Description>{props.desc}</Description>
                <Description>{props.empresa}</Description>
                <Description>{props.end}</Description>
                <Description>{props.valor}</Description>
            </CardInfo>
            {props.noButton && (
                <CardButton onClick={props.participarAt}>
                    <Button color={color} >{props.button}</Button>
                </CardButton>
            )}
        </Card>
    );
}

export default CardVagas;