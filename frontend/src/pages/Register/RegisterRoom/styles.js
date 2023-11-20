import { styled, css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
margin: 25px 0 0 40px;
flex: 1;

header {
  display: flex;
  align-items: center;

  h2 {
    font-size: 48px;
    margin: 15px 0 10px 10px;
  }
  img{
    width:12px;
      }
}

span {
  font-size: 24px;
  color: #A4A4A4;
  opacity: 0.8;
  padding-top:28px;
  padding-left:20px;
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
  gap: 25px;
  width: 50%;
  margin: 5% 20% 0;

input {
  
  background: #2A2A2B;
  border: 0;
  border-radius: 10px;
  height: 60px;
  width: 100%;
  padding: 0 25px;
  color: #FFF;
  opacity: 0.8;
  margin: 10px 0 25px;
  box-shadow: 0px 3px 60px 1px rgba(0, 0, 0, 0.35);

  &::placeholder {
    color: rgba(167, 167, 167, 0.34);
    font-family: M PLUS 2;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

  }
}
.height{
  height: 200px
}
  select {
    background: #2A2A2B;
    border: 0;
    border-radius: 10px;
    height: 60px;
    width: 100%;
    padding: 0 25px;
    color: #FFF;
    opacity: 0.8;
    margin: 10px 0 25px;
    box-shadow: 0px 3px 60px 1px rgba(0, 0, 0, 0.35);

    &::placeholder {
      color: rgba(167, 167, 167, 0.34);
      font-family: M PLUS 2;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

    }
  }

  span {
    color: #FFF;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  i{
    color: #308ECC;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  button {
    height: 50px;
    width: 140px;
    border: 0;
    font-size: 18px;
    color: #FFF;
    transition: background 0.2s;
    border-radius: 10px;
    background: #308ECC;
    box-shadow: 0px 3px 60px -2px rgba(0, 0, 0, 0.25);


    &:hover {
      background: ${darken(0.03, '#308ECA')};
    }
  }
  }

`;
