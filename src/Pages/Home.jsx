// Importa el componente `Hero`, que probablemente muestra una sección introductoria o destacada en la página.
import Hero from '../components/Hero'

// Importa el componente `Projects`, que probablemente muestra una lista de proyectos o trabajos realizados.
import Projects from '../components/Projects'

// Define el componente funcional `Home`, que representa la página principal.
const Home = () => {
  // Renderiza el contenido de la página principal, que consiste en los componentes `Hero` y `Projects`.
  return (
    <div>
      {/* Renderiza el componente `Hero` en la parte superior de la página. */}
      <Hero />

      {/* Renderiza el componente `Projects` debajo de `Hero`, mostrando los proyectos disponibles. */}
      <Projects />
    </div>
  )
}

// Exporta el componente `Home` para que pueda ser utilizado en otras partes de la aplicación.
export default Home
