<template>
  <div class="row justify-content-center align-items-center p-5">
    <p class="w-25 text-center">
      Seçtiğin araca ait özellikler, konforun ve yaşam stilini belirler.
    </p>
  </div>
  <div class="row px-5 accessories">
    <div class="col-4" v-for="accessory in accessories" :key="accessory.id">
      <AccessoryCard :accessory="accessory" />
    </div>
  </div>
</template>
<script setup>
import AccessoryCard from "@/components/AccessoryCard.vue";
</script>
<script>
export default {
  data() {
    return {
      accessories: {
        accessory1: {
          id: 1,
          text: "SEAT FREE SYNC PACK EASY JET",
          price: "7.500",
          selected: false,
        },
        accessory2: {
          id: 2,
          text: "MAINTENANCE PROGRAM UPGRADE",
          price: "1.250",
          selected: false,
        },
        accessory3: {
          id: 3,
          text: "SEAT FREE SYNC PACK EASY JET",
          price: "13.700",
          selected: false,
        },
        accessory4: {
          id: 4,
          text: "SEAT FREE SYNC PACK EASY JET",
          price: "7.500",
          selected: false,
        },
        accessory5: {
          id: 5,
          text: "MAINTENANCE PROGRAM UPGRADE",
          price: "1.250",
          selected: false,
        },
        accessory6: {
          id: 6,
          text: "SEAT FREE SYNC PACK EASY JET",
          price: "13.700",
          selected: false,
        },
      },
    };
  },
};
</script>
