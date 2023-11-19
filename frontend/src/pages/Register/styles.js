import styled from 'styled-components';

export const Container = styled.div`
  width: 85%;
  height: auto;
  margin-left: 40px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const Title = styled.div`
  h2 {
    font-size: 28px;
    margin-top: 10px;
    font-weight: 500;
  }

  header {
    display: flex;
    align-items: center;
  }
  
  header img{
    height: 2rem;
    width: 1rem; 
  }

  span {
    margin-left: 1rem;
    font-size: 1em;
    color: #FFF;
    font-weight: 300;
  }
`;
export const Ficture = styled.div`
  img {
    width: 30%;
    margin: 0 0 0 35%;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  form {
    background: #2A2A2B;
    box-shadow: 0px 3px 60px -2px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    color: #FFF;
    font-size: 16px;
    font-weight: 300;
    width: 20%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 1rem;
      align-self: flex-start;
      padding: 15px 0 0px 15px;
    }

    strong {
      font-size: .8em;
      color: #A4A4A4;
      align-self: flex-start;
      padding: 0px 0 0px 15px;
    }

    img {
      padding-top: 25px;
      width: 50%;
    }

    a {
      text-decoration: none;
      align-self: stretch;

      button {
        width: 100%;
        border-radius: 0 0 14px 14px;
        border: 0;
        padding: 10px 10px;
        color: #fff;
      }
    }
    button:hover{
      opacity: 0.7;
    }
  }
`;
