import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { email, senha, tipoLogin } = payload;

  try {
    const response = yield call(api.post, 'login', {
      email,
      senha,
      tipoLogin
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `${token}`

    yield put(signInSuccess(token, user));

    history.push('/cursos');

  } catch (e) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  const {
    nome,
    sobrenome,
    data_nascimento,
    cpf,
    cep,
    telefone_fixo,
    telefone_celular,
    cidade,
    estado,
    endereco,
    numero,
    email,
    senha,
  } = payload;

  try {
    yield call(api.post, 'estudante', {
      nome,
      sobrenome,
      data_nascimento,
      cpf,
      cep,
      telefone_fixo,
      telefone_celular,
      cidade,
      estado,
      endereco,
      numero,
      email,
      senha,
    });

    history.push('/cursos');

  } catch (e) {
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);