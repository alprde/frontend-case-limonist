<template>
  <div class="row justify-content-center align-items-center p-5">
    <p class="w-25 text-center">
      Hayalindeki araca dair rengini seç, tarzını hemen yansıt
    </p>
  </div>
  <div class="row justify-content-center align-items-center">
    <img src="../assets/ibiza.png" alt="" class="img-fluid w-50" />
  </div>
  <div class="row justify-content-center align-items-center color-options">
    <div class="d-flex justify-content-around align-items-center">
      <button class="btn btn-danger rounded-circle position-relative">
        <IconCheck class="d-none" />
      </button>
      <button class="btn btn-dark rounded-circle position-relative">
        <IconCheck class="d-none" />
      </button>
      <button class="btn btn-secondary rounded-circle position-relative">
        <IconCheck class="d-none" />
      </button>
    </div>
  </div>
</template>
<script setup>
import IconCheck from "@/components/icons/IconCheck.vue";
</script>
