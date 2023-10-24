import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';

import * as Yup from 'yup';

import { registerMedicInRequest } from '../../../store/modules/register/registerMedic/actions';

import {
  Container, Forms, InputWrapper,
} from './styles';

import DefaultLayout from '../../_layouts/default';
import Header from '../../../components/Barside';

import Rectangle from '../../../assets/rectangleVerde.svg';

export default function RegisterMedic() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Insira um nome'),
    speciality: Yup.string().required('Insira uma especialidade'),
    crm: Yup.string().required('Insira CRM'),
    cpf: Yup.string().required('Insira CPF'),
    adress: Yup.string().required('Insira um endereço'),
    gender: Yup.string().required('Insira seu gênero'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({
    name, speciality, gender, crm, cpf, adress,
  }) => {
    dispatch(registerMedicInRequest(name, gender, speciality, crm, cpf, adress, navigate));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <header>
          <img src={Rectangle} alt="" />
          <h2>Cadastro</h2>
        </header>
        <span>Médico</span>
        <Forms>
          <Form schema={schema} onSubmit={handleSubmit}>
            <InputWrapper size="double">
              <strong>Nome</strong>
              <Input name="name" placeholder="Digite seu nome..." />
            </InputWrapper>
            <InputWrapper>
              <strong>Especialidade Médica</strong>
              <Input name="speciality" placeholder="Ex: Neurucirurgião..." />
            </InputWrapper>
            <InputWrapper>
              <strong>Gênero</strong>
              <Select
                name="gender"
                placeholder="Escolha"
                options={[{ title: 'Masculino', value: 'Masculino' }, { title: 'Feminino', value: 'Feminino' }]}
              />
            </InputWrapper>
            <InputWrapper>
              <strong>CRM</strong>
              <Input name="crm" placeholder="Digite seu CRM..." />
            </InputWrapper>
            <InputWrapper>
              <strong>CPF</strong>
              <Input name="cpf" placeholder="Digite seu CPF" />
            </InputWrapper>
            <InputWrapper size="double">
              <strong>Endereço</strong>
              <Input name="adress" placeholder="Digite seu endereço..." />
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
