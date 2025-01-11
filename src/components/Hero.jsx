// Importaciones de paquetes externos
// Componente "Fade" de la librería 'react-awesome-reveal' para animaciones
import { Fade } from 'react-awesome-reveal'

// Importaciones locales
// Imagen de avatar
import avatar from '../assets/me.png'
// Componente o módulo "Icons"
import Icons from './Icons'

// Definición de un componente funcional llamado "Hero".
const Hero = () => {

  return (
    // Inicia el retorno del JSX, que es la estructura del componente.
    <section>
      <header>
        <div className="text-start max-sm:text-center">
          {/* Este div tiene clases de estilo que modifican el alineamiento del texto:
              "text-start" para alinearlo a la izquierda por defecto,
              "max-sm:text-center" para centrarlo en pantallas pequeñas. */}
          <div className="flex items-center max-sm:ml-4">
            {/* Un contenedor con clases de Flexbox para alinear los elementos en fila y en el centro (items-center).
                "max-sm:ml-4" aplica un margen a la izquierda en pantallas pequeñas. */}
            <Fade direction="up" triggerOnce={true}>
              {/* Un componente Fade, que controla la animación de desvanecimiento
                  y permite que el contenido se anime solo una vez cuando entra en la vista.
                  "direction" es hacia donde se desplaza el contenido (arriba en este caso). */}
              <div className="pulse mr-3"></div>
              {/* Un div que tiene una animación o efecto visual con la clase "pulse".
                  "mr-3" aplica un margen a la derecha. */}
              <span className="font-medium">Disponible para ser contratada</span>
              {/* Un texto que dice "Disponible para ser contratada" con una clase que hace que el texto tenga un estilo de fuente "medium" */}
            </Fade>
          </div>

{/*------------------------------------------------------------------------------------------------------------*/}

          <Fade direction="up" delay="10" triggerOnce={true}>
            {/* Componente "Fade" para animaciones
              - "direction='up'" indica que la animación de desvanecimiento ocurrirá mientras el elemento se mueve hacia arriba.
              - "delay='10'" especifica un retraso de 10ms antes de que la animación se active.
              - "triggerOnce={true}" hace que la animación ocurra solo la primera vez que el componente se muestra en pantalla. */}
            <img
              src={avatar}
              className="max-w-[200px] rounded-full bg-[#2d2f31] mx-auto my-10 max-sm:max-w-[160px]"
            />
            {/* Etiqueta <img> para mostrar una imagen.
            - "src={avatar}" es una variable que se espera que contenga la URL de la imagen a mostrar.
            - "className" contiene clases de Tailwind CSS que afectan al estilo de la imagen:
            - "max-w-[200px]" establece un tamaño máximo de ancho de 200 píxeles.
            - "rounded-full" hace que la imagen tenga bordes redondeados, convirtiéndola en un círculo.
            - "bg-[#2d2f31]" establece el color de fondo de la imagen en un tono oscuro (#2d2f31), probablemente en caso de que la imagen no cargue correctamente.
            - "mx-auto" centra la imagen horizontalmente en su contenedor.
            - "my-10" agrega márgenes verticales (top y bottom) de 10 unidades.
            - "max-sm:max-w-[160px]" ajusta el tamaño máximo de la imagen a 160px en pantallas pequeñas. */}
          </Fade>

{/*---------------------------------------------------------------------------------------------------*/}

          <Fade direction="up" delay="40" triggerOnce={true}>
          {/* Componente "Fade" para animaciones:
            - "direction='up'" indica que la animación hará que el contenido se desplace hacia arriba.
            - "delay='40'" establece un retraso de 40ms antes de que la animación se inicie.
            - "triggerOnce={true}" asegura que la animación solo se ejecute una vez cuando el elemento entre en la vista. */}

            <h1 className="text-[30px] leading-tight max-sm:text-[30px] text-center font-serif">
            {/* Encabezado de nivel 1 (h1), usado para el nombre:
              - "text-[40px]" establece un tamaño de fuente de 40 píxeles.
              - "leading-tight" reduce el espacio entre las líneas de texto, haciéndolo más compacto.
              - "font-bold" hace que el texto sea en negrita.
              - "max-sm:text-[40px]" mantiene el tamaño de fuente en 40 píxeles en pantallas pequeñas.
              - "text-center" centra el texto horizontalmente. */}

              Valentina V. Botero

              <p className="text-[20px] max-sm:text-[1.0rem] font-mono">
              {/* Etiqueta de párrafo (p) para el cargo profesional:
                - "text-[30px]" establece un tamaño de fuente de 30 píxeles.
                - "max-sm:text-[30pxrem]" tiene un error de sintaxis, debería ser algo como "max-sm:text-[30px]" para mantener el tamaño consistente en pantallas pequeñas. */}

                <span className="text-[#6F6F6F]">Junior en Tecnologia | Desarrolladora de Software</span>
              </p>
            </h1>
          </Fade>
        </div>

{/*--------------------------------------------------------------------------------------------------------------------*/}

        <Fade direction="up" delay="50" triggerOnce={true}>
          <Icons />
        </Fade>
        {/* El componente Fade tiene propiedades:
          - direction="up": indica que el desvanecimiento debe ocurrir desde abajo hacia arriba.
          - delay="50": establece un retraso en milisegundos (en este caso 50ms) antes de que se aplique el efecto.
          - triggerOnce={true}: hace que el efecto de desvanecimiento solo se ejecute una vez, cuando el componente entra en vista por primera vez. */}

{/*----------------------------------------------------------------------*/}

        <Fade direction="up" delay="60" triggerOnce={true}>
          {/* Este componente "Fade" es igual que en el fragmento anterior. Se aplica un efecto de desvanecimiento al contenido que lo envuelve, en este caso, el párrafo con el texto.
            - direction="up" indica que el contenido se moverá hacia arriba mientras se desvanece.
            - delay="60" establece un retraso de 60ms antes de que se inicie el efecto de desvanecimiento.
            - triggerOnce={true} significa que el efecto solo ocurrirá una vez, cuando el componente se hace visible por primera vez. */}

          <p className="text-[#fff] w-full sm:w-full max-w-[90%] sm:max-w-[520px] text-justify text-base sm:text-lg md:text-xl lg:text-1xl">

            Impulsada por la curiosidad y la pasión por la tecnología,
            me enfoco en desarrollar soluciones innovadoras que fusionen creatividad con funcionalidad.
            Estoy en constante crecimiento y fortalecimiento de mis habilidades técnicas y blandas,
            con el objetivo de diseñar proyectos impactantes mientras enfrento nuevos desafíos. Actualmente,
            sigo perfeccionando mi dominio de las tecnologías y ampliando mi experiencia práctica.
          </p>
        </Fade>
      </header>
    </section>
  )
}

{/*--------------------------------------------------------------------*/}
export default Hero
