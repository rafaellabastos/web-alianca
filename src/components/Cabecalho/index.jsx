import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Cabecalho() {
    const [isMenuQuemSomos, setMenuQuemSomos] = useState(false);
    const [isMenuServicos, setMenuServicos] = useState(false);
    const [isMenuTraducao, setMenuTraducao] = useState(false);
    
    // Menu Quem Somos
    const handleMouseEnterQuemSomos = () => {
        setMenuQuemSomos(true);
    }

    const handleMouseLeaveQuemSomos = () => {
        setMenuQuemSomos(false);
    }

    // Menu Serviços
    const handleMouseEnterServicos = () => {
        setMenuServicos(true);
    }

    const handleMouseLeaveServicos = () => {
        setMenuServicos(false);
    }

    // Menu Tradução
    const handleMouseEnterTraducao = () => {
        setMenuTraducao (true);
    }

    const handleMouseLeaveTraducao = () => {
        setMenuTraducao(false);
    }

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

            <div className='cabe2'>
                <img src="/images/logotipo.png" alt="Logotipo da Aliança Traduções"/>

                <div className='quemSomos' onMouseEnter={handleMouseEnterQuemSomos} onMouseLeave={handleMouseLeaveQuemSomos}>
                    <Link to="/QuemSomos">QUEM SOMOS</Link>
                    {isMenuQuemSomos && (
                        <div className='menuQuemSomos'>
                            <Link to="/Equipe">EQUIPE</Link> <br />
                            <Link to="/Clientes">CLIENTES</Link> <br />
                            <Link to="/Jornada">JORNADA DA ALIANÇA TRADUÇÕES</Link> <br />
                            <Link to="/Politicas">POLÍTICAS DE SEGURANÇA</Link> <br />
                            <Link to="/Depoimentos">DEPOIMENTOS</Link>
                        </div>
                    )}
                </div>

                <div className='servicos' onMouseEnter={handleMouseEnterServicos} onMouseLeave={handleMouseLeaveServicos}>
                    <Link to="Servicos">SERVIÇOS</Link>
                    {isMenuServicos && (
                        <div className='menuServicos'>
                            <Link to="/Traducao" onMouseEnter={handleMouseEnterTraducao} onMouseLeave={handleMouseEnterTraducao}>TRADUÇÃO</Link> <br />
                            {isMenuTraducao && ( 
                                <div className='traducao'>
                                    <Link to="/TradJuramentada"></Link> <br />
                                    <Link to="/TradLivre">TRADUÇÃO LIVRE</Link> <br />
                                    <Link to="/TradJuridica">TRADUÇÃO JURÍDICA</Link> <br />
                                    <Link to="/TradTecnica">TRADUÇÃO TÉCNICA</Link> <br />
                                    <Link to="/TradWebSite">TRADUÇÃO DE WEB SITE</Link> <br />
                                    <Link to="/TradCriativa">TRADUÇÃO CRIATIVA (TRANSCRIAÇÃO)</Link> <br />
                                    <Link to="/TradBraille">TRADUÇÃO DE BRAILLE</Link> <br />
                                    <Link to="/Localizacao">LOCALIZAÇÃO</Link> <br />
                                </div>
                            )}

                            <Link to="Interpretacao">INTERPRETAÇÃO</Link> <br />
                            <Link to="Outros">OUTROS</Link> <br />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}