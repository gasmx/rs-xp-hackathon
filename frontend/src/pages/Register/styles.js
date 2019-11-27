import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import background from '../../assets/bg-home.jpeg';

export const Container = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  background: url(${background}) no-repeat;
  background-size: cover;

  flex-direction: column;

  padding: 20px 0;
`;

export const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const TabEstudante = styled.div`
  display: flex;
  background-color: ${props => props.background ? '#14bf98' : '#ddd'};
  width: 50%;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 4px;
  cursor: pointer;
  margin-bottom: -15px;
  padding: 10px;
`;

export const TabEstudanteText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color ? '#fff' : '#333'};
`;

export const TabEmpresa = styled(TabEstudante)`
  /* display: flex;
  background-color: ${props => props.background ? '#14bf98' : '#ddd'};
  width: 50%;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 4px;
  cursor: pointer;
  margin-bottom: -15px;
  padding: 10px; */
`;

export const TabEmpresaText = styled(TabEstudanteText)`
   /* font-size: 16px;
  font-weight: bold;
  color: ${props => props.color ? '#fff' : '#333'}; */
`;

export const Formulario = styled.form`
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 20px;

  display: flex;
  flex-direction: column;

  margin-bottom: 20px;

  select {
    height: 48px;
    border-radius: 4px;
  }

  h1 {
    margin-bottom: 20px;
    color: #999;
  }

  label {
    font-weight: bold;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: #333;
    margin-top: 10px;
  }

  input {
    width: 100%;
    border-radius: 4px;
    height: 48px;
    text-decoration: none;
    padding: 10px 20px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(169, 169, 169);
  }
`;

export const SubmitLogin = styled.button`
  width: 100%;
  background-color: #14bf98;
  height: 48px;
  border-radius: 4px;
  text-decoration: none;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

export const CriarConta = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;