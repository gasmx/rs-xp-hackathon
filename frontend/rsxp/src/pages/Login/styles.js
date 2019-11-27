import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import background from '../../assets/bg-home.jpeg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  justify-content: center;
  align-items: center;

  background: url(${background}) no-repeat;
  background-size: cover;

  flex-direction: column;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const Formulario = styled.form`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
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