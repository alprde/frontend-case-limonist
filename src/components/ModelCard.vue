<template>
  <div
    class="card border-0"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card-header border-0">
      <fa
        icon="check"
        class="p-2 bg-black text-white rounded-circle position-absolute top-0 end-0 d-none"
      />
    </div>
    <img
      :src="image"
      :class="['card-img-top', { 'opacity-100': hover, 'opacity-25': !hover }]"
    />
    <div class="card-body d-flex flex-column align-items-center" v-if="hover">
      <p class="card-text" v-html="text"></p>
      <button class="btn btn-dark">SELECT</button>
    </div>
  </div>
</template>

<script>
// defineProps({
//   image: String,
//   text: String,
// });

export default {
  props: ["image", "text"],
  data() {
    return {
      hover: false,
    };
  },
};
</script>
