import React from 'react';
import { Link } from 'react-router-dom';

import DefaultLayout from '../_layouts/default';

import Barside from '../../components/Barside';
import {
  Container, Title, Ficture, Item,
} from './styles';

import Image from '../../assets/img.svg';
import ImageDoctor from '../../assets/registerDoctor.svg';
import ImagePatient from '../../assets/registerPatient.svg';
import ImageSurgery from '../../assets/registerSurgery.svg';
import ImageRoom from '../../assets/registerRoom.svg';
import Retangule from '../../assets/retacgulePrincipal.svg';

export default function Register() {
  return (
    <DefaultLayout>
      <Barside />
      <Container>
        <Title>
          <header>
            <img src={Retangule} alt="" />
            <h2>Cadastrar</h2>
          </header>
          <span>Escolha qual item deseja cadastrar</span>
        </Title>
        <Ficture>
          <img src={Image} alt="" />
        </Ficture>
        <Item>
          <form>
            <span>Cadastrar</span>
            <strong style={{ color: '#16A085' }}>Medico</strong>
            <img src={ImageDoctor} alt="" />

            <Link to="/register/doctor"><button style={{ background: '#16A085' }} type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Cadastrar</span>
            <strong style={{ color: '#FF7723' }}>Paciente</strong>
            <img src={ImagePatient} alt="" />

            <Link to="/register/patient"><button style={{ background: '#FF7723' }} type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Cadastrar</span>
            <strong style={{ color: '#308ECC' }}>Sala</strong>
            <img src={ImageRoom} alt="" />

            <Link to="/register/room"><button style={{ background: '#308ECC' }} type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Cadastrar</span>
            <strong style={{ color: '#AC3483' }}>Cirurgia</strong>
            <img src={ImageSurgery} alt="" />

            <Link to="/register/surgery"><button style={{ background: '#AC3483' }} type="submit">Começar</button></Link>
          </form>
        </Item>
      </Container>
    </DefaultLayout>
  );
}
