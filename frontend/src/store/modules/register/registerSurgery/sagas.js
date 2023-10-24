import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../../services/api';

import {
  registerSurgeryInSuccess, registerFailure, removeFailure,
  updateSurgerySuccess, updateSurgeryFailure,
} from './actions';

export function* registerSurgery({ payload }) {
  try {
    const {
      name, description, navigate,
    } = payload;

    const response = yield call(api.post, 'surgeries', {
      name,
      description,
    });

    const { token, surgery } = response.data;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield put(registerSurgeryInSuccess(token, surgery));

    navigate('/list/surgery');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados');
    yield put(registerFailure());
  }
}

export function* updateSurgery({ payload }) {
  try {
    const {
      id, data, navigate,
    } = payload;

    const surgery = data;

    const response = yield call(api.put, `surgeries/${id}`, surgery);

    toast.success('Sala atualizada com sucesso!');

    yield put(updateSurgerySuccess(response.data));

    navigate('/list/surgery');
  } catch (err) {
    toast.error('Erro a atualizar paciente, verifique seus dados!');
    yield put(updateSurgeryFailure);
  }
}

export function* removeSurgery({
  payload,
}) {
  try {
    const { id } = payload;

    toast.success('Excluído com Sucesso');
    yield call(api.delete, `surgeries/${id}`);
  } catch (err) {
    toast.error('Item já excluído');
    yield put(removeFailure);
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
  takeLatest('@register/REGISTERSURGERY_IN_REQUEST', registerSurgery),
  takeLatest('@remove/REMOVE_SURGERY', removeSurgery),
  takeLatest('@surgery/UPDATE_SURGERY_REQUEST', updateSurgery),
]);
