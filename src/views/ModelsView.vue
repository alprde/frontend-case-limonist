<template>
  <div class="row">
    <div class="col-lg-6 col-sm-12" v-for="model in models" :key="model.id">
      <ModelCard :model="model" />
    </div>
  </div>
</template>

<script setup>
import ModelCard from "@/components/ModelCard.vue";
</script>
<script>
export default {
  data() {
    return {
      models: {
        model1: {
          id: 1,
          text: "<strong>193.500 TL</strong>'den başlayan fiyatlarla",
          image: "./src/assets/ibiza.png",
          selected: false,
        },
        model2: {
          id: 2,
          text: "<strong>200.000 TL</strong>'den başlayan fiyatlarla",
          image: "./src/assets/arona.png",
          selected: false,
        },
      },
    };
  },
};
</script>
