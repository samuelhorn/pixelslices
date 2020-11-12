<template>
  <div>
    <TheHeader :partials="partials" />
    <main class="mt-20 md:mt-24 xl:mt-24">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  async middleware({ store }) {
    await store.dispatch('loadPartials')
  },
  computed: {
    partials() {
      return this.$store.state.partials
    },
  },
}
</script>
