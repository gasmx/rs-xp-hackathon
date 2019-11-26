import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #113448;
  padding: 0 10px;
`;

export const Content = styled.div`
  height: 60px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
`;

export const Logo = styled.span`
  font-size: 20px;
  a{
    text-decoration: none;
    color: #FFF;
  }
`;

export const Config = styled.div`
  span {
      margin: 10px;
      color: #fff;
      font-size: 20px;
  }

  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  height: 20;
  background: #14bf98;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-left: 10px;

  a {
      text-decoration: none; 
      font-size: 15px;
      color: #eee;
  }
`;