import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/Users/samuelhorn/dev/pixelslices/pixelslices/slices/${sliceName}.vue`), import(`/Users/samuelhorn/dev/pixelslices/pixelslices/slices/${sliceName}/index.vue`), import(`/Users/samuelhorn/dev/pixelslices/pixelslices/slices/${sliceName}/index.js`), import(`/Users/samuelhorn/dev/pixelslices/pixelslices/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
