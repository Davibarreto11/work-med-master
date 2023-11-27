import styled from 'styled-components';

export const SideBar = styled.div`
  height: 100%;
  width: 8rem;
  background: #242424;

  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 1px 30px 30px 1px;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 180px;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;

    img {
      width: 85px;
      padding: 25px;
    }
  }

`;

export const Logout = styled.button`
  background: transparent;
  border: 0;

  img {
    padding: 50px 15px;
    width: 75px;
  }
`;
