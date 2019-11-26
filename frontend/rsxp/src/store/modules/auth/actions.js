export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, senha }
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCESS',
    payload: { token, user }
  };
}

export function signUpRequest(nome, username, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
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
    }
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  };
}