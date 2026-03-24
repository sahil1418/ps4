/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Highly saturated elegant modern palette
        'app-primary': '#4f46e5',   // Indigo
        'app-violet': '#7c3aed',    // Violet
        'app-tech': '#06b6d4',      // Cyan
        'app-success': '#10b981',   // Emerald
        'app-warning': '#f59e0b',   // Amber
        'app-danger': '#f43f5e',    // Rose
      },
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
      }
    },
  },
  plugins: [],
}
