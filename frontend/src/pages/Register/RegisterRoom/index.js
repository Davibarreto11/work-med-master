import React from 'react';

import { Form, Input } from '@rocketseat/unform';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { registerRoomInRequest } from '../../../store/modules/register/registerRoom/actions';

import {
  Container, Forms, InputWrapper,
} from './styles';

import DefaultLayout from '../../_layouts/default';
import Header from '../../../components/Barside';

import Rectangle from '../../../assets/rectangleRoom.svg';

export default function RegisterRoom() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Insira um nome'),
    floor: Yup.string().required('Insira um andar'),
    number: Yup.string().required('Insira um número'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ name, floor, number }) => {
    dispatch(registerRoomInRequest(name, floor, number, navigate));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <header>
          <img src={Rectangle} alt="Rectangule" />
          <h2>Cadastro</h2>
        </header>
        <span>Sala</span>
        <Forms>
          <Form schema={schema} onSubmit={handleSubmit}>
            <InputWrapper>
              <strong>Número</strong>
              <Input name="number" placeholder="Ex: Número..." />
            </InputWrapper>
            <InputWrapper>
              <strong>Andar</strong>
              <Input name="floor" placeholder="Andar..." />
            </InputWrapper>
            <InputWrapper size="double">
              <strong>Descrição</strong>
              <Input className="height" name="name" placeholder="Digite seu nome..." />
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
