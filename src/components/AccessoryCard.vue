<template>
  <div
    class="card accessory justify-content-center align-items-center"
    style="height: 300px"
  >
    <div class="card-header border-0">{{ accessory.text }}</div>
    <div class="card-body">
      <p>{{ accessory.price }} TL</p>
      <IconCheck class="d-none"/>
    </div>
  </div>
</template>

<script setup>
import IconCheck from "@/components/icons/IconCheck.vue";
</script>
<script>
export default {
  props: ["accessory"],
};
</script>
