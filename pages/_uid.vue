<template>
  <slice-zone type="page" :uid="$route.params.uid" />
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
}
</script>
