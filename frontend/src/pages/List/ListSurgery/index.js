import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeSurgery } from '../../../store/modules/register/registerSurgery/actions';

import { format, parseISO  } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Header from '../../../components/Barside';
import DefaultLayout from '../../_layouts/default/index';
import {
  Container, List, Wrapper, Infor, MoreInfor, Part, Grid, Badge, Visible,
} from './styles';

import Edit from '../../../assets/editar.svg';
import Remove from '../../../assets/excluir.svg';
import Rectangle from '../../../assets/retacgulePrincipal.svg';
import Detail from '../../../assets/detailPink.svg';
import userp from '../../../assets/userPink.svg';
import cad from '../../../assets/cadastrar.svg';

import api from '../../../services/api';

export function ListSurgery() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(null);
  const [surgeries, setSurgery] = useState([]);

  useEffect(() => {
    async function loadSurgery() {
      const response = await api.get('surgeries');

      setSurgery(response.data);
    }

    loadSurgery();
  }, []);

  const handleToggleVisible = (index) => {
    if (visible === index) {
      return setVisible(null);
    }

    return setVisible(index);
  };

  const handleRemove = (surgery) => {
    dispatch(removeSurgery(surgery));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <header>
          <img src={Rectangle} alt="Rectangle" />
          <h2>Listagem</h2>
        </header>
        <span class="sp">Cirurgia</span>
        <Wrapper>
          <Link to="/register/surgery"><button type="button">Cadastrar<img src={cad}/></button></Link>
          {surgeries.map((surgery, i) => (
            <List key={surgery.id}>
              <Badge onClick={() => (Number(visible)
                ? handleToggleVisible(null) : handleToggleVisible(i))}
              >
                <Infor>

                  <div class="group">
                    <li><img src={Detail} alt="Detail" /></li>
                    <li><img src={userp} class="user-l"/></li>
                    <li>{surgery.name}</li>
                  </div>
                  <li>{format(parseISO(surgery.created_at), "dd' / 'MM' / 'yyyy", { locale: ptBR })}</li>

                  <li>
                    <Link to={`/update/surgery/${surgery.id}`}><img src={Edit} alt="Edit" /></Link>
                    <button onClick={() => handleRemove(surgery.id)} type="button"><img src={Remove} alt="Remove" /></button>
                  </li>
                </Infor>
              </Badge>
              <Visible visible={visible === i}>
                <MoreInfor>
                  <Grid>
                    <Part size="double">
                      <h3>Informações</h3>
                    </Part>
                    <Part>
                      <strong>Nome</strong>
                      <span>{surgery.name}</span>
                    </Part>
                  </Grid>
                  <Grid>
                    <Part size="double">
                      <h3>Descrição</h3>
                    </Part>
                    <Part>
                      <strong>Descrição</strong>
                      <span>{surgery.description}</span>
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
