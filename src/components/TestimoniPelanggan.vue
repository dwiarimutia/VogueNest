<template>
  <div class="testimonials-section p-6">
    <h2 class="text-5xl font-spicy text-center mt-8 mb-10">Testimoni Pelanggan</h2>
    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-card flex-none w-full sm:w-1/2 lg:w-1/3 px-2"
        >
          <div class="border p-4 bg-white shadow-xl rounded-lg">
            <p class="text-lg text-gray-800 mb-2">"{{ testimonial.message }}"</p>
            <div class="mt-4 flex items-center">
              <img
                :src="testimonial.image"
                alt="Foto Pelanggan"
                class="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p class="font-semibold">{{ testimonial.name }}</p>
                <p class="text-gray-600 text-sm">{{ testimonial.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-5">
      <button
        @click="prevSlide"
        class="bg-gray-200 p-2 rounded-full mx-2 hover:bg-gray-300"
      >
        ❮
      </button>
      <button
        @click="nextSlide"
        class="bg-gray-200 p-2 rounded-full mx-2 hover:bg-gray-300"
      >
        ❯
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimoniPelanggan",
  props: {
    testimonials: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  computed: {
    slidesPerView() {
      if (window.innerWidth < 640) return 1; 
      if (window.innerWidth < 1024) return 2; 
      return 3; 
    },
    totalSlides() {
      return Math.ceil(this.testimonials.length / this.slidesPerView);
    },
  },
  mounted() {
    this.startAutoSlide();
    window.addEventListener("resize", this.updateSlideConfig);
  },
  methods: {
    startAutoSlide() {
      this.autoSlide = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    prevSlide() {
      this.currentSlide =
        this.currentSlide > 0 ? this.currentSlide - 1 : this.totalSlides - 1;
    },
    nextSlide() {
      this.currentSlide =
        this.currentSlide < this.totalSlides - 1 ? this.currentSlide + 1 : 0;
    },
    updateSlideConfig() {
      this.currentSlide = 0;
    },
  },
  beforeUnmount() {
    clearInterval(this.autoSlide);
    window.removeEventListener("resize", this.updateSlideConfig);
  },
};
</script>

<style scoped>
.testimonials-section {
  width: 100%;
  margin: auto;
}

.testimonial-card {
  box-sizing: border-box;
}

.flex {
  display: flex;
  width: 100%;
}

.flex > div {
  transition: transform 0.3s ease-in-out;
}

.relative {
  overflow: hidden;
}
</style>
