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
    fontFamily: {
      display: ['Bebas Neue', 'sans-serif'],
      copy: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        theme: 'var(--color-theme)',
        'theme-tint': 'var(--color-theme-tint)',
        'theme-op': 'var(--color-theme-op)',
        contrast: 'var(--color-contrast)',
        transparent: 'transparent',
      },
      boxShadow: {
        smooth:
          '0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072)',
        'glow-primary': '0 0 20px rgba(123,97,255,.5)',
        'glow-secondary': '0 0 20px rgba(255,132,94,.5)',
        'glow-primary-intense': '0 0 30px 10px rgba(123,97,255,.5)',
        'glow-secondary-intense': '0 0 30px 10px rgba(255,132,94,.5)',
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
