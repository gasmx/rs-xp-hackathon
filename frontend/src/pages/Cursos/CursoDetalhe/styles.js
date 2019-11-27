import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;

  align-items: center;

  iframe {
    height: 70%;
    width: 70%;
    border: 1px solid #ddd;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-top: 10px;
`;

export const Subtitle = styled.p`
  text-indent: 50px;
  width: 70%;
  margin: 20px 0;
  font-size: 18px;
`;

export const BtnFinalizar = styled.button`
  background-color: #14bf98;
  height: 48px;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: bold;
  margin-top: 40px;
  width: 70%;
`;