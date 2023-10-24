import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { useParams, useNavigate } from 'react-router-dom';

import { updateSurgeryRequest } from '../../../store/modules/register/registerSurgery/actions';

import api from '../../../services/api';

import { Container, Forms, InputWrapper } from './styles';

import DefaultLayout from '../../_layouts/default';
import Header from '../../../components/Barside';

export function UpdateSurgery() {
  const [surgery, setSurgery] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleSubmit = (data) => {
    dispatch(updateSurgeryRequest(id, data, navigate));
  };

  useEffect(() => {
    api.patch(`surgeries/${id}`)
      .then((response) => setSurgery(response.data))
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <h2>Cadastro</h2>
        <span>Cirurgia</span>
        <Forms>
          <Form onSubmit={handleSubmit}>
            <InputWrapper size="double">
              <strong>Nome</strong>
              <Input name="name" placeholder={surgery.name} type="text" />
            </InputWrapper>
            <InputWrapper size="double">
              <strong>Descrição</strong>
              <Input className="height" name="description" placeholder={surgery.description} type="text" />
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
