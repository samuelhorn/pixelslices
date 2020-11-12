module.exports = {
  webpackFinal(config, options) {
    return options.nuxtStorybookConfig.webpackFinal(config, options)
  },
  stories: ['../../pixelslices/**/*.stories.js'],
  addons: ["@storybook\u002Faddon-knobs\u002Fregister"],
}
