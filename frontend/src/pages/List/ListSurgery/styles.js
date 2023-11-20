import { styled, css } from 'styled-components';

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
    width:50px;
    heigth:20px;
      }
}

  .sp {
  font-size: 24px;
  color: #A4A4A4;
  opacity: 0.8;
  padding-top:28px;
  padding-left:20px;
}

  a {
    color:  #308ECC;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 65%;
  margin: 14% auto;
  overflow-y:auto;
  overflow-x:hidden ;
  height:auto;
  max-height: 75vh;

  a {
    button {
      background: #AC3483;
      border: 0;
      padding: 12px 30px;
      border-radius: 10px;
      color: #FFF;
      margin-bottom: 15px;
      color: #FFF;
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      
      img{
        padding-left: 15px;
      }
    }
  }
`;


export const List = styled.div`
width: 100%;

  ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 7px 0 0 0;
  border-radius: 13px;
  background: #2A2A2B;
  box-shadow: 0px 4px 23px 0px rgba(0, 0, 0, 0.25);
  transition: 2s;
  height: 65px;
  cursor: pointer;

  .user-l{
    width:25px;
  }
  .group{
    display: flex;
    gap: 20px;
    transition: 2s;
  }
  li {
    display: flex;
    align-items: center;
    transition: 2s;

    button {
      background: none;
      border: 0;
    }

    img {
      width: 18px;
      margin-right: 15px;
    }
  }
}
`;

export const Infor = styled.ul`
  background: #242424;
  border-radius: 12px;
  margin-top: 15px;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.25);
`;

export const MoreInfor = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: -5px;

  h3 {
    padding: 10px 0 5px 0;
    color: #FFF;
    font-size: 20px;
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

export const Grid = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 50%);
  gap: 10px;
  padding: 25px 25px 25px 0px;
`;


export const Part = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => sizes[props.size || 'default']}

  strong {
    padding: 10px 0 10px 0;
    color: #AC3483;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Badge = styled.div``;

export const Visible = styled.div`
  background: #242424;
  border-radius: 0 0 10px 10px;
  margin: 0px 0px 15px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

`;
