// Importa `useEffect` de React para realizar efectos secundarios en el componente.
import { useEffect } from 'react'

// Importa componentes de `react-router-dom` necesarios para la navegación y enrutamiento.
import { Routes, Route, useLocation } from 'react-router-dom'

// Importa las páginas y componentes de la aplicación.
import Home from './Pages/Home' // Página principal de la aplicación.
import Projects from './components/Projects' // Componente que muestra una lista de proyectos.
import SingleApp from './components/SingleApp' // Componente que muestra información de un proyecto individual.
import NotFound from './components/NotFound' // Página para rutas no encontradas (404).

// Define el componente principal de la aplicación.
function App() {
  // Obtiene la ubicación actual (pathname) usando el hook `useLocation` de `react-router-dom`.
  const { pathname } = useLocation()

  // Usa `useEffect` para desplazarse automáticamente al inicio de la página
  // cada vez que cambie la ruta (pathname).
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0, // Desplaza hacia la parte superior de la página.
      left: 0, // Sin desplazamiento horizontal.
      behavior: 'instant', // Realiza el desplazamiento sin animación.
    })
  }, [pathname]) // El efecto se ejecuta cuando `pathname` cambia.

  // Renderiza el contenido de la aplicación.
  return (
    <div className="flex flex-col justify-center items-center mt-20 max-sm:mx-6 max-sm:mt-12">
      {/* Define las rutas de la aplicación con `Routes` y `Route`. */}
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<Home />} />

        {/* Ruta para la lista de proyectos */}
        <Route path="/projects" element={<Projects />} />

        {/* Ruta para un proyecto específico, usando un parámetro dinámico (`:name`). */}
        <Route path="/projects/:name" element={<SingleApp />} />

        {/* Ruta de comodín para manejar páginas no encontradas (404). */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

// Exporta el componente para su uso en el resto de la aplicación.
export default App
