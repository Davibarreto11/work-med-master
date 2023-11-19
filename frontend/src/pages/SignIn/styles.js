import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  background: linear-gradient(#421452, rgba(66,20,82,0.01));
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0% 1% 1% 0%;
  padding: 40px;

  h1 {
    color: #FFF;
    font-family: Montserrat;
    font-size: 50px;
    font-style: normal;
    font-weight: 1000;
    line-height: normal;
  }

  img {
    width: 50%;
  }

  h2 {
    font-size: 30px;
    padding-bottom: 5px;
    padding-top:30px;
    color: #FFF;
    text-align: center;
    font-family: M PLUS 2;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    font-size: 16px;
    max-width: 550px;
    text-align: center;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 100;
    line-height: 150%;
  }
`;

export const Forms = styled.div`
  background: #202020;
  border-radius: 1% 0% 0% 1%;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  img{
    width:35%;
  }

  animation: ${appearFromLeft} 0.5s;

  h2 {
    font-size: 28px;
    padding-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #A4A4A4;
    opacity: 0.8;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

  span {
      color: #f64c75;
      margin: 0 0 10px;
      align-self: start;
      font-weight: normal;
    }

  input {
      background: #1A1A1A;
      border: 0;
      border-radius: 15px;
      height: 55px;
      width: 100%;
      padding: 0 60px;
      color: #909090;
      opacity: 0.8;
      margin: 0 0 20px;
      

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

  }
  .input-container {
      position: relative;
      margin-bottom: 15px;
  }
    
  .icon {
      position: absolute;
      top: 36%;
      transform: translateY(-50%);
      left: 18px;
      width: 20px;
  }

  button {
      margin: 0 0 0 0;
      height: 42px;
      width: 120px;
      font-weight: bold;
      border: 0;
      border-radius: 8px;
      font-size: 16px;
      background: #4C215C;
      font-style: normal;
      font-weight: 400;
      color: #FFF;
      transition: background 0.2s;
      margin: 40px 0 0 200px;

      &:hover {
        background: ${darken(0.03, '#421452')};
      }
  }
  button img{
      margin-left:10px;
      width: 13px;
      height: 13px;
  }

    a {
      color: #A4A4A4;
      font-size: 14px;
      width: 43%;
      opacity: 0.8;
      transition: 0.28s;
    }
    a:hover{
      color: #fff;
      transition: 0.28s;
    }
  }
`;
