// Importa la función `defineConfig` desde Vite, que se utiliza para definir la configuración del proyecto.
import { defineConfig } from 'vite'

// Importa el plugin oficial de React para Vite, que permite la integración de proyectos de React.
import react from '@vitejs/plugin-react'

// Enlace a la documentación de configuración de Vite para más detalles sobre las opciones disponibles.
 // https://vitejs.dev/config/

// Exporta la configuración predeterminada de Vite utilizando `defineConfig` para facilitar el autocompletado y la validación.
export default defineConfig({
  // Define los plugins que se usarán en el proyecto. En este caso, se utiliza el plugin de React.
  plugins: [react()],
})
