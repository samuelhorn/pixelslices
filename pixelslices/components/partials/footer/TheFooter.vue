<template>
  <footer class="container text-center mt-16 md:mt-24 lg:mt-32">
    <div
      class="flex flex-col md:flex-row justify-center items-center mb-12 font-display text-lg lg:text-xl leading-none"
    >
      <a
        href="https://pxlsls-demo.samuelhorn.com"
        rel="noopener"
        target="_blank"
        class="flex items-center mx-4 my-2 hover:text-secondary"
      >
        <Nuxt class="mr-3 transition-colors duration-200" />
        <span class="text-contrast">View the demo</span>
      </a>
      <a
        href="https://pxlsls-story.samuelhorn.com"
        rel="noopener"
        target="_blank"
        class="flex items-center mx-4 my-2 hover:text-secondary"
      >
        <Storybook class="mr-3 transition-colors duration-200" />
        <span class="text-contrast">View the story</span>
      </a>
      <a
        href="https://github.com/samuelhorn/pixelslices"
        rel="noopener"
        target="_blank"
        class="flex items-center mx-4 my-2 hover:text-secondary"
      >
        <Github class="mr-3 transition-colors duration-200" />
        <span class="text-contrast">Get the slices</span>
      </a>
    </div>
    <p class="max-w-lg mx-auto mb-20">
      Copyright 2020, all rights reserved. Made by
      <a
        href="https://samuelhorn.com"
        rel="noopener"
        target="_blank"
        class="text-primary"
      >
        Samuel Horn af Rantzien
      </a>
      Licenced under the
      <a
        href="https://github.com/samuelhorn/pixelslices/blob/master/LICENSE"
        rel="noopener"
        target="_blank"
        class="text-primary"
      >
        MIT-license
      </a>
    </p>
  </footer>
</template>

<script>
import Nuxt from '~/assets/svg/Nuxt.svg?inline'
import Storybook from '~/assets/svg/Storybook.svg?inline'
import Github from '~/assets/svg/Github.svg?inline'

export default {
  components: {
    Nuxt,
    Storybook,
    Github,
  },
}
</script>
