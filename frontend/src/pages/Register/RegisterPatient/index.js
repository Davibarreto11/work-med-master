import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';

import * as Yup from 'yup';

import api from '../../../services/api';

import { registerPatientInRequest } from '../../../store/modules/register/registerPatient/actions';

import Rectangle from '../../../assets/rectanglePatient.svg';

import {
  Container, Forms, InputWrapper,
} from './styles';

import DefaultLayout from '../../_layouts/default';
import Header from '../../../components/Barside';

export default function RegisterPatient() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Insira um nome'),
    medic_history: Yup.string(),
    gender: Yup.string().required('Insira seu gênero'),
    cpf: Yup.string().required('Insira CPF'),
    adress: Yup.string().required('Insira um endereço'),
    contact: Yup.string().required('Insira seu contato'),
    expenses: Yup.number().required('Insira o valor gasto'),
    status_post_operation: Yup.string(),
    doctor_id: Yup.number().required('Insira o médico responsável'),
    room_id: Yup.number().required('Insira a sala utilizada'),
    surgery_id: Yup.number().required('Insira o tipo de cirurgia'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [surgeries, setSurgeries] = useState([]);

  useEffect(() => {
    async function loadMedic() {
      const [doctorsApi, roomsApi, surgeryApi] = await Promise.all([
        api.get('doctors'),
        api.get('rooms'),
        api.get('surgeries'),
      ]);

      setDoctors(doctorsApi.data);
      setRooms(roomsApi.data);
      setSurgeries(surgeryApi.data);
    }

    loadMedic();
  }, []);

  const handleSubmit = (formData) => {
    dispatch(registerPatientInRequest(
      formData,
      navigate,
    ));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <header>
          <img src={Rectangle} alt="Rectangle" />
          <h2>Cadastro</h2>
        </header>
        <span>Paciente</span>
        <Forms>
          <Form schema={schema} onSubmit={handleSubmit}>
            <InputWrapper>
              <strong>Nome</strong>
              <Input name="name" placeholder="Digite seu nome..." />
            </InputWrapper>
            <InputWrapper>
              <strong>Contato</strong>
              <Input name="contact" placeholder="Número de celular..." />
            </InputWrapper>
            <InputWrapper>
              <strong>Gênero</strong>
              <Select
                name="gender"
                placeholder="Escolha"
                options={[{ title: 'Masculino' }, { title: 'Feminino' }]}
              />
            </InputWrapper>
            <InputWrapper>
              <strong>Médico</strong>
              <Select
                name="doctor_id"
                placeholder="Escolha"
                options={doctors.map((doctor) => ({
                  id: doctor.id,
                  title: doctor.name,
                }))}
              />
            </InputWrapper>
            <InputWrapper>
              <strong>Sala Cirurgica</strong>
              <Select
                name="room_id"
                placeholder="Escolha"
                options={rooms.map((room) => ({
                  id: room.id,
                  title: room.name,
                }))}
              />
            </InputWrapper>
            <InputWrapper>
              <strong>Tipo de cirurgia</strong>
              <Select
                name="surgery_id"
                placeholder="Escolha"
                options={surgeries.map((surgery) => ({
                  id: surgery.id,
                  title: surgery.name,
                }))}
              />
            </InputWrapper>
            <InputWrapper>
              <strong>Histórico Médico</strong>
              <Input name="medic_history" placeholder="Historico Médico..." />
            </InputWrapper>
            <InputWrapper>
              <strong>CPF</strong>
              <Input name="cpf" placeholder="Digite seu CPF" />
            </InputWrapper>
            <InputWrapper>
              <strong>Endereço</strong>
              <Input name="adress" placeholder="Digite seu endereço..." />
            </InputWrapper>
            <InputWrapper>
              <strong>Endereço</strong>
              <Input name="expenses" placeholder="Valor gasto..." />
            </InputWrapper>
            <InputWrapper size="double">
              <strong>Pós operatório</strong>
              <Input name="status_post_operation" placeholder="Pós operatório" />
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
