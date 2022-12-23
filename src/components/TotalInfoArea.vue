<template>
  <div
    class="d-flex justify-content-between align-items-center total-info-area"
  >
    <div class="d-flex">
      <div
        class="image-area d-flex flex-column justify-content-center align-items-center"
      >
        <span class="bg-dark text-white rounded-pill">NEW</span>
        <img src="@/assets/ibiza2.png" alt="" class="img-fluid" />
      </div>
      <div class="total-price-area flex-fill d-flex flex-column align-self-end">
        <span class="total-text mb-0">TOTAL</span>
        <span class="price">193.500 TL</span>
      </div>
    </div>
    <div class="navigation-area">
      <RouterLink
        to="colors"
        class="btn btn-dark d-flex justify-content-between align-items-center rounded-0 rounded-end p-4"
      >
        <span class="">COLORS</span>
        <fa icon="arrow-right" />
      </RouterLink>
    </div>
  </div>
</template>
