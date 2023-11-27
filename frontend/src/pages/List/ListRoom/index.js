import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeRoom } from '../../../store/modules/register/registerRoom/actions';

import { format, parseISO  } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Header from '../../../components/Barside';
import DefaultLayout from '../../_layouts/default/index';
import {
  Container, List, Wrapper, Infor, MoreInfor, Part, Grid, Badge, Visible,
} from './styles';

import Edit from '../../../assets/editar.svg';
import Remove from '../../../assets/excluir.svg';
import Rectangle from '../../../assets/rectangleRoom.svg';
import Detail from '../../../assets/detailBlue.svg';
import userb from '../../../assets/userBlue.svg';
import cad from '../../../assets/cadastrar.svg';

import api from '../../../services/api';

export function ListRoom() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(null);
  const [rooms, setRoom] = useState([]);

  useEffect(() => {
    async function loadRoom() {
      const response = await api.get('rooms');

      setRoom(response.data);
    }

    loadRoom();
  }, []);

  const handleToggleVisible = (index) => {
    if (visible === index) {
      return setVisible(null);
    }

    return setVisible(index);
  };

  const handleRemove = (room) => {
    dispatch(removeRoom(room));
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <header>
          <img src={Rectangle} alt="" />
          <h2>Listagem</h2>
        </header>
        <span class="sp">Sala</span>
        <Wrapper>
          <Link to="/register/room"><button type="button">Cadastrar<img src={cad}/></button></Link>
          {rooms.map((room, i) => (
            <List key={room.id}>
              <Badge onClick={() => (Number(visible)
                ? handleToggleVisible(null) : handleToggleVisible(i))}
              >
                <Infor>
                <div class="group">
                  <li><img src={Detail} alt="" /></li>
                  <li><img src={userb} alt="" /></li>
                  <li>{`SALA - ${room.number}`}</li>

                </div>
                  <li>{format(parseISO(room.created_at), "dd' / 'MM' / 'yyyy", {locale: ptBR })}</li>

                  <li>
                    <Link to={`/update/room/${room.id}`}><img src={Edit} alt="Edit" /></Link>
                    <button onClick={() => handleRemove(room.id)} type="button"><img src={Remove} alt="Remove" /></button>
                  </li>
                </Infor>
              </Badge>
              <Visible visible={visible === i}>
                <MoreInfor>
                  <Grid>
                    <Part>
                      <h3>INFORMAÇÕES</h3>
                    </Part>
                    <Part>
                      <strong>NÚMERO</strong>
                      <span>{room.number}</span>
                    </Part>
                    <Part>
                      <strong>LOCALIZAÇÃO</strong>
                      <span>{`Sala ${room.number} no ${room.floor}`}</span>
                    </Part>
                  </Grid>
                  <Grid>
                    <Part>
                      <h3>ESPECIFICAÇÕES</h3>
                    </Part>
                    <Part>
                      <strong>DESCRIÇÃO</strong>
                      <span>{room.name}</span>
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
