module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep trust foundation
        primary: {
          DEFAULT: "#1a237e", // indigo-900
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        // Secondary Colors - Progress energy
        secondary: {
          DEFAULT: "#00bcd4", // cyan-500
          50: "#e0f7fa", // cyan-50
          100: "#b2ebf2", // cyan-100
          200: "#80deea", // cyan-200
          300: "#4dd0e1", // cyan-300
          400: "#26c6da", // cyan-400
          500: "#00bcd4", // cyan-500
          600: "#00acc1", // cyan-600
          700: "#0097a7", // cyan-700
          800: "#00838f", // cyan-800
          900: "#006064", // cyan-900
        },
        // Accent Colors - Success moments
        accent: {
          DEFAULT: "#009688", // teal-500
          50: "#e0f2f1", // teal-50
          100: "#b2dfdb", // teal-100
          200: "#80cbc4", // teal-200
          300: "#4db6ac", // teal-300
          400: "#26a69a", // teal-400
          500: "#009688", // teal-500
          600: "#00897b", // teal-600
          700: "#00796b", // teal-700
          800: "#00695c", // teal-800
          900: "#004d40", // teal-900
        },
        // Background Colors
        background: "#fafafa", // gray-50 - Clean content canvas
        surface: "#ffffff", // white - Card elevation
        
        // Text Colors
        text: {
          primary: "#212121", // gray-800 - Extended reading comfort
          secondary: "#757575", // gray-500 - Supporting information
        },
        
        // Status Colors
        success: "#4caf50", // green-500 - Completion confidence
        warning: "#ff9800", // orange-500 - Helpful attention
        error: "#f44336", // red-500 - Clear problems
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glass': '0 4px 20px rgba(26, 35, 126, 0.1)',
        'glass-lg': '0 8px 40px rgba(26, 35, 126, 0.15)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 4px 25px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #006064 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
    },
  },
  plugins: [],
}