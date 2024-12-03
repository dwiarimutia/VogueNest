<template>
  <div>
    <div 
      v-if="isVisible" 
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-all duration-500 ease-in-out transform"
    >
      <div class="bg-blue-300 text-white p-6 rounded-lg w-[90%] max-w-md relative text-center animate__animated animate__fadeIn animate__delay-1s">
        <button 
          @click="closeBanner" 
          class="absolute top-4 right-4 text-2xl text-white hover:text-gray-300"
        >
          &times;
        </button>
        <h2 class="text-2xl font-semibold mb-4">Gak Mau Ketinggalan Kan?</h2>
        <p class="text-lg">
          Dapatkan <span class="font-semibold">Gratis ongkir </span>dan <span class="font-semibold">Diskon 20% </span> untuk pembelian produk apapun!<br> 
          <span class="font-bold">Hanya berlaku buat kamu yang belanja pertama kali!</span> <br> 
        </p>
        <button 
          @click="goToProductsCard" 
          class="mt-4 px-4 py-2 bg-white text-blue-500 font-bold rounded-lg hover:bg-gray-100 transition"
        > 
          Lihat Produk
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoPopup',
  data() {
    return {
      isVisible: false, 
    };
  },
  methods: {
    closeBanner() {
      this.isVisible = false; 
    },
    goToProductsCard() {
      const section = document.querySelector('#products'); // ID dari section Products
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling ke section
      }
      this.closeBanner(); // Menyembunyikan popup setelah scroll
    }
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 5000);
  },
};
</script>

<style scoped>
</style>