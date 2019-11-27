import React, { useEffect, useState } from 'react'

import Header from '../../../components/Header';

import { Container, Title, Subtitle, BtnFinalizar } from './styles';

export default function CursoDetalhe(props) {
  const { history } = props;

  useEffect(() => {
    async function getCourse() {
      const curso = await localStorage.getItem('curso');
      console.log(curso);
    }

    getCourse()

  }, []);

  function visualizarVagas() {
    history.push('/vagas')
  }


  return (
    <>
      <Header urlCourse="/cursos" />
      <Container>
        <Title>Detalhe do curso</Title>
        <Subtitle>Lógica de programação é o modo como se escreve um programa de computador, um algoritmo. Um algoritmo é uma sequência de passos para se executar uma função. Um exemplo de algoritmo, fora da computação, é uma receita de bolo.</Subtitle>
        <iframe
          src='https://www.youtube.com/embed/E7wJTI-1dvQ'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />

        <BtnFinalizar onClick={visualizarVagas}>Finalizar curso</BtnFinalizar>
      </Container>
    </>
  );
}