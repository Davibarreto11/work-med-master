import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeMedic } from '../../../store/modules/register/registerMedic/actions';

import Header from '../../../components/Barside';
import DefaultLayout from '../../_layouts/default/index';
import {
  Container, List, Wrapper, Infor, MoreInfor, Part, Grid, Badge, Visible,
} from './styles';

import Edit from '../../../assets/editar.svg';
import Remove from '../../../assets/excluir.svg';

import Rectangle from '../../../assets/rectangleVerde.svg';
import Datail from '../../../assets/detailVerde.svg';

import api from '../../../services/api';

export function ListMedic() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(null);
  const [doctors, setDoctor] = useState([]);
  // const [date, setDate] = useState(new Date());

  // const dateFormatted = useMemo(
  //   () => format(date, "d 'de' MMMM", { locale: pt }),
  //   [date],
  // );

  useEffect(() => {
    async function loadMedic() {
      const response = await api.get('doctors');

      setDoctor(response.data);
    }

    loadMedic();
  }, []);

  const handleToggleVisible = (index) => {
    if (visible === index) {
      return setVisible(null);
    }

    return setVisible(index);
  };

  const handleRemove = (doctor) => {
    dispatch(removeMedic(doctor));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <header>
          <img src={Rectangle} alt="" />
          <h2>Listagem</h2>
        </header>
        <span>Médico</span>
        <Wrapper>
          <Link to="/register/doctor"><button type="button">Cadastrar</button></Link>
          {doctors.map((doctor, i) => (
            <List key={doctor.id}>
              <Badge onClick={() => (Number(visible)
                ? handleToggleVisible(null) : handleToggleVisible(i))}
              >
                <Infor>
                  <li><img src={Datail} alt="detail" /></li>
                  <li>🚀</li>
                  <li>{doctor.name}</li>
                  <li>31/08/2002</li>
                  <li>
                    <Link to={`/update/doctor/${doctor.id}`}><img src={Edit} alt="Edit" /></Link>
                    <button onClick={() => handleRemove(doctor.id)} type="button"><img src={Remove} alt="Remove" /></button>
                  </li>
                </Infor>
              </Badge>
              <Visible visible={visible === i}>
                <MoreInfor>
                  <Grid>
                    <Part size="double">
                      <h3>DADDOS PESSOAIS</h3>
                    </Part>
                    <Part>
                      <strong>NOME</strong>
                      <span>{doctor.name}</span>
                    </Part>
                    <Part>
                      <strong>CPF</strong>
                      <span>{doctor.cpf}</span>
                    </Part>
                    <Part>
                      <strong>NASCIMENTO</strong>
                      <span>Nome</span>
                    </Part>
                    <Part>
                      <strong>ENDEREÇO</strong>
                      <span>{doctor.adress}</span>
                    </Part>
                    <Part>
                      <strong>GÊNERO</strong>
                      <span>{doctor.gender}</span>
                    </Part>
                  </Grid>
                  <Grid>
                    <Part size="double">
                      <h3>ESPECIALIZAÇÃO</h3>
                    </Part>
                    <Part>
                      <strong>CRM</strong>
                      <span>{doctor.crm}</span>
                    </Part>
                    <Part>
                      <strong>ESPECIALIDADE</strong>
                      <span>{doctor.speciality}</span>
                    </Part>
                  </Grid>
                </MoreInfor>
              </Visible>
            </List>
          ))}
        </Wrapper>
      </Container>
    </DefaultLayout>
  );
}
