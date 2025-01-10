// Importa React, que es necesario para utilizar JSX y otros elementos de React.
import React from 'react'

// Importa ReactDOM, que se utiliza para renderizar la aplicación React en el DOM.
import ReactDOM from 'react-dom/client'

// Importa el componente principal de la aplicación (`App`), que contiene toda la lógica y estructura del proyecto.
import App from './App.jsx'

// Importa el archivo CSS principal que define los estilos globales de la aplicación.
import './index.css'

// Importa `BrowserRouter` de `react-router-dom`, que permite manejar el enrutamiento en aplicaciones React.
import { BrowserRouter } from 'react-router-dom'

// Crea un punto raíz donde React renderizará la aplicación. Utiliza `ReactDOM.createRoot` para inicializar la aplicación en modo concurrente.
ReactDOM.createRoot(document.getElementById('root')).render(
  // Envuelve la aplicación en `React.StrictMode`, que ayuda a identificar problemas potenciales en el código durante el desarrollo.
  <React.StrictMode>
    {/* Envuelve la aplicación en `BrowserRouter` para habilitar la funcionalidad de enrutamiento en la aplicación React. */}
    <BrowserRouter>
      {/* Renderiza el componente principal de la aplicación. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
