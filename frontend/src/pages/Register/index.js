import React, { useState } from 'react';

import {
    Container,
    ContainerCadastro,
    Tabs,
    TabEstudante,
    TabEstudanteText,
    TabEmpresa,
    TabEmpresaText,
    Formulario,
    Info,
    SubmitLogin,
    CriarConta,
} from './styles';

export default function Register({ history }) {
    const [tabEstudanteAtiva, setTabEstudanteAtiva] = useState(true);
    const [tabEmpresaAtiva, setTabEmpresaAtiva] = useState(false);

    function cadastrar() {
        history.push("/cursos");
    }

    function irParaLogin() {
        history.push("/login");
    }

    function habilitaTabEstudante() {
        setTabEstudanteAtiva(true);
        setTabEmpresaAtiva(false);
    }

    function habilitaTabEmpresa() {
        setTabEstudanteAtiva(false);
        setTabEmpresaAtiva(true);
    }

    return (
        <Container>
            <ContainerCadastro>
                <Tabs>
                    <TabEstudante background={tabEstudanteAtiva} onClick={habilitaTabEstudante}>
                        <TabEstudanteText color={tabEstudanteAtiva}>Estudante</TabEstudanteText>
                    </TabEstudante>
                    <TabEmpresa background={tabEmpresaAtiva} onClick={habilitaTabEmpresa}>
                        <TabEmpresaText color={tabEmpresaAtiva}>Empresa</TabEmpresaText>
                    </TabEmpresa>
                </Tabs>
                {tabEstudanteAtiva && (
                    <Formulario>
                        <h1>Cadastro de estudante</h1>
                        <Info>
                            <label>Nome</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Sobrenome</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Data de nascimento</label>
                            <input type="date" />
                        </Info>
                        <Info>
                            <label>CPF</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>CEP</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Telefone</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Celular</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Cidade</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Estado</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Endereço</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>E-mail</label>
                            <input type="email" />
                        </Info>
                        <Info>
                            <label>Senha</label>
                            <input type="text" />
                        </Info>
                        <SubmitLogin type="submit" onClick={cadastrar}>Cadastrar-se</SubmitLogin>
                    </Formulario>
                )}

                {tabEmpresaAtiva && (
                    <Formulario>
                        <h1>Cadastro de empresa</h1>
                        <Info>
                            <label>Nome</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>CNPJ</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>CEP</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Telefone</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Celular</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Cidade</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Estado</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>Endereço</label>
                            <input type="text" />
                        </Info>
                        <Info>
                            <label>E-mail</label>
                            <input type="email" />
                        </Info>
                        <Info>
                            <label>Senha</label>
                            <input type="text" />
                        </Info>
                        <SubmitLogin type="submit" onClick={cadastrar}>Cadastrar-se</SubmitLogin>
                    </Formulario>
                )}
            </ContainerCadastro>

            <CriarConta onClick={irParaLogin}>Ja possuo conta</CriarConta>
        </Container>
    );
};