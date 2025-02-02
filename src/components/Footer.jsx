// Importa el archivo de la imagen `arrow.svg` que se utiliza para agregar una flecha en los enlaces.
import arrow from '../assets/svg/arrow.svg'

// Importa el componente `Link` de `react-router-dom` para crear enlaces de navegación sin recargar la página.
import { Link } from 'react-router-dom'

// Define el componente `Footer`, que representa el pie de página.
const Footer = () => {
  return (
    // Contenedor principal del pie de página con un borde superior y una fuente serif.
    <div className="border-t border-t-gray-600 font-serif">
      {/* Título de la sección, invitando a trabajar juntos */}
      <h2 className="text-3xl mt-20 mr-16 max-sm:mr-0 max-sm:font-serif">
        Trabajemos juntos!
      </h2>

      {/* Contenedor para los enlaces de redes sociales */}
      <div className="flex space-x-4">
        {/* Enlace a WhatsApp con estilo de botón */}
        <Link
          to="https://wa.me/573176759606?text=Hola,Tuuu."
          className="flex bg-[#343639] w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:w-full max-sm:justify-center"
        >
          <p>WhatsApp</p> {/* Texto del enlace */}
          <img src={arrow} className="ml-2 h-3" /> {/* Icono de flecha al lado del texto */}
        </Link>

        {/* Enlace a Instagram con estilo de botón */}
        <Link
          to="https://www.instagram.com/velasquezbotero4/"
          className="flex bg-[#343639] w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:w-full max-sm:justify-center"
        >
          <p>Instagram</p> {/* Texto del enlace */}
          <img src={arrow} className="ml-2 h-3" /> {/* Icono de flecha al lado del texto */}
        </Link>

        {/* Enlace a LinkedIn con estilo de botón */}
        <Link
          to="https://www.linkedin.com/in/valentina-velasquez-botero-35636622a/"
          className="flex bg-[#343639] w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:w-full max-sm:justify-center"
        >
          <p>Linkedln</p> {/* Texto del enlace */}
          <img src={arrow} className="ml-2 h-3" /> {/* Icono de flecha al lado del texto */}
        </Link>
      </div>

      {/* Texto del copyright con un mensaje de "Hecho con Amor por la Valen" */}
      <p className="mt-16 mb-10 text-sm text-gray-400 font-medium text-center">
        <span className="mr-2">©</span> {/* Símbolo de copyright */}
        <span className="ml-2">
          Hecho con 🖤 {/* Mensaje de autoría */}
        </span>
      </p>
    </div>
  )
}

// Exporta el componente `Footer` para que pueda ser utilizado en otras partes de la aplicación.
export default Footer
