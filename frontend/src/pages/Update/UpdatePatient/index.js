import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';

import * as Yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePatientRequest } from '../../../store/modules/register/registerPatient/actions';

import api from '../../../services/api';

import { Container, Forms, InputWrapper } from './styles';

import DefaultLayout from '../../_layouts/default';
import Header from '../../../components/Barside';

export function UpdatePatient() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Insira o valor atual/novo'),
    medic_history: Yup.string(),
    gender: Yup.string().required('Insira o valor atual/novo'),
    cpf: Yup.string().required('Insira o valor atual/novo'),
    adress: Yup.string().required('Insira o valor atual/novo'),
    contact: Yup.string().required('Insira o valor atual/novo'),
    expenses: Yup.number().required('Insira o valor atual/novo'),
    status_post_operation: Yup.string('Insira o valor atual/novo'),
    doctor_id: Yup.number().required('Insira o valor atual/novo'),
    room_id: Yup.number().required('Insira o valor atual/novo'),
    surgery_id: Yup.number().required('Insira o valor atual/novo'),
  });
  const dispatch = useDispatch();
  const [doctors, setDoctors] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [surgeries, setSurgeries] = useState([]);
  const [patient, setPatient] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    api.patch(`patients/${id}`)
      .then((response) => { setPatient(response.data); })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (data) => {
    dispatch(updatePatientRequest(id, data, navigate));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <h2>Cadastro</h2>
        <span>Paciente</span>
        <Forms schema={schema}>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <strong>Nome</strong>
              <Input name="name" placeholder={patient.name} />
            </InputWrapper>
            <InputWrapper>
              <strong>Contato</strong>
              <Input name="contact" placeholder={patient.contact} />
            </InputWrapper>
            <InputWrapper>
              <strong>Gênero</strong>
              <Select
                name="gender"
                placeholder={patient.gender}
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
              <Input name="medic_history" placeholder={patient.medic_history} />
            </InputWrapper>
            <InputWrapper>
              <strong>CPF</strong>
              <Input name="cpf" placeholder={patient.cpf} />
            </InputWrapper>
            <InputWrapper>
              <strong>Endereço</strong>
              <Input name="adress" placeholder={patient.adress} />
            </InputWrapper>
            <InputWrapper>
              <strong>Custos</strong>
              <Input name="expenses" placeholder={patient.expenses} />
            </InputWrapper>
            <InputWrapper size="double">
              <strong>Pós operatório</strong>
              <Input name="status_post_operation" placeholder={patient.status_post_operation} />
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
