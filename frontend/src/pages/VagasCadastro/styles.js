import styled from 'styled-components';
import background from '../../assets/bg2.png';

export const Container = styled.div`
    width: 100%;
    background: #eee;
    // height: 100%;
`;

export const TitleVagasCadastro = styled.h1`
    font-size: 30px;
    max-width: 960px;
    margin: 0 auto;
    color: #000;
    padding: 10px;
`;

export const CadastroSection = styled.section`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const ContentCadastro = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding-bottom: 10px;

`;

export const Card = styled.div`
    flex: 0 calc(50% - 40px);
    width: 100%;
    background: #FFF;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    margin: 20px;
`;

export const PrerequisiteImage = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 6px;
`

export const ContentBotoes = styled.div`
    max-width: 960px;
    margin: 0 auto;
`

export const BotaoNovo = styled.button`
    margin-top: 10px;
    margin-left: 10px;
`

export const BotaoVaga = styled.button`
    float: right;
    margin-right: 8px;
   
`

export const BotaoMatch = styled.button`
    float: right;
    margin-right: 8px;
   
`
export const ContainerVagaDetalhe = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const DetalheVaga = styled.div`
    flex: 0 50%;
    padding-right: 12px;
`

export const Candidatos = styled.div`
    flex: 0 50%;
    background-color: #eee;
    padding: 10px;
    border-radius: 10px;
`

export const ListaCandidatos = styled.ul`
    max-height: 300px;
    overflow-y: auto;
`

export const ContainerCandidatoItem = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const ContainerCandidatoItemInfo = styled.ul`
    flex: 0 50%;
`