import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { registerSurgeryInRequest } from '../../../store/modules/register/registerSurgery/actions';
import {
  Container, Forms, InputWrapper,
} from './styles';

import DefaultLayout from '../../_layouts/default';
import Header from '../../../components/Barside';

import Rectangle from '../../../assets/retacgulePrincipal.svg';

export default function RegisterSurgery() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    description: Yup.string().required('Descreva a cirurgia'),
  });

  const dispact = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ name, description }) => {
    dispact(registerSurgeryInRequest(name, description, navigate));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <header>
          <img src={Rectangle} alt="Rectangle" />
          <h2>Cadastro</h2>
        </header>
        <span>Cirurgia</span>
        <Forms>
          <Form schema={schema} onSubmit={handleSubmit}>
            <InputWrapper size="double">
              <strong>Nome</strong>
              <Input name="name" placeholder="Digite seu nome..." type="text" />
            </InputWrapper>
            <InputWrapper size="double">
              <strong>Descrição</strong>
              <Input className="height" name="description" placeholder="Ex: Neurucirurgião..." type="text" />
            </InputWrapper>
            <InputWrapper>
              <button type="submit">Submit</button>
            </InputWrapper>
          </Form>
        </Forms>
      </Container>
    </DefaultLayout>
  );
}
