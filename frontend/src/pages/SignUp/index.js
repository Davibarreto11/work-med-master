import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import AuthLayout from '../_layouts/auth';
import Logo from '../../assets/logo.svg';
import workmed from '../../assets/workmed.svg';

import { Container, Forms } from './styles';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira um nome'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password, navigate));
  };

  return (
    <AuthLayout>
      <Container>
        <h1>WORKMED</h1>
        <img src={workmed} alt="Banner" />
        <h2>What is Lorem Ipsum?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown
        </p>
      </Container>
      <Forms>
        <img src={Logo} alt="WorMed" />
        <h2>Seja Bem-Vindo ao WorkMed</h2>
        <p>Cadastre-se para ter acesso a diversos recursos</p>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" type="name" placeholder="Nome completo" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <Link to="/">Já tenho login</Link>
          <button type="submit">Criar conta</button>
        </Form>
      </Forms>
    </AuthLayout>
  );
}

export default SignUp;
