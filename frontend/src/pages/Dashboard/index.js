import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import 'chart.js/auto';
import { BarChart } from './chartjs/Bar';
import { LineChart } from './chartjs/Line';
import { WeatherChart } from './chartjs/WeatherChart';
import { DoughnutTotalSurgeriesChart } from './chartjs/DoughnutTotalSurgeries';
import { DoughnutDoctorChart } from './chartjs/DoughnutDoctors';
import { DoughnutConvenio } from './chartjs/DoughnutConvenio';
import { DoughnutProcedureChart } from './chartjs/DoughnutProcedure';
// import { UserData } from './chartjs/Data';
import api from '../../services/api';

import Day from '../../assets/day.svg';
// import Ellipse from '../../assets/EllipseVerde.svg';
import Filter from '../../assets/filter.svg';
import FilterAzul from '../../assets/filterAzul.svg';

import DefaultLayout from '../_layouts/default';
import Barside from '../../components/Barside';
import Avatar from '../../assets/avatar.jpg';
import Retangule from '../../assets/retacgulePrincipal.svg';

import {
  Container, Top, FlexBox, UniqGrafic, Box, BoxWeather, SurgeriesMonth,
  SurgeriesProcedures,
} from './styles';

function Dashboard() {
  const name = useSelector(((state) => state.user.profile.name));
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get('doctors')
      .then((response) => { setDoctors(response.data); })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DefaultLayout>
      <Barside />
      <Container>
        <Top>
          <div>
            <header>
              <img src={Retangule} alt="" />
              <h5>Dashboard</h5>
            </header>
            <p>Seja bem vindo, {name}!</p>
          </div>
          <Link to="/profile">
            <p>{name}</p>
            <img src={Avatar} alt="Avatar" />
          </Link>
        </Top>
        <FlexBox>
          {doctors.map((doctor) => (
            <Box key={doctor.id}>
              <div className="top">
                <div>
                  <h5 style={{ color: '#FF7723' }}>Médicos</h5>
                </div>
                <div>
                  <select style={{ backgroundImage: `url(${Filter})` }}>
                    <option>{doctor.name}</option>
                  </select>
                </div>
              </div>
              <div className="bot">
                <div>
                  <h4>{doctor.name}</h4>
                  <p>Total de Cirurgias</p>
                </div>
                <div>
                  <DoughnutDoctorChart />
                </div>
              </div>
            </Box>
          ))}

          <Box>
            <div className="top">
              <div>
                <h5 style={{ color: '#308ECC' }}>Convênio</h5>
              </div>
              <div>
                <select style={{ backgroundImage: `url(${FilterAzul})` }}>
                  <option>SUS</option>
                </select>
              </div>
            </div>
            <div className="bot">
              <div>
                <h4>Selecione o Convenio</h4>
                <p>Total de Cirurgias</p>
              </div>
              <div>
                <DoughnutConvenio />
              </div>
            </div>
          </Box>

          <BoxWeather>
            <div className="top">
              <div>
                <h5 style={{ color: '#27AE60' }}>Juazeiro do Norte</h5>
              </div>
              <div>
                <WeatherChart />
              </div>
            </div>
            <div className="bot">
              <div>
                <h4><span style={{ color: '#27AE60' }}>0</span> Cirurgias</h4>
                <p>Registradas Hoje</p>
              </div>
              <div>
                <img src={Day} alt="Time" />
              </div>
            </div>
          </BoxWeather>
        </FlexBox>

        <FlexBox>
          <SurgeriesMonth>
            <h5>Cirurgias Realizadas</h5>
            <p>Total de Cirurgias</p>
            <div className="graficMonths">
              <div>
                <BarChart />
              </div>
              <div className="grafictotalSurgery">
                <h4>Total Realizado</h4>
                <DoughnutTotalSurgeriesChart />
                <p>10</p>
              </div>
            </div>
          </SurgeriesMonth>
          <SurgeriesProcedures>
            <div>
              <h5>Procedimentos</h5>
              <p>Total de Cirurgias</p>
            </div>
            <div>
              <DoughnutProcedureChart />
            </div>
          </SurgeriesProcedures>
        </FlexBox>

        <UniqGrafic>
          <div className="top">
            <div className="card-body">
              <h5>Gastos Totais</h5>
              <p>Com Cirurgias</p>
            </div>
            <div className="">
              <h4>R<span style={{ color: '#16A085' }}>$:</span> 5555,<span style={{ color: '#16A085' }}>00</span></h4>
            </div>
          </div>
          <div>
            <LineChart />
          </div>
        </UniqGrafic>
      </Container>
    </DefaultLayout>

  );
}

export default Dashboard;
