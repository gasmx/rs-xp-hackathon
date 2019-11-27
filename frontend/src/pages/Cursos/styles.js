import styled from 'styled-components';
import background from '../../assets/bg2.png';

export const Container = styled.div`
    width: 100%;
    background: #eee; 
`;

export const Introducao = styled.section`
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    background: url(${background}) no-repeat;
    background-size: cover;
`;

export const Title = styled.h1`
    font-size: 30px;
    max-width: 960px;
    margin: 0 auto;
    margin-bottom: 10px;
    color: #fff;
    padding: 10px;
`;

export const TitleCurso = styled.h1`
    font-size: 30px;
    max-width: 960px;
    margin: 0 auto;
    margin-bottom: 10px;
    color: #000;
    padding: 10px;
`;

export const ContentIntroducao = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding-bottom: 10px;
    padding: 10px;

`;

export const ContentInfo = styled.div`
    flex: 1 1 260px;
    margin: 10px;
`;

export const TextInfo = styled.h1`
    font-size: 17px;
    text-align: justify;
    text-indent: 50px;
    color: #fff;
    line-height: 190%;
`;

export const ImageInfo = styled.img`
    width: 100%;
`;

export const CursosSection = styled.section`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const ContentCursos = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding-bottom: 10px;

`;