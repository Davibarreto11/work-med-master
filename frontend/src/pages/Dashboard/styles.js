import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 70px 0 70px;

  overflow-y:auto;
  overflow-x: hidden;
  height:auto;
  width: 100%;
  max-height: 100vh;

  color: #FFF;

  img {
    width: 20px;
    border-radius: 50%;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  header {
    display: flex;
    align-items: center;
  }

  h5 {
    margin-top: 10px;
  }

  a {
    display: flex;
    align-items: center;
    color: #FFF;

    p {
      padding: 20px 5px 0 0;
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxWeather = styled.div`
  background: #2b2b2b;
  color: #FFF;

  width: 32%;
  height: 30vh;
  padding: 15px;
  margin: 5px 0 5px 0;
  border-radius: 10px;
  box-shadow: 0px 3px 60px -2px rgba(0, 0, 0, 0.25);

  .top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h5 {
    font-weight: 500;
    font-size: 26px;
    }
  }

  .bot {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
    padding-top: 20px;
    font-weight: 500;
    font-size: 19px;
    padding-right: 70px;
    }

    img {
      width: 70px;
    }
  }
`;

export const Box = styled.div`
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position:center;
    background-size: 70% 70%;
    outline: none;
    padding-right: 2rem;
    border: none;
    width: .2rem;
    cursor: pointer;
  }

  width: 32%;
  height: 30vh;
  padding: 15px;
  margin: 5px 0 5px 0;
  border-radius: 10px;
  box-shadow: 0px 3px 60px -2px rgba(0, 0, 0, 0.25);

  background: #2b2b2b;
  color: #FFF;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between  ;

    h5 {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;

    }

    img {
      width: 85px;
    }
  }

  .bot {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h4 {
    padding-top: 55px;
    font-weight: 500;
    font-size: 19px;
    padding-right: 70px;
    }

    img {
      width: 60px;
    }
  }
`;

export const SurgeriesMonth = styled.div`

  background: #2b2b2b;
  color: #FFF;

  width: 66%;
  height: 50vh;
  padding: 15px;
  margin: 20px 0 20px 0;
  border-radius: 10px;
  box-shadow: 0px 3px 60px -2px rgba(0, 0, 0, 0.25);

  h5 {
    font-weight: 500;
    font-size: 28px;
    color: #AC3483;
  }

  .graficMonths {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .grafictotalSurgery {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-right: 50px;
    }
  }
`;

export const SurgeriesProcedures = styled.div`
  background: #2b2b2b;
  color: #FFF;

  width: 32%;
  height: 50vh;
  padding: 15px;
  /* margin: 5px 0 5px 0; */
  border-radius: 10px;
  box-shadow: 0px 3px 60px -2px rgba(0, 0, 0, 0.25);

  h5 {
    font-weight: 500;
    font-size: 30px;
    color: #e74c3c;
  }
`;

export const UniqGrafic = styled.div`
  padding: 15px;
  background: #2b2b2b;
  color: #FFF;
  border-radius: 5px;

  .top {
    display: flex;

    h5 {
      font-weight: bold;
      font-size: 28px;
      color: #16A085;
    }

    h4 {
      padding-right: 15px;
      font-size: 26px;
    }

    p {
      padding-bottom: 20px;
    }
  }

`;
