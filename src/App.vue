<script setup>
import { RouterView } from "vue-router";
import TotalInfoArea from "@/components/TotalInfoArea.vue";
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
  <div class="container">
    <header>
      <NavigationBar />
    </header>

    <div class="container">
      <RouterView />
    </div>

    <div class="container">
      <div class="row">
        <TotalInfoArea />
      </div>
    </div>
  </div>
</template>