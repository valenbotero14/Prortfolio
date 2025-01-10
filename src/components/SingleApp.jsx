// Importa `useParams` de `react-router-dom` para acceder a los parámetros de la URL, como el nombre del proyecto.
import { useParams } from 'react-router-dom'

// Importa los datos de los proyectos desde un archivo local (`data.js` o similar).
import { projects } from '../data'

// Importa `Link` de `react-router-dom` para crear enlaces dentro de la aplicación sin recargar la página.
import { Link } from 'react-router-dom'

// Importa iconos de `react-icons` para agregar íconos atractivos en los botones.
import { BsArrowLeftShort } from 'react-icons/bs' // Icono de flecha para el botón de "volver".
import Footer from './Footer' // Importa el componente `Footer` que se muestra al final de la página.
import { FiGithub } from 'react-icons/fi' // Icono de GitHub.
import { RiExternalLinkFill } from 'react-icons/ri' // Icono para enlaces externos (por ejemplo, un sitio en vivo).
import { Fade } from 'react-awesome-reveal' // Importa un componente para animar la entrada de elementos con un efecto de desvanecimiento.

const SingleApp = () => {
  // Obtiene el parámetro `name` de la URL, que corresponde al nombre del proyecto seleccionado.
  let { name } = useParams()

  // Busca el proyecto que corresponde al nombre obtenido desde la URL en el arreglo de proyectos.
  let projectSelected = projects.find((project) => project.name === name)

  return (
    <section className="h-full mb-14 max-w-xl">
      {/* Añade una animación de desvanecimiento al enlace de "volver" */}
      <Fade direction="up" triggerOnce={true}>
        {/* Link para volver a la página principal */}
        <Link to="/" className="flex items-center text-[15px] font-medium py-2 return">
          {/* Icono de flecha que apunta hacia atrás */}
          <BsArrowLeftShort className="bg-slate-100 rounded-full text-slate-950 me-2 arrow" />
          Volver
        </Link>
      </Fade>
      <br></br>
      {/* Título del proyecto seleccionado */}
      <h2 className="text-4xl font-bold mb-9 max-sm: font-serif text-center">{projectSelected.title}</h2>

      {/* Descripción o resumen del proyecto */}
      <p className="text-[#fff] text-justify">{projectSelected.resume}</p>

      {/* Botones para ver el código y el proyecto en vivo */}
      <div className="flex justify-around mt-4 mb-10 max-sm:flex-col max-sm:items-center max-sm:py-6">
        {/* Botón para ver el código en GitHub */}
        <a
          target="blank"
          href={projectSelected.url1}
          className="flex justify-center items-center bg-[#343639] mr-3 w-[14rem] my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-3 max-sm:w-[14rem]"
        >
          <FiGithub style={{ fontSize: '1.3rem' }} />
          <p className="ml-3">Ver código</p>
        </a>

        {/* Botón para ver el proyecto en vivo */}
        <a
          target="blank"
          href={projectSelected.url2}
          className="flex justify-center items-center bg-[#343639] mr-3 w-[14rem] my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-0 max-sm:w-[14rem]"
        >
          <RiExternalLinkFill style={{ fontSize: '1.3rem' }} />
          <p className="ml-3">Ver proyecto en vivo</p>
        </a>
      </div>

      {/* Muestra una imagen del proyecto seleccionado */}
      <img
        src={projectSelected.image1}
        alt={projectSelected.title}
        title={projectSelected.title}
        className="rounded-3xl w-full object-cover max-sm:h-52"
      />

      {/* Espacios en blanco (probablemente para separación) */}
      <p className="text-[#fff] my-14"></p>
      <p className="text-[#fff] mt-14"></p>
      <p className="text-[#fff] mt-6 mb-16"></p>

      {/* Componente de pie de página */}

    </section>
  )
}

// Exporta el componente `SingleApp` para ser usado en otras partes de la aplicación.
export default SingleApp
