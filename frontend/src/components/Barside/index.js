import React from 'react';
import { Link } from 'react-router-dom';

import { Container, SideBar, Logout } from './styles';

import Logo from '../../assets/logo.svg';
import Add from '../../assets/addsquare_purple.svg';
import Layer from '../../assets/layer_purple.svg';
import Graph from '../../assets/graph.svg';
import Blogout from '../../assets/logout.svg';

function Header() {
  return (
    <SideBar>
      <Container>
        <a href='/'>
        <img src={Logo} alt="Logo" />
        </a>
        <nav>
          <Link to="/dashboard"><img src={Graph} alt="Graph" /></Link>
          <Link to="/register"><img src={Add} alt="Add" /></Link>
          <Link to="/list"><img src={Layer} alt="Layer" /></Link>
        </nav>
      </Container>
      <Logout>
        <img src={Blogout} alt="Logout" />
      </Logout>
    </SideBar>
  );
}

export default Header;
