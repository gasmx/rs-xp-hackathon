import styled from 'styled-components';

export const Card = styled.div`
    opacity: ${props => props.opacidade}
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #FFF;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const CardImage = styled.img`
    width: 100%;
    flex: 1;
    margin: 10px;
`;

export const CardInfo = styled.div`
    flex: 3 1 200px;
    margin: 10px;
`;

export const CardButton = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: flex-start;
`;

export const Button = styled.button`
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background: ${props => props.color};
    color: #fff;
    font-weight: bold;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
`;

export const Description = styled.h2`
    color: #777;
    font-size: 15px;
`;

export const Percentage = styled.div`
    background-color: ${props => props.background};
    height: 10px;
    border-radius: 4px;
    width: ${props => props.percentage};
    margin-top: 60px;
    border: 1px solid #ddd;
`;

export const PercentageNumber = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #999;
`;