import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";
import api from '../services/api';
import styled from 'styled-components';
import { shade } from 'polished';
import alerta from '../utils/alertas';

import { 
    getLogin,
    //setApartamentoAtual,
} from '../utils/utils-context';

export default function Servicos() {

    const { id }  = useParams();
    const [login] = useState(getLogin());
    const history = useHistory();
    const [ apartamentos, setApartamentos] = useState([]);
    const [ apartamento, setApartamento] = useState(null);

    var TIMER;

    useEffect(() => {

        if (login == null) history.push({ pathname: `/${id}` });

        onTimer();

        let mounted = true;

        TIMER = setInterval(function(){
            if (!mounted) return;
            onTimer();
        }, 10000);

        return function cleanup() {
            
            mounted = false;

            setTimeout(() => {
                clearInterval(TIMER);
                TIMER = null;
            }, 1000);

        }

    },[]);

    const onTimer = () => {
        console.log("ATUALIZANDO!");
        api.get(`/api/rooms/${login.uuid}`).then(response => {
            setApartamentos(response.data);
        });
    }

    const onVoltarClick = () => {
        if (apartamento) {
            setApartamento(null);
            onTimer();
            return;
        }
        history.push({ pathname: `/menu/${id}` });     
    }

    const onApartamentoClick = (ap) => {
        setApartamento(ap);
    }

    const onMudaStatusClick = (opcao) => {
        
        function mudaStatus(opcao) {
            api.post(`/api/suite/status/${login.uuid}/${apartamento.id}/${opcao.id}`).then(response => {
                setApartamento(null);
                console.log(response.data);
                onTimer();
            });
        }

        console.log(apartamento);

        if (!opcao.mensagem) {
            mudaStatus(opcao);
            return;
        }

        alerta({ 
            title: 'Atenção!',
            message: opcao.mensagem,
            onYes: () => { 
                mudaStatus(opcao);
            }
        });


    }

    function AtualizaStatusSuite() {

        const status = {
            'L': [
                { 'id': 'Z', 'descricao': 'Limpeza', mensagem: 'Confirma colocar o apartamento em limpeza?' }, 
                { 'id': 'M', 'descricao': 'Manutenção', mensagem: 'Confirma colocar o apartamento em manutenção?' }, 
                { 'id': 'B', 'descricao': 'Bloqueada', mensagem: 'Confirma bloquear o apartamento?' }, 
                { 'id': 'I', 'descricao': 'Interditada', mensagem: 'Confirma interditar o apartamento?' }, 
            ],
            'O': [ { 'id': 'L', 'descricao': 'Livre', mensagem: null  }, ],
            'P': [ { 'id': 'L', 'descricao': 'Livre', mensagem: 'Confirma liberar o apartamento da limpeza?'  }, ],
            'Z': [ { 'id': 'L', 'descricao': 'Livre', mensagem: 'Confirma liberar o apartamento da limpeza?'  }, ],
            'B': [ { 'id': 'L', 'descricao': 'Livre', mensagem: 'Confirma liberar o bloqueio do apartamento?'  }, ],
            'M': [ { 'id': 'L', 'descricao': 'Livre', mensagem: 'Confirma tirar o apartamento da manutenção?'  }, ],
            'V': [ { 'id': 'Z', 'descricao': 'Limpeza', mensagem: 'Confirma encerrar a vistoria do apartamento?' }, ], 
            'S': [ { 'id': 'L', 'descricao': 'Livre', mensagem: 'Confirma encerrar a supervisão do apartamento?' }, ],
            'I': [ { 'id': 'L', 'descricao': 'Livre', mensagem: 'Confirma liberar a interdição do apartamento?'  }, ],
            'D': [ { 'id': 'O', 'descricao': 'Ocupado', mensagem: 'Confirma encerrar a arrumação simples do apartamento?' }, ],
            'C': [ { 'id': 'O', 'descricao': 'Ocupado', mensagem: 'Confirma encerrar a arrumação completa do apartamento?' }, ],
        };

        const opcoes = status[apartamento.SitAtual];

        return (
            <Container>
                {
                    opcoes.map((opcao, i) => {
                        return (
                            <CardContainer key={opcao.id}>
                                <a href="#" 
                                    onClick={
                                       () => { onMudaStatusClick(opcao) }
                                    } className="requests">
                                    {opcao.descricao}
                                </a>
                            </CardContainer>
                        );
                    })
                }
            </Container>
        );
      
    }

    function Apartamentos() {

        function getCorSituacao(ap) {
/*
            if (ap.id === '101') ap.SitAtual = 'L';
            if (ap.id === '103') ap.SitAtual = 'O';
            if (ap.id === '104') ap.SitAtual = 'P';
            if (ap.id === '105') ap.SitAtual = 'Z';
            if (ap.id === '106') ap.SitAtual = 'B';
            if (ap.id === '107') ap.SitAtual = 'M';
            if (ap.id === '108') ap.SitAtual = 'V';
            if (ap.id === '109') ap.SitAtual = 'S';
            if (ap.id === '110') ap.SitAtual = 'I';
            if (ap.id === '111') ap.SitAtual = 'D';
            if (ap.id === '112') ap.SitAtual = 'C';
*/
            switch (ap.SitAtual) {
                case 'L':
                    return "botao-apartamento-livre";
                case 'O':
                    return "botao-apartamento-ocupado";
                case 'P':
                    return "botao-apartamento-pagamento";
                case 'Z':
                    return "botao-apartamento-limpeza";
                case 'B':
                    return "botao-apartamento-bloqueado";
                case 'M':
                    return "botao-apartamento-manutencao";
                case 'V':
                    return "botao-apartamento-vistoria";
                case 'S':
                    return "botao-apartamento-supervisao";
                case 'I':
                    return "botao-apartamento-interditado";
                case 'D':
                    return "botao-apartamento-limpeza-simples";
                case 'C':
                    return "botao-apartamento-limpeza-completa";
                default:
                    return "botao-apartamento-ocupado";
            }
        }

        return (
            <Apartamento>
                {
                    apartamentos.map((ap, i) => {
                            return (
                                <a className={getCorSituacao(ap)}
                                    key={i}
                                    href="#" 
                                    onClick={ () => onApartamentoClick(ap) }>{ap.id}
                                    </a> 
                            )
                        }
                    )
                }
            </Apartamento>
        );
    }

    return (
        <div className="rooms">
            <div className="header">
                <div  className="header-content">
                    <Link to="#" onClick={onVoltarClick}>
                        <BsArrowLeftShort type="button" className="seta" />
                    </Link>               
                </div>
                <h1 style={{ fontSize: 22  }}>
                    {
                        ( apartamento && apartamento.SitAtual !== 'O' ) ? 'Suíte ' + apartamento.id : 'Suítes'
                    }
                </h1>
            </div>
            {
              ( apartamento && apartamento.SitAtual !== 'O' ) ? <AtualizaStatusSuite /> : <Apartamentos />
            }            
        </div>
    );
    
}

const Apartamento = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 40px;
  `;


const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  margin-top: 20px;
`;

const CardContainer = styled.div`
    background: #232129;
    border-radius: 5px;
    width: 80%;
    padding: 18px;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: 16px 30px;

    :hover {
        background: ${shade(0.2, '#232129')}
      } 

    a{
      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      color: #fff; 
      font-size: 26px;
    }
`;
