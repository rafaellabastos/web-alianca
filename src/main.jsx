import { createBrowserRouter, RouterProvider } from 'react-dom/client'
import Home from './routes/Cabecalho/index'
import Home from './routes/Error/index'
import Home from './routes/Home/index'
import Home from './routes/Rodape/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement
  }
])