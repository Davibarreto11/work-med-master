export function registerMedicInRequest(name, gender, speciality, crm, cpf, adress, navigate) {
  return {
    type: '@medic/REGISTERMEDIC_IN_REQUEST',
    payload: {
      name, gender, speciality, crm, cpf, adress, navigate,
    },
  };
}

export function registerMedicInSuccess(doctor) {
  return {
    type: '@medic/REGISTERMEDIC_IN_SUCCESS',
    payload: { doctor },
  };
}

export function updateMedicRequest(id, data, navigate) {
  return {
    type: '@medic/UPDATE_MEDIC_REQUEST',
    payload: {
      id,
      data,
      navigate,
    },
  };
}

export function updateMedicSuccess(doctor) {
  return {
    type: '@medic/UPDATE_MEDIC_SUCCESS',
    payload: { doctor },
  };
}

export function updateMedicFailure() {
  return {
    type: '@medic/UPDATE_MEDIC_REQUEST',
  };
}

export function removeMedic(id) {
  return {
    type: '@medic/REMOVE_MEDIC',
    payload: {
      id,
    },
  };
}

export function removeFailure() {
  return {
    type: '@medic/REMOVE_MEDIC',
  };
}

export function registerFailure() {
  return {
    type: '@medic/REGISTER_FAILURE',
  };
}
