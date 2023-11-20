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
            <h2>Cadastro</h2>
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

            <Link to="/register/doctor"><button style={{ background: 'linear-gradient(#16A085, #16A0854D)' }} type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Cadastrar</span>
            <strong style={{ color: '#FF7723' }}>Paciente</strong>
            <img src={ImagePatient} alt="" />

            <Link to="/register/patient"><button style={{ background: 'linear-gradient(#FF7723, #FF77234D)' }} type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Cadastrar</span>
            <strong style={{ color: '#308ECC' }}>Sala</strong>
            <img src={ImageRoom} alt="" />

            <Link to="/register/room"><button style={{ background: 'linear-gradient(#308ECC, #308ECC4D)' }} type="submit">Começar</button></Link>
          </form>
          <form>
            <span>Cadastrar</span>
            <strong style={{ color: '#AC3483' }}>Cirurgia</strong>
            <img src={ImageSurgery} alt="" />

            <Link to="/register/surgery"><button style={{ background: 'linear-gradient(#AC3483, #AC34834D)' }} type="submit">Começar</button></Link>
          </form>
        </Item>
      </Container>
    </DefaultLayout>
  );
}
