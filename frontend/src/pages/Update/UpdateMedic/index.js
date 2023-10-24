import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';

import * as Yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';
import { updateMedicRequest } from '../../../store/modules/register/registerMedic/actions';

import api from '../../../services/api';

import {
  Container, Forms, InputWrapper,
} from './styles';

import DefaultLayout from '../../_layouts/default';
import Header from '../../../components/Barside';

export default function UpdateMedic() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Insira o valor atual/novo'),
    speciality: Yup.string().required('Insira o valor atual/novo'),
    crm: Yup.string().required('Insira o valor atual/novo'),
    cpf: Yup.string().required('Insira o valor atual/novo'),
    adress: Yup.string().required('Insira o valor atual/novo'),
    gender: Yup.string().required('Insira o valor atual/novo'),
  });

  const dispatch = useDispatch();
  const [doctor, setDoctor] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.patch(`doctors/${id}`)
      .then((response) => { setDoctor(response.data); })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (data) => {
    dispatch(updateMedicRequest(id, data, navigate));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <h2>Atualizar</h2>
        <span>Médico</span>
        <Forms>
          <Form schema={schema} onSubmit={handleSubmit}>
            <InputWrapper size="double">
              <strong>Nome</strong>
              <Input name="name" placeholder={doctor.name} />
            </InputWrapper>
            <InputWrapper>
              <strong>Especialidade Médica</strong>
              <Input name="speciality" placeholder={doctor.speciality} />
            </InputWrapper>
            <InputWrapper>
              <strong>Gênero</strong>
              <Select
                name="gender"
                placeholder={doctor.gender}
                options={[{ title: 'Masculino', value: 'Masculino' },
                  { title: 'Feminino', value: 'Feminino' }]}
              />
            </InputWrapper>
            <InputWrapper>
              <strong>CRM</strong>
              <Input name="crm" placeholder={doctor.crm} />
            </InputWrapper>
            <InputWrapper>
              <strong>CPF</strong>
              <Input name="cpf" placeholder={doctor.cpf} />
            </InputWrapper>
            <InputWrapper size="double">
              <strong>Endereço</strong>
              <Input name="adress" placeholder={doctor.adress} />
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
