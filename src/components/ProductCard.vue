<template>
  <div>
    <div 
      @click="togglePopup" 
      class="border md:p-4 p-2 rounded-lg cursor-pointer bg-white shadow-xl transition-transform duration-300 hover:scale-105"
    >
      <img :src="product.image" alt="Product Image" class="w-full h-[300px] mb-2">
      <h2 class="text-base md:text-xl font-semibold">{{ product.name }}</h2>
      <p class="text-gray-600 text-sm md:text-base
      ">
        <span class="font-semibold text-sm md:text-base">Rp. </span>
        {{ product.price }} 
      </p>

      <!----------------- Rating Bintang ----------------->
      <div class="md:flex items-center w-full text-yellow-500">
        <span class="text-sm md:text-base">Rating : </span>
        <i 
          v-for="star in 5" 
          :key="star" 
          :class="getStarClass(star)"
          class="mr-1 text-sm md:text-base"
        ></i>
        <span class="text-gray-600 text-sm md:text-base ml-2">({{ product.reviewsCount }} Ulasan)</span>
      </div>
    </div>

    <!------------------ Pop-up -------------------------->
    <transition name="modal">
      <div 
        v-show="showDetails" 
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div class="bg-white md:p-6 p-10 rounded-lg w-[90%] space-y-5 max-w-4xl relative md:flex gap-6">
          <button 
            @click="togglePopup" 
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>

          <!----------------- Gambar Produk -------------------->
          <div class="md:w-1/2">
            <img :src="product.image" alt="Product Image" class="w-full h-auto object-contain rounded-lg">
          </div>
 
          <!--------------------- Detail Produk ----------------->
          <div class="md:w-1/2">
            <h2 class="md:text-2xl text-lg font-bold md:mb-4">{{ product.name }}</h2>
            <p class="text-gray-600 mb-2"><span class="font-semibold">Harga : Rp. </span> {{ product.price }}</p>

            <!----------------- Rating Bintang di Pop-up ----------------->
            <div class="flex items-center text-yellow-500 md:mb-4">
              <i 
                v-for="star in 5" 
                :key="star" 
                :class="getStarClass(star)"
                class="mr-1"
              ></i>
              <span class="text-gray-600 ml-2">({{ product.reviewsCount }} Ulasan)</span>
            </div>

            <h3 class="font-semibold mb-2">Detail Produk:</h3>
            <p class="text-gray-800">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProductsCard',
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        image: '',
        name: '',
        price: '',
        rating: 0,
        description: '',
        reviewsCount: 0,
      }),
    },
  },
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    togglePopup() {
      this.showDetails = !this.showDetails;
    },
    getStarClass(star) {
      const rating = this.product.rating;

      if (star <= rating) {
        return 'fa-solid fa-star'; // Bintang penuh
      } else if (star - 0.5 <= rating) {
        return 'fa-solid fa-star-half-alt'; // Bintang setengah
      } else {
        return 'fa-regular fa-star'; // Bintang kosong
      }
    },
  },
};
</script>

<style scoped>
  .modal-content {
    max-height: 90vh;
    overflow-y: auto;
  }
  .modal-enter-active, .modal-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .modal-enter-from, .modal-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }
</style>
