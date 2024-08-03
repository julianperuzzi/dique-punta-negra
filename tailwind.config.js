/** @type {import('tailwindcss').Config} */
export default {
  // Configuración para el modo oscuro, 'class' es recomendado para mayor control
  darkMode: 'class', // Alternativa: 'media' para detectar automáticamente el modo oscuro del sistema

  // Definir los archivos donde Tailwind CSS buscará clases para generar estilos
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Incluye todos los archivos en la carpeta src con las extensiones js, ts, jsx, tsx
  ],

  // Personalización del tema
  theme: {
    extend: {
      // Aquí puedes extender el tema con colores personalizados, fuentes, etc.
      colors: {
        primary: '#FF69B4', // Por ejemplo, un color primario rosa
        secondary: '#FFFFFF', // Color secundario blanco
        dark: '#1E293B', // Color para modo oscuro
      },
      // Puedes añadir más configuraciones personalizadas aquí
      // Por ejemplo, más fuentes, tamaños, o espaciados personalizados
    },
  },

  // Plugins adicionales que deseas usar con Tailwind CSS
  plugins: [
    // Ejemplo: Plugin para formularios personalizados
    // require('@tailwindcss/forms'),
    // Otro plugin podría ser para la tipografía
    // require('@tailwindcss/typography'),
  ],
}
