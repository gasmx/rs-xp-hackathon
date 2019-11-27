import React, { useState } from 'react';
import HeaderComponent from '../../components/Header';
import {
    Container,
    TitleVagasCadastro,
    CadastroSection,
    ContentCadastro,
    Card,
    PrerequisiteImage,
    ContentBotoes,
    BotaoNovo,
    BotaoVaga,
    ContainerVagaDetalhe,
    DetalheVaga,
    Candidatos,
    ListaCandidatos,
    ContainerCandidatoItem,
    ContainerCandidatoItemInfo,
    BotaoMatch
} from './styles';

import Modal from 'react-modal';

import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.png';
import jsIcon from '../../assets/icons/js.png';
import logicaIcon from '../../assets/icons/logica.png';

const VagasCadastro = () => {
    const vagaPadrao = {
        name: 'Trainee',
        description: 'Anim sint laboris eu elit dolore do pariatur excepteur enim dolore ullamco do pariatur. Minim occaecat quis elit veniam deserunt laboris nostrud sunt veniam aliqua voluptate occaecat irure.',
        company_name: 'Rocketseat',
        period: 'Manhã',
        button_text: "Ver candidatos",
        button_color: "#34556",
        candidate_quantity: 1,
        candidates: [
            {
                name: 'Caroline Ribeiro',
                age: 16
            }
        ],
        prerequisites: [{
            icon: logicaIcon,
            title: 'Lógica de programação'
        }]
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [vagaSelecionada, setVagaSelecionada] = useState(vagaPadrao);

    const modalStyles = {
        content : {
            width                 : '70%',
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    };

    const vagas = [
        vagaPadrao,
        {
            name: 'Desenvolvedor frontend júnior',
            description: 'Anim sint laboris eu elit dolore do pariatur excepteur enim dolore ullamco do pariatur. Minim occaecat quis elit veniam deserunt laboris nostrud sunt veniam aliqua voluptate occaecat irure.',
            company_name: 'Rocketseat',
            period: 'Manhã',
            button_text: "Aberta",
            button_color: "#34556",
            candidate_quantity: 3,
            candidates: [
                {
                    name: 'Caroline Ribeiro',
                    age: 16
                },
                {
                    name: 'Gabriel Cruvinel',
                    age: 17
                },
                {
                    name: 'Alexandre Moraes',
                    age: 16
                }
            ],
            prerequisites: [
                {
                    icon: htmlIcon,
                    title: 'HTML5'
                },
                {
                    icon: cssIcon,
                    title: 'CSS3'
                },
                {
                    icon: jsIcon,
                    title: 'JavaScript'
                }
            ]
        },
        {
            name: 'Desenvolvedor backend júnior',
            description: 'Anim sint laboris eu elit dolore do pariatur excepteur enim dolore ullamco do pariatur. Minim occaecat quis elit veniam deserunt laboris nostrud sunt veniam aliqua voluptate occaecat irure.',
            company_name: 'Rocketseat',
            period: 'Manhã',
            button_text: "Aberta",
            button_color: "#34556",
            candidate_quantity: 0,
            candidates: [],
            prerequisites: [
                {
                    icon: logicaIcon,
                    title: 'Lógica de programação'
                },
                {
                    icon: jsIcon,
                    title: 'JavaScript'
                }
            ]
        }
    ];

    function openModal(vaga) {
        setVagaSelecionada(vaga)

        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Vaga"
            >
                <h3>{ vagaSelecionada.name }</h3>

                <hr />

                <ContainerVagaDetalhe>
                    <DetalheVaga>
                        <form>
                            <div class="form-group">
                                <label><b>Descrição</b></label>
                                <label>{ vagaSelecionada.description }</label>
                            </div>
                            <div class="form-group">
                                <label><b>Período</b></label>
                                <label>{ vagaSelecionada.period }</label>
                            </div>
                            <div class="form-group">
                                <label><b>Pre requisitos</b></label>
                                <br/>
                                <label>
                                    {vagaSelecionada.prerequisites.map(pr => (
                                        <PrerequisiteImage src={pr.icon} title={pr.title} alt={pr.title}/>
                                    ))}
                                </label>
                            </div>
                        </form>
                    </DetalheVaga>
                    <Candidatos>
                        <h5>Lista de candidatos</h5>

                        <ListaCandidatos class="list-group">
                            {vagaSelecionada.candidates.map(c => (
                                <li class="list-group-item">
                                    <ContainerCandidatoItem>
                                        <ContainerCandidatoItemInfo class="form-group">
                                            <label><b>Nome</b></label><br/>
                                            <label>{ c.name }</label>
                                        </ContainerCandidatoItemInfo>
                                        <ContainerCandidatoItemInfo class="form-group">
                                            <label><b>Idade</b></label><br/>
                                            <label>{ c.age }</label>
                                        </ContainerCandidatoItemInfo>
                                        <div style={{ width: '100%' }}>
                                            <BotaoMatch className="btn btn-sm btn-success">
                                                Match!
                                            </BotaoMatch>
                                        </div>
                                    </ContainerCandidatoItem>
                                </li>
                            ))}
                        </ListaCandidatos>
                    </Candidatos>
                </ContainerVagaDetalhe>
                
                <button className="btn btn-sm btn-secondary" onClick={closeModal}>Voltar</button>
            </Modal>

            <HeaderComponent />

            <Container>
                <TitleVagasCadastro>
                    Vagas da sua empresa
                </TitleVagasCadastro>
                <ContentBotoes>
                    <BotaoNovo className="btn btn-primary">
                        Abrir nova vaga
                    </BotaoNovo>
                </ContentBotoes>
                <hr/>
                <CadastroSection>
                    <ContentCadastro>
                        {vagas.map(v => (
                            <Card>
                                <h5 class="card-title">{v.name}</h5>

                                <h6 class="card-subtitle mb-2 text-muted">
                                    {v.candidate_quantity > 0 ? v.candidate_quantity + ' candidato(s)' : 'Nenhum candidato ainda.'}
                                </h6>

                                <p class="card-text">{v.description}</p>

                                <hr />

                                <h6 class="card-subtitle mb-2 text-muted">
                                    Pré requisitos
                                </h6>

                                {v.prerequisites.map(pr => (
                                   <PrerequisiteImage src={pr.icon} title={pr.title} alt={pr.title}/>
                                ))}

                                {v.candidate_quantity > 0 &&
                                    <BotaoVaga onClick={() => openModal(v)} className="btn btn-sm btn-outline-primary">
                                        Ver candidatos
                                    </BotaoVaga>
                                }

                                <BotaoVaga className="btn btn-sm btn-outline-danger">
                                    Cancelar vaga
                                </BotaoVaga>
                            </Card>
                        ))}
                    </ContentCadastro>
                </CadastroSection>
            </Container>
        </>
    );
};

export default VagasCadastro;