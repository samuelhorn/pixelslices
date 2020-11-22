<img src="https://github.com/samuelhorn/pixelslices/blob/master/static/icon.png?raw=true" alt="Pixelslices logotype" width="128" height="128" />

# Pixelslices

A neat slice library for [Slicemachine](https://www.slicemachine.dev/) by [Prismic](https://prismic.io/). Consisting of 6 slices and 2 partials for header and footer.

**A note on color mode:**
_To change between light and dark mode in the Storybook you have to push the switch in the header partail. I have not found a way to connect Storybook's knobs to @nuxtjs/color-mode, I will try to make it possible to switch on every slice in the future._

## Partials

### The Header

The header, containing a logo, a name and a theme switch to switch between light and dark mode. This works in Storybook as well, but has to be changed in this partial.

### The footer

A partial for the bottom of the page, just containig stuff for the demo right now.

## Slices

### The Hero

A bold hero with a big headline wich can be branded in different colors and aligned in three ways. Also has the ability to add CTA buttons.

### The Form

A simple form builder slice for text fields of different types, connects automatic to Netlify Forms.

### The Slider

Slider slice which can be used with background images or icons, with or without ppagination bullets that can be colored in different ways.

### The Accordion

Repeatable accordion elements that folds out on click, can be branded in different colors.

### The Image

A slice to display an image with caption, either centered, in full with or aligned to any side.

### The Text

A slice for rich text with the ability to use one, two or three columns.

## Storybook & Demo

[Storybook](https://pxlsls-story.samuelhorn.com) [![Netlify Status](https://api.netlify.com/api/v1/badges/5e4bbc91-0ff2-4342-82e4-38d43fa4e4af/deploy-status)](https://app.netlify.com/sites/pxlsls-story/deploys)

[Demo](https://pxlsls-demo.samuelhorn.com) [![Netlify Status](https://api.netlify.com/api/v1/badges/da3d6cf3-4571-4e26-9a24-fde92f63e86e/deploy-status)](https://app.netlify.com/sites/pxlsls-demo/deploys)

## Setup & development

```bash
# Install Prismic CLI
$ yarn global add prismic-cli@3.8.3-beta.0

# Install dependencies
$ yarn install

# Serve Nuxt app at http://localhost:3000
$ yarn dev

# Serve Storybook at http://localhost:3003
$ yarn storybook

# Serve Slicemachine ui at http://localhost:9999
$ yarn slicemachine

# Create a slice
$ yarn sm --create-slice

# Generate static Nuxt site
$ yarn generate

# Generate static Storybook site
$ yarn build-storybook
```

## Read more

Read more about [Nuxt.js](https://nuxtjs.org).
Read more about [Slicemachine](https://www.slicemachine.dev/).
