import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { useParams, useNavigate } from 'react-router-dom';

import api from '../../../services/api';

import { updateRoomRequest } from '../../../store/modules/register/registerRoom/actions';

import { Container, Forms, InputWrapper } from './styles';

import DefaultLayout from '../../_layouts/default';
import Header from '../../../components/Barside';

export function UpdateRoom() {
  const [room, setRoom] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    api.patch(`rooms/${id}`)
      .then((response) => setRoom(response.data));
  }, [id]);

  const handleSubmit = (data) => {
    dispatch(updateRoomRequest(id, data, navigate));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <h2>Cadastro</h2>
        <span>Sala</span>
        <Forms>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <strong>Número</strong>
              <Input name="number" placeholder={room.number} />
            </InputWrapper>
            <InputWrapper>
              <strong>Andar</strong>
              <Input name="floor" placeholder={room.floor} />
            </InputWrapper>
            <InputWrapper size="double">
              <strong>Descrição</strong>
              <Input className="height" name="name" placeholder={room.name} />
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
