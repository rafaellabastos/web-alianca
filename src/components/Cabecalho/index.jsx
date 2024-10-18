import React from 'react';
import './index.css';

export default function Cabecalho() {
    return (
        <>
            <div className='cabe1'>
                <div className='cabe1-infos'>
                    <div className='cabe1-telefone'>
                        <img src="/images/telefone.png" alt="Telefone" />
                        <p>+55 (11) 3384-8550</p>
                    </div>

                    <div className='cabe1-email'>
                        <img src="/images/email.png" alt="Email" />
                        <p>atendimento@aliancatraducoes.com.br</p>
                    </div>
                </div>

                <div className='cabe1-links'>

                </div>
            </div>
        </>
    )
}