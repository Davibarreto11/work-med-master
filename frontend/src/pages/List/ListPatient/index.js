import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removePatient } from '../../../store/modules/register/registerPatient/actions';

import { format, parseISO  } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Header from '../../../components/Barside';
import DefaultLayout from '../../_layouts/default/index';
import {
  Container, List, Wrapper, Infor, MoreInfor, Part, Grid, Badge, Visible,
} from './styles';

import Edit from '../../../assets/editar.svg';
import Remove from '../../../assets/excluir.svg';
import Datail from '../../../assets/detailOrange.svg';
import Rectangle from '../../../assets/rectanglePatient.svg';
import userl from '../../../assets/userl.svg';
import cad from '../../../assets/cadastrar.svg';
import api from '../../../services/api';

export function ListPatient() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(null);
  const [patients, setPatient] = useState([]);
  // const [date, setDate] = useState(new Date());

  // const dateFormatted = useMemo(
  //   () => format(date, "d 'de' MMMM", { locale: pt }),
  //   [date],
  // );

  useEffect(() => {
    async function loadMedic() {
      const response = await api.get('patients');

      setPatient(response.data);
    }

    loadMedic();
  }, []);

  const handleToggleVisible = (index) => {
    if (visible === index) {
      return setVisible(null);
    }

    return setVisible(index);
  };

  const handleRemove = (patient) => {
    dispatch(removePatient(patient));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <header>
          <img src={Rectangle} alt="" />
          <h2>Listagem</h2>
        </header>
        <span class="sp">Paciente</span>
        <Wrapper>
          <Link to="/register/patient"><button type="button">Cadastrar<img src={cad}/></button></Link>
          {patients.map((patient, i) => (
            <List key={patient.id}>
              <Badge onClick={() => (Number(visible)
                ? handleToggleVisible(null) : handleToggleVisible(i))}
              >
                <Infor>
                <div class="group">
                  <li><img src={Datail} alt="" /></li>
                  <li><img src={userl} alt="" /></li>
                  <li>{patient.name}</li>
                </div>
                  <li>{format(parseISO(patient.created_at), "dd' / 'MM' / 'yyyy", {locale: ptBR })}</li>
                  <li>
                    <Link to={`/update/patient/${patient.id}`}><img src={Edit} alt="Edit" /></Link>
                    <button onClick={() => handleRemove(patient.id)} type="button"><img src={Remove} alt="Remove" /></button>
                  </li>
                </Infor>
              </Badge>
              <Visible visible={visible === i}>
                <MoreInfor>
                  <Grid>
                    <Part size="double">
                      <h3>DADOS PESSOAIS</h3>
                    </Part>
                    <Part>
                      <strong>NOME</strong>
                      <span>{patient.name}</span>
                    </Part>
                    <Part>
                      <strong>CPF</strong>
                      <span>{patient.cpf}</span>
                    </Part>
                    <Part>
                      <strong>NASCIMENTO</strong>
                      <span>Nome</span>
                    </Part>
                    <Part>
                      <strong>ENDEREÇO</strong>
                      <span>{patient.adress}</span>
                    </Part>
                    <Part>
                      <strong>GÊNERO</strong>
                      <span>{patient.gender}</span>
                    </Part>
                    <Part>
                      <strong>HISTORICO MÉDICO</strong>
                      <span>{patient.medic_history}</span>
                    </Part>
                  </Grid>
                  <Grid>
                    <Part size="double">
                      <h3>PROCEDINENTOS</h3>
                    </Part>
                    <Part>
                      <strong>DATA DA CIRURGIA</strong>
                      <span>{format(parseISO(patient.created_at), "dd' / 'MM' / 'yyyy", {locale: ptBR })}</span>
                    </Part>
                    <Part>
                      <strong>TIPO DA CIRURGIA</strong>
                      <span>{patient.Surgery?.name ? patient.Surgery?.name : 'Cirgurgia fora dos registros'}</span>
                    </Part>
                    <Part>
                      <strong>PÓS OPERATÓRIO</strong>
                      <span>{patient.status_post_operation}</span>
                    </Part>
                    <Part>
                      <strong>SALA</strong>
                      <span>{patient.Room?.floor ? `${patient.Room?.floor} - Sala ${patient.Room?.number}` : 'Sala fora dos registros'}</span>
                    </Part>
                    <Part>
                      <strong>MÉDICO RESPONSÁVEL</strong>
                      <span>{patient.Doctor?.name ? patient.Doctor?.name: 'Médico fora dos registros'}</span>
                    </Part>
                    <Part>
                      <strong>TOTAL GASTO</strong>
                      <span>{patient.expenses}</span>
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
