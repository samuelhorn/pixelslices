export { default as MultiButton } from '../../pixelslices/components/MultiButton.vue'
export { default as SliderCard } from '../../pixelslices/components/SliderCard.vue'
export { default as ThemeSwitch } from '../../pixelslices/components/ThemeSwitch.vue'
export { default as TheFooter } from '../../pixelslices/components/partials/footer/TheFooter.vue'
export { default as TheHeader } from '../../pixelslices/components/partials/header/TheHeader.vue'

export const LazyMultiButton = import('../../pixelslices/components/MultiButton.vue' /* webpackChunkName: "pixelslices/components/MultiButton" */).then(c => c.default || c)
export const LazySliderCard = import('../../pixelslices/components/SliderCard.vue' /* webpackChunkName: "pixelslices/components/SliderCard" */).then(c => c.default || c)
export const LazyThemeSwitch = import('../../pixelslices/components/ThemeSwitch.vue' /* webpackChunkName: "pixelslices/components/ThemeSwitch" */).then(c => c.default || c)
export const LazyTheFooter = import('../../pixelslices/components/partials/footer/TheFooter.vue' /* webpackChunkName: "pixelslices/components/partials/footer/TheFooter" */).then(c => c.default || c)
export const LazyTheHeader = import('../../pixelslices/components/partials/header/TheHeader.vue' /* webpackChunkName: "pixelslices/components/partials/header/TheHeader" */).then(c => c.default || c)
