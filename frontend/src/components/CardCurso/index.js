import React from 'react';

import {
    Card,
    CardImage,
    CardInfo,
    CardButton,
    Button,
    Title,
    Description,
    Percentage,
    PercentageNumber,
} from './styles';

const CardCurso = (props) => {
    const color = props.colorButton;
    const { history } = props;

    function openDetailCourse() {
        history.push(`/curso/${props.title}`);
    }

    return (
        <Card onClick={openDetailCourse}>
            <CardImage src={props.urlimg} />
            <CardInfo>
                <Title>{props.title}</Title>
                <Description>{props.desc}</Description>
                <Percentage background={props.percentageBackground} percentage={props.percentageNumber} />
                <PercentageNumber>{props.percentageNumber}</PercentageNumber>
            </CardInfo>
            <CardButton>
                <Button color={color} >{props.button}</Button>
            </CardButton>
        </Card>
    );
};

export default CardCurso;