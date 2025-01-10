// Exporta un objeto que contiene la configuración para herramientas de procesamiento CSS.
export default {
  // Define los plugins que se usarán con PostCSS.
  plugins: {
    // Habilita el plugin de Tailwind CSS, que procesa las clases y genera los estilos necesarios.
    tailwindcss: {},

    // Habilita Autoprefixer, que agrega automáticamente los prefijos específicos para navegadores en las reglas CSS,
    // garantizando mejor compatibilidad con navegadores más antiguos.
    autoprefixer: {},
  },
}
