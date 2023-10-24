import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  margin: 25px 0 0 40px;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 28px;
    padding-bottom: 5px;
  }

  span {
    font-size: 14px;
    color: #A4A4A4;
    opacity: 0.8;
  }


  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    width: 50%;
    margin: 2rem auto;

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
}
`;

export const Buttons = styled.div`
  display: flex;


  button {
    height: 34px;
      width: 120px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      margin-right: 5px;
      background: #421452;
      color: #FFF;
      transition: background 0.2s;


      &:hover {
        background: ${darken(0.03, '#421452')};
      }
  }
`;
