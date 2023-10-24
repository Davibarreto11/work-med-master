export function registerPatientInRequest(
  formData,
  navigate,
) {
  return {
    type: '@register/REGISTERPATIENT_IN_REQUEST',
    payload: {
      formData,
      navigate,
    },
  };
}

export function registerPatientInSuccess(token, patient) {
  return {
    type: '@register/REGISTERPATIENT_IN_SUCCESS',
    payload: { token, patient },
  };
}

export function removePatient(id) {
  return {
    type: '@remove/REMOVE_PATIENT',
    payload: {
      id,
    },
  };
}

export function updatePatientRequest(id, data, navigate) {
  return {
    type: '@patient/UPDATE_PATIENT_REQUEST',
    payload: {
      id,
      data,
      navigate,
    },
  };
}

export function updatePatientSuccess(patient) {
  return {
    type: '@patient/UPDATE_PATIENT_SUCCESS',
    payload: { patient },
  };
}

export function updatePatientFailure() {
  return {
    type: '@patient/UPDATE_PATIENT_FAILURE',
  };
}

export function removeFailure() {
  return {
    type: '@remove/REMOVE_PATIENT',
  };
}

export function registerFailure() {
  return {
    type: '@register/REGISTER_FAILURE',
  };
}
