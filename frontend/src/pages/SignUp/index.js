import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import AuthLayout from '../_layouts/auth';
import Logo from '../../assets/logo.svg';
import workmed from '../../assets/workmed.svg';
import email from '../../assets/email.svg';
import pass from '../../assets/pass.svg';
import emails from '../../assets/emails.svg';
import vector from '../../assets/Vector.svg';

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
        <h2>Sistema de Gerenciamento Hospitalar</h2>
        <p>O nosso sistema de gerenciamento hospitalar oferece uma solução abrangente
           e eficiente para administrar todos os aspectos do seu hospital ou clínica, 
           Com uma interface intuitiva e uma dashboard incrivel, estamos aqui para
           otimizar e simplificar a gestão da sua instituição de saúde.</p>

      </Container>
      <Forms>
        <img src={Logo} alt="WorMed" />
        <h2>Seja Bem-Vindo ao WorkMed</h2>
        <p>Cadastre-se para ter acesso a diversos recursos</p>
        <Form schema={schema} onSubmit={handleSubmit}>
          <div class="input-container">
            <img src={email} class="icon"/>
            <Input name="name" type="name" placeholder="Nome completo" />
          </div>
          <div class="input-container">
            <img src={emails} class="icon"/>
            <Input name="email" type="email" placeholder="Seu e-mail" />
          </div>
          <div class="input-container">
            <img src={pass} class="icon"/>
            <Input name="password" type="password" placeholder="Sua senha" />
          </div>
          <Link to="/">Já tenho login</Link>
          <button type="submit">Criar<img src={vector}/></button>
        </Form>
      </Forms>
    </AuthLayout>
  );
}

export default SignUp;
