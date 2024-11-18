<template>
  <div v-if="isVisible" class="promo-banner bg-blue-300 text-white p-4 text-center relative">
    <p class="text-xl font-semibold">
      Diskon 20% untuk Pembelian Pertama! <br> 
      Gunakan kode: <span class="font-bold">PENAWARAN20</span> di checkout.
    </p>
    <button 
      @click="closeBanner"
      class="absolute top-2 right-2 text-2xl text-white hover:text-gray-300"
    >
      &times; 
    </button>
  </div>
</template>

<script>
export default {
  name: 'PromoBanner',
  data() {
    return {
      isVisible: true, 
    };
  },
  methods: {
    closeBanner() {
      this.isVisible = false; 
    },
  },
};
</script>

<style scoped>
.promo-banner {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.promo-banner .text-center {
  font-size: 1.25rem;
}

button:hover {
  cursor: pointer;
}
</style>
