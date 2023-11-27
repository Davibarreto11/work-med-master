import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, SideBar, Logout } from './styles';

import { signOut } from '../../store/modules/auth/actions';

import Logo from '../../assets/logo.svg';
import Add from '../../assets/addsquare_purple.svg';
import Layer from '../../assets/layer_purple.svg';
import Graph from '../../assets/graph_purple.svg';
import Blogout from '../../assets/logout_purple.svg';

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = () => {
    dispatch(signOut(navigate));
  };

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
      <Logout onClick={handleSignOut}>
        <img src={Blogout} alt="Logout" />
      </Logout>
    </SideBar>
  );
}

export default Header;
