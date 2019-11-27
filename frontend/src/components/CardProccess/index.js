import React from 'react';
import {
    Card,
    CardImage,
    CardInfo,
    Title,
    Description,
    Percentage,
    PercentageNumber,
} from './styles';

const CardCurso = (props) => {

    const color = props.colorButton;

    return (
        <Card>
            <CardImage src={props.urlimg} />
            <CardInfo>
                <Title>{props.title}</Title>
                <Description>{props.desc}</Description>
                <Description>{props.end}</Description>
                <Description>{props.empresa}</Description>
                <PercentageNumber>Seu Progresso</PercentageNumber>
                <Percentage background={props.percentageBackground} percentage={props.percentageNumber} />
                <PercentageNumber>{props.percentageNumber}</PercentageNumber>
            </CardInfo>
        </Card>
    );
};

export default CardCurso;