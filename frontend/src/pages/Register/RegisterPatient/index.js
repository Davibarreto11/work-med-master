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
              <span>Nome</span><i>  *</i>
              <Input name="name" placeholder="Digite seu nome..." />
            </InputWrapper>
            <InputWrapper>
              <span>Contato</span><i>  *</i>
              <Input name="contact" placeholder="Número de celular..." />
            </InputWrapper>
            <InputWrapper>
              <span>Gênero</span><i>  *</i>
              <Select
                name="gender"
                placeholder="Escolha"
                options={[{ title: 'Masculino' }, { title: 'Feminino' }]}
              />
            </InputWrapper>
            <InputWrapper>
              <span>Médico</span><i>  *</i>
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
              <span>Sala Cirurgica</span><i>  *</i>
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
              <span>Tipo de cirurgia</span><i>  *</i>
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
              <span>Histórico Médico</span><i>  *</i>
              <Input name="medic_history" placeholder="Historico Médico..." />
            </InputWrapper>
            <InputWrapper>
              <span>CPF</span><i>  *</i>
              <Input name="cpf" placeholder="Digite seu CPF" />
            </InputWrapper>
            <InputWrapper>
              <span>Endereço</span><i>  *</i>
              <Input name="adress" placeholder="Digite seu endereço..." />
            </InputWrapper>
            <InputWrapper>
              <span>Despesas</span><i>  *</i>
              <Input name="expenses" placeholder="Valor gasto..." />
            </InputWrapper>
            <InputWrapper size="double">
              <span>Pós operatório</span><i>  *</i>
              <Input name="status_post_operation" placeholder="Pós operatório" />
            </InputWrapper>
            <InputWrapper>
              <button type="submit">Cadastrar</button>
            </InputWrapper>
          </Form>
        </Forms>
      </Container>
    </DefaultLayout>
  );
}
