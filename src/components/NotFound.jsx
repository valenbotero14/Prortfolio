// Importa el componente `Link` de `react-router-dom` para navegar entre páginas sin recargar la página.
import { Link } from 'react-router-dom'

// Importa imágenes utilizadas en la página de error.
import img from '../assets/1.png' // Imagen 1 para mostrar en la sección
import paper from '../assets/paper.png' // Imagen del papel para la sección de error
import cero from '../assets/0.png' // Imagen del número 0 para formar "404"
  
// Importa el icono de flecha hacia la izquierda desde `react-icons/bs` para el enlace de regreso a la página de inicio.
import { BsArrowLeftShort } from 'react-icons/bs'

// Importa el componente `Fade` de `react-awesome-reveal` para aplicar un efecto de desvanecimiento a los elementos.
import { Fade } from 'react-awesome-reveal'

// Define el componente `NotFound` que se muestra cuando se accede a una ruta que no existe (error 404).
const NotFound = () => {
  return (
    // Contenedor principal de la página de error
    <div className="text-black max-md:flex max-md:items-center max-md:h-[85vh]">
      {/* Contenedor para los elementos de la izquierda (imágenes) y la derecha (mensaje) */}
      <div className="flex max-md:flex-col">
        {/* Esta sección de imágenes solo es visible en pantallas grandes */}
        <div className="max-md:hidden">
          {/* Imagen rotada y con brillo reducido */}
          <img src={img} className="rotate-12 rounded-2xl ml-8 brightness-75" width={300} />
          {/* Imagen centrada */}
          <img src={img} className="my-20 rounded-2xl brightness-75" width={300} />
          {/* Imagen rotada en la dirección opuesta */}
          <img src={img} className="-rotate-12 rounded-2xl ml-8 brightness-75" width={300} />
        </div>
        
        {/* Contenedor para el texto de error y el enlace de regreso a la página de inicio */}
        <div className="flex flex-col justify-center items-center ml-40 text-center max-md:ml-0">
          {/* Título "404" con la imagen del número 0 rotada */}
          <div className="text-[70px] font-bold flex items-center not-found">
            <span>4</span>
            <img src={cero} className="w-auto h-[70px] rotate-6" />
            <span>4</span>
          </div>

          {/* Texto que describe el error 404 */}
          <Fade direction="up" triggerOnce={true}>
            <span className="not-found-text">
              The page you are looking for doesn't exist or has <br /> been moved. Please go back to
              the homepage.
            </span>
          </Fade>

          {/* Imagen de un papel decorativo */}
          <img
            src={paper}
            className="w-[auto] h-[440px] bg-cover bg-center paper max-md:h-[240px] max-md:my-10"
          />

          {/* Enlace de regreso a la página de inicio con un icono de flecha */}
          <Fade direction="up" triggerOnce={true} delay={500}>
            <Link to="/" className="flex items-center text-[15px] font-medium py-6 return">
              <BsArrowLeftShort className="bg-slate-100 rounded-full text-slate-950 me-2 arrow" />
              <span className="text-slate-50">Back to Home</span>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  )
}

// Exporta el componente `NotFound` para que pueda ser utilizado en otras partes de la aplicación.
export default NotFound
