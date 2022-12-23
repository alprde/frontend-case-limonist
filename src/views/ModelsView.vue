<template>
  <div class="row">
    <div class="col-lg-6 col-sm-12">
      <ModelCard
        image="./src/assets/ibiza.png"
        text="<strong>193.500 TL</strong>'den başlayan fiyatlarla"
      />
    </div>
    <div class="col-lg-6 col-sm-12">
      <ModelCard
        image="./src/assets/arona.png"
        text="<strong>200.000 TL</strong>'den başlayan fiyatlarla"
      />
    </div>
  </div>
</template>

<script setup>
import ModelCard from "@/components/ModelCard.vue";
import TotalInfoArea from "@/components/TotalInfoArea.vue";
</script>
