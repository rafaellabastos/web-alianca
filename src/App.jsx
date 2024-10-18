import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

import Faq from './routes/Faq'
import TrabConosco from './routes/TrabConosco';
import Contato from './routes/Contato';

import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Cabecalho/>
        <Outlet/>
      <Rodape/>
    </>
  );
}
