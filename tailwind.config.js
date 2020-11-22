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
        DEFAULT: '1.5rem',
        md: '2rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      theme: 'var(--color-theme)',
      'theme-tint': 'var(--color-theme-tint)',
      'theme-op': 'var(--color-theme-op)',
      contrast: 'var(--color-contrast)',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontSize: {
      xs: ['.75rem', '1rem'],
      sm: ['.875rem', '1.25rem'],
      'text-base': ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },
    fontFamily: {
      display: ['Bebas Neue', 'sans-serif'],
      copy: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        0.5: '0.125rem',
        128: '32rem',
      },
      boxShadow: {
        smooth:
          '0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072)',
        'glow-primary': '0 0 20px rgba(123,97,255,.5)',
        'glow-secondary': '0 0 20px rgba(255,132,94,.5)',
        'glow-primary-intense': '0 0 30px 10px rgba(123,97,255,.5)',
        'glow-secondary-intense': '0 0 30px 10px rgba(255,132,94,.5)',
        'focus-primary': '0 0 0 3px rgba(123,97,255,1)',
        'focus-secondary': '0 0 0 3px rgba(255,132,94,1)',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'pixelslices/slices/**/*.vue',
      'pixelslices/components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js',
    ],
  },
}
