import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container, Buttons } from './styles';
import Logo from '../../assets/logo.svg';

import DefaultLayout from '../_layouts/default';
import Header from '../../components/Barside';

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const handleSubmit = (data) => {
    dispatch(updateProfileRequest(data));
  };

  const handleSignOut = () => {
    dispatch(signOut(navigate));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <img src={Logo} alt="Logo WorkMed" />
        <Form initialData={profile} onSubmit={handleSubmit}>

          <Input name="name" placeholder="Nome completo" />
          <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

          <hr />

          <Input type="password" name="oldPassword" placeholder="Senha atual" />
          <Input type="password" name="password" placeholder="Nova senha" />
          <Input type="password" name="confirmPassword" placeholder="Confirme senha" />

          <Buttons>
            <button type="submit">Atualizar perfil</button>
            <button type="button" style={{ background: '#1B1B1B', color: '#f64c70' }} onClick={handleSignOut}>Sair</button>
          </Buttons>
        </Form>

      </Container>
    </DefaultLayout>
  );
}

export default Profile;
