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

            <div className='cabe2'>
                <img src="/images/logotipo.png" alt="Logotipo da Aliança Traduções"/>

                <div className='quemsomos'>
                    <Link to="/QuemSomos">QUEM SOMOS</Link>
                    <Link to="/Equipe">EQUIPE</Link>
                    <Link to="/Clientes">CLIENTES</Link>
                    <Link to="/Jornada">JORNADA DA ALIANÇA TRADUÇÕES</Link>
                    <Link to="/Politicas">POLÍTICAS DE SEGURANÇA</Link>
                    <Link to="/Depoimentos">DEPOIMENTOS</Link>
                </div>
                <div className='servicos'>
                    <Link to="/Traducao">TRADUÇÃO</Link>
                    <div className='Traducao'>
                        <Link to="/TradJuramentada">TRADUÇÃO JURAMENTADA</Link>
                        <Link to="/TradLivre">TRADUÇÃO LIVRE</Link>
                        <Link to="/TradJurídica">TRADUÇÃO JURÍDICA</Link>
                        <Link to="/TradTecnica">TRADUÇÃO TÉCNICA</Link>
                        <Link to="/TradWebSite">TRADUÇÃO DE WEB SITE</Link>
                        <Link to="/TradTranscriacao">TRADUÇÃO CRIATIVA (TRANSCRIAÇÃO)</Link>
                        <Link to="/TradBraille">TRADUÇÃO EM BRAILLE</Link>
                        <Link to="/TradLocalizacao">TRADUÇÃO DE LOCALIZAÇÃO</Link>
                    </div>
                    <Link to="/Interpretacao">INTERPRETAÇÃO</Link>
                    <div className='Interpretacao'>
                        <Link to="/IntSimultanea">INTERPRETAÇÃO SIMULTÂNEA</Link>
                        <Link to="/IntConsecutiva">INTERPRETAÇÃO CONSECUTIVA</Link>
                        <Link to="/IntLibras">INTERPRETAÇÃO EM LIBRAS</Link>
                        <Link to="/IntRemota">INTERPRETAÇÃO REMOTA</Link>
                    </div>
                    <Link to="/Outros">OUTROS</Link>
                    <div className='Outros'>
                        <Link to="/ApostHaia">APOSTILA DE HAIA</Link>
                        <Link to="/DiagDocumentos">DIAGRAMAÇÃO DE DOCUMENTOS</Link>
                        <Link to="/GestaoProj">GESTÃO DE PROJETOS</Link>
                        <Link to="/RevDocs">REVISÃO DE DOCUMENTOS</Link>
                    </div>
                </div>
                <div className='conteudo'>

                </div>
            </div>
        </>
    )
}