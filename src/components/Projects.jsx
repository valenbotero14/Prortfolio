// Importa el componente `Link` de `react-router-dom` para navegar entre páginas sin recargar la página.
import { Link } from 'react-router-dom'

// Importa los datos de los proyectos desde un archivo local (`data.js` o similar).
import { projects } from '../data'

// Importa una imagen (una flecha) desde la carpeta de assets para usarla en los botones.
import arrow from '../assets/svg/arrow.svg'

// Importa el componente `Footer`, que se mostrará al final de la página.
import Footer from './Footer'

// Importa el componente `Fade` de `react-awesome-reveal` para aplicar efectos de desvanecimiento a los elementos.
import { Fade } from 'react-awesome-reveal'

// Define el componente `Products`, que muestra una lista de proyectos.
const Products = () => {
  return (
    // Sección que contiene todos los proyectos.
    <section className="max-sm:mx-4">
      {/* Contenedor principal de los proyectos con un borde superior y algo de espaciado */}
      <div className="mt-10 pb-14 border-t pt-10 border-t-gray-600">
        {/* Efecto de desvanecimiento en el título de la sección */}
        <Fade direction="up" delay="20" triggerOnce={true}>
          {/* Título de la sección */}
          <h3 className="font-medium mb-14 text-[20px] font-serif">Mis Proyectos</h3>
        </Fade>

        {/* Grid que muestra los proyectos de manera responsiva */}
        <div className="grid grid-cols-2 gap-3">
          {/* Mapea cada proyecto de la lista `projects` y genera una tarjeta para cada uno */}
          {projects.map((project) => (
            // Efecto de desvanecimiento en cada tarjeta de proyecto
            <Fade direction="up" delay="40" triggerOnce={true} key={project.id}>
              {/* Contenedor de cada tarjeta de proyecto con efectos hover */}
              <div className="bg-[#343639] p-2 rounded-xl hover:scale-105 ease-in-out duration-300 relative card max-sm:w-[160px]">
                {/* Link que lleva a la página del proyecto individual */}
                <Link to={`/projects/${project.name}`}>
                  {/* Contenedor del icono de flecha, inicialmente oculto */}
                  <div className="card-icon opacity-0">
                    {/* Imagen de la flecha en la tarjeta */}
                    <img src={arrow} alt="" className="absolute right-2 top-1" />
                  </div>
                  {/* Categoría del proyecto */}
                  <span
                    className="border border-gray-600 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-[#212224]"
                  >
                    {project.category}
                  </span>
                  {/* Título del proyecto */}
                  <div className="my-4">
                    <h3 className="text-sm font-semibold">{project.title}</h3>
                  </div>
                  {/* Imagen del proyecto */}
                  <img
                    src={project.image1}
                    alt={project.title}
                    title={project.title}
                    className="rounded-lg h-32 w-full object-cover max-sm:h-20"
                  />
                </Link>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      {/* Enlaces adicionales (Certificados y Insignias) */}
      <div className="flex space-x-4">
        {/* Enlace para los certificados */}
        <Link
          to="https://drive.google.com/drive/u/0/folders/1KzS3HnXKfmnEUpic2mvKahpuQXOpmr8-"
          className="flex bg-[#343639] w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:w-full max-sm:justify-center"
        >
          <p>Certificados</p>
          <img src={arrow} className="ml-2 h-3" />
        </Link>

        {/* Enlace para las insignias */}
        <Link
          to="https://www.credly.com/users/valentina-velasquez-botero"
          className="flex bg-[#343639] w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:w-full max-sm:justify-center"
        >
          <p>Insignias</p>
          <img src={arrow} className="ml-2 h-3" />
        </Link>
      </div>

      {/* Componente de pie de página */}
      <Footer />
    </section>
  )
}

// Exporta el componente `Products` para ser utilizado en otras partes de la aplicación.
export default Products
