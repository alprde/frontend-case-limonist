<script setup>
defineProps({
  class: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <fa
    icon="check"
    class="p-2 bg-black text-white rounded-circle"
    :class="class"
  />
</template>
