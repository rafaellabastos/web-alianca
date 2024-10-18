import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//Rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';
import TrabConosco from './routes/TrabConosco.jsx';
import Faq from './routes/Faq.jsx';
import Contato from './routes/Contato.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Erro404 />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/Faq',
        element: <Faq />
      },
      {
        path: 'TrabConosco',
        element: <TrabConosco />
      },
      {
        path: 'Contato',
        element: <Contato />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

