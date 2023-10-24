import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
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
  border-radius: 2px;
  padding: 40px;

  h1 {
    font-size: 40px;
  }

  img {
    width: 40%;
  }

  h2 {
    font-size: 28px;
  }

  p {
    font-size: 14px;
    max-width: 450px;
  }
`;

export const Forms = styled.div`
  background: #1B1B1B;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2px;

  animation: ${appearFromLeft} 0.5s;

  h2 {
    font-size: 28px;
    padding-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #A4A4A4;
    opacity: 0.8;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    span {
      color: #f64c75;
      margin: 0 0 5px;
      align-self: start;
      font-weight: bold;
    }

    input {
      background: rgba(0, 0, 0, 0.4);
      border: 0;
      border-radius: 10px;
      height: 45px;
      width: 100%;
      padding: 0 25px;
      color: #FFF;
      opacity: 0.8;
      margin: 0 0 25px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

    }
    button {
      height: 34px;
      width: 100px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      background: #421452;
      color: #FFF;
      transition: background 0.2s;

      margin: 20px 0 0 200px;

      &:hover {
        background: ${darken(0.03, '#421452')};
      }
    }

    a {
      color: #A4A4A4;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;
