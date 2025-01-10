// Especifica que este archivo es del tipo `Config` de Tailwind CSS, lo que permite obtener autocompletado y validación al trabajar con editores de texto compatibles.
/** @type {import('tailwindcss').Config} */

// Exporta la configuración de Tailwind CSS como un objeto.
export default {
  // Define los archivos donde Tailwind buscará clases CSS utilizadas en tu proyecto para optimizar la generación del archivo final de estilos.
  content: [
    './index.html', // Incluye el archivo `index.html` en la búsqueda.
    './src/**/*.{js,ts,jsx,tsx}' // Incluye todos los archivos con las extensiones especificadas dentro de la carpeta `src`.
  ],

  // Personalización del tema de Tailwind CSS.
  theme: {
    // `extend` permite añadir nuevas configuraciones o sobrescribir las existentes sin reemplazar todo el tema predeterminado.
    extend: {},
  },

  // Configuración para añadir plugins de Tailwind CSS (por ejemplo, tipografía, formularios, etc.). En este caso, está vacío.
  plugins: [],
}
