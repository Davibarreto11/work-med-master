import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../../services/api';

import {
  registerPatientInSuccess,
  registerFailure,
  removeFailure,
  updatePatientSuccess,
  updatePatientFailure,
} from './actions';

export function* registerPatient({ payload }) {
  try {
    const { navigate } = payload;

    const response = yield call(api.post, 'patients', payload.formData);

    const { token, patient } = response.data;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield put(registerPatientInSuccess(token, patient));

    navigate('/list/patient');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados');
    yield put(registerFailure());
  }
}

export function* updatePatient({ payload }) {
  try {
    const {
      id, data, navigate,
    } = payload;

    const patient = data;

    const response = yield call(api.put, `patients/${id}`, patient);

    toast.success('Paciente atualizado com sucesso!');

    yield put(updatePatientSuccess(response.data));

    console.log(response.data);

    navigate('/list/patient');
  } catch (err) {
    toast.error('Erro a atualizar paciente, verifique seus dados!');
    yield put(updatePatientFailure);
  }
}

export function* removePatient({
  payload,
}) {
  try {
    const { id } = payload;

    toast.success('Excluído com Sucesso');
    yield call(api.delete, `patients/${id}`);
  } catch (err) {
    toast.error('Item já excluído');
    yield put(removeFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@register/REGISTERPATIENT_IN_REQUEST', registerPatient),
  takeLatest('@remove/REMOVE_PATIENT', removePatient),
  takeLatest('@patient/UPDATE_PATIENT_REQUEST', updatePatient),
]);
