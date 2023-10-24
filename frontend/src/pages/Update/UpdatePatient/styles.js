import { styled, css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 25px 0 0 40px;
  flex: 1;

  h2 {
    font-size: 28px;
    padding-bottom: 5px;
  }

  span {
    font-size: 14px;
    color: #A4A4A4;
    opacity: 0.8;
  }
`;

const sizes = {
  default: css`
    grid-column: span 1;
  `,
  double: css`
    grid-column: span 2;
  `,
  triple: css`
    grid-column: span 3;
  `,
};

export const InputWrapper = styled.div`
  strong {
    margin: 10px 0 0px 10px;
  }

  ${(props) => sizes[props.size || 'default']}
`;

export const Forms = styled.div`
  form {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 1fr;
    flex-wrap: wrap;
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

    select {
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

    span {
      color: #f64c75;
      margin: 0 0 5px;
      align-self: start;
      font-weight: bold;
    }

    button {
      height: 40px;
      width: 120px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: bold;
      border: 0;
      background: #FF7723;
      color: #FFF;
      transition: background 0.2s;


      &:hover {
        background: ${darken(0.03, '#FF7723')};
      }
    }
  }

`;
