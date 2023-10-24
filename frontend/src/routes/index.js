import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateSigned from './PrivateSigned';
import PrivateUnsigned from './PrivateUnsigned';

import Signin from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import RegisterSurgery from '../pages/Register/RegisterSurgery';
import RegisterRoom from '../pages/Register/RegisterRoom';
import RegisterPatient from '../pages/Register/RegisterPatient';
import RegisterDoctor from '../pages/Register/RegisterMedic';
import List from '../pages/List';
import { ListMedic } from '../pages/List/ListMedic';
import { ListPatient } from '../pages/List/ListPatient';
import { ListRoom } from '../pages/List/ListRoom';
import { ListSurgery } from '../pages/List/ListSurgery';
import UpdateMedic from '../pages/Update/UpdateMedic';
import { UpdatePatient } from '../pages/Update/UpdatePatient';
import { UpdateRoom } from '../pages/Update/UpdateRoom';
import { UpdateSurgery } from '../pages/Update/UpdateSurgery';

function Router() {
  return (
    <Routes>
      <Route element={<PrivateSigned />}>
        <Route path="/" exact element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route element={<PrivateUnsigned />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/surgery" element={<RegisterSurgery />} />
        <Route path="/register/doctor" element={<RegisterDoctor />} />
        <Route path="/register/patient" element={<RegisterPatient />} />
        <Route path="/register/room" element={<RegisterRoom />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/doctor" element={<ListMedic />} />
        <Route path="/list/patient" element={<ListPatient />} />
        <Route path="/list/room" element={<ListRoom />} />
        <Route path="/list/surgery" element={<ListSurgery />} />
        <Route path="/update/doctor/:id" element={<UpdateMedic />} />
        <Route path="/update/patient/:id" element={<UpdatePatient />} />
        <Route path="/update/room/:id" element={<UpdateRoom />} />
        <Route path="/update/surgery/:id" element={<UpdateSurgery />} />

      </Route>
    </Routes>
  );
}

export default Router;
