<template>
  <div
    class="card border-0"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card-header border-0">
      <IconCheck class="position-absolute top-0 end-0 d-none"/>
    </div>
    <img
      :src="`/assets/${model.image}`"
      :class="['card-img-top', { 'opacity-100': hover, 'opacity-25': !hover }]"
    />
    <div class="card-body d-flex flex-column align-items-center" v-if="hover">
      <p class="card-text" v-html="model.text"></p>
      <button class="btn btn-dark">SELECT</button>
    </div>
  </div>
</template>

<script>
// defineProps({
//   image: String,
//   text: String,
// });

import IconCheck from "@/components/icons/IconCheck.vue";

export default {
  components: {IconCheck},
  props: ['model'],
  data() {
    return {
      hover: false,
    };
  },
};
</script>
