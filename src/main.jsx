import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//Rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Erro404 />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

