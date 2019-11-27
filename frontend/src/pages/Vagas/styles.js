import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: #eee; 
    padding: 10px;
`;


export const Intro = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
`;

export const Description = styled.h2`
    font-size: 15px;
    color: #999;
`;


export const Content = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

/* Modal */

export const Close = styled.div`
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
`;

export const ContainerModal = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 15px;
`;

export const TitleModal = styled.h2``;

export const DescriptionModal = styled.p`
    font-size: 18px;
`;

export const ButtonModal = styled.button`
    border: none;
    background: #14bf98;
    height: 40px;
    width: 100px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
`;