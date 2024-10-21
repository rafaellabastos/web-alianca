import React from 'react';
import { Link } from 'react-router-dom';
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
                    <nav>
                        <Link to="/Faq">FAQ&nbsp;&nbsp;&nbsp;</Link>
                        <Link to="/TrabConosco">Trabalhe Conosco&nbsp;&nbsp;&nbsp;</Link>
                        <Link to="/Contato">Contato&nbsp;&nbsp;&nbsp;</Link>

                        <img src="/images/pesquisa.png" alt="Pesquisar" />
                    </nav>
                </div>

                <div className='cabe1-redes'>
                    <a href="https://www.linkedin.com/company/aliancatraducoes/" target='_blank'><img src="/images/linkedin.png" alt="Linkedin"/></a>
                    <a href="https://www.instagram.com/aliancatraducoes/" target='_blank'><img src="/images/instagram.png" alt="Instagram"/></a>
                    <a href="https://www.youtube.com/channel/UCezx6MhawV0HB830k9gDYtw?reload=9" target='_blank'><img src="/images/youtube.png" alt="Youtube"/></a>
                </div>
            </div>
        </>
    )
}