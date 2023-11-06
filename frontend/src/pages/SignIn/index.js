import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import AuthLayout from '../_layouts/auth';
import Logo from '../../assets/logo.svg';
import workmed from '../../assets/workmed.svg';
import vector from '../../assets/Vector.svg';
import email from '../../assets/emails.svg';
import pass from '../../assets/pass.svg';

import { Container, Forms } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password, navigate));
  };

  return (
    <AuthLayout>
      <Forms>
        <img src={Logo} alt="WorMed" />
        <h2>Bem-Vindo de Volta!</h2>
        <p>Entre para ter acesso a sua Dashboard</p>
        <Form schema={schema} onSubmit={handleSubmit}>

        <div class="input-container">
          <img src={email} class="icon"/>
          <Input name="email" type="email" placeholder="Seu e-mail" />
        </div>
        <div class="input-container">
          <img src={pass} class="icon"/>
          <Input name="password" type="password" placeholder="Sua senha" />
        </div>

          <Link to="/signup">Criar conta gratuita</Link>
          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}<img src={vector}/></button>
        </Form>
      </Forms>
      <Container>
        <h1>WORKMED</h1>
        <img src={workmed} alt="Banner" />
        <h2>Sistema de Gerenciamento Hospitalar</h2>
        <p>O nosso sistema de gerenciamento hospitalar oferece uma solução abrangente e eficiente para administrar todos os aspectos do seu hospital ou clínica, Com uma interface intuitiva e uma dashboard incrivel, estamos aqui para otimizar e simplificar a gestão da sua instituição de saúde.

        </p>
      </Container>
    </AuthLayout>
  );
}

export default SignIn;
