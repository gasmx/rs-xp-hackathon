import styled from 'styled-components';

export const Card = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #FFF;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
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
    height: 100%;
    align-items: flex-end;
`;

export const Button = styled.button`
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background: ${props => props.color};
    color: #fff;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
`;

export const Description = styled.h2`
    color: #777;
    font-size: 15px;
`;