/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: '1.5rem',
        md: '2rem',
        xl: '5rem',
      },
    },
    fontFamily: {
      display: ['Bebas Neue', 'sans-serif'],
      copy: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      '6xl': ['5.96rem', '1'],
      '5xl': ['4.768rem', '1'],
      '4xl': ['3.815rem', '1.1'],
      '3xl': ['3.052rem', '1.2'],
      '2xl': ['2.441rem', '1.3'],
      xl: ['1.953rem', '1.4'],
      lg: ['1.563rem', '1.5'],
      md: ['1.25rem', '1.6'],
      base: ['1rem', '1.7'],
      sm: ['0.8rem', '1.7'],
      xs: ['0.64rem', '1.7'],
    },
    extend: {
      spacing: {
        128: '32rem',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        theme: 'var(--color-theme)',
        'theme-alt': 'var(--color-theme-alt)',
        'theme-alt-2': 'var(--color-theme-alt-2)',
        'theme-alt-3': 'var(--color-theme-alt-3)',
        'theme-op': 'var(--color-theme-op)',
        text: 'var(--color-text)',
      },
      boxShadow: {
        smooth:
          '0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086)',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'pixelslices/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
