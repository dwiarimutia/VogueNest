<template>
  <div class="bg-gray-100">
    <nav class="bg-customColor md:py-4 p-5 border-b-2 border-b-white shadow-2xl flex justify-between items-center fixed top-0 left-0 w-full z-10 'hidden': isMobile ">
      <h1 class="text-white md:text-3xl text-xl font-bold">VogueNest</h1>
      <button @click="toggleMenu" class="md:hidden text-white">
        <i class="fas fa-bars"></i> 
      </button>
      <ul :class="{'flex': !isMobile, 'hidden': isMobile}" class="md:flex space-x-4 hidden mr-8">
        <li><a href="#products" class="text-white">Product</a></li>
        <li><a href="#testimoni" class="text-white">Testimoni</a></li>
        <li><a href="#about" class="text-white">About</a></li>
        <li><a href="#contact" class="text-white">Contact</a></li>
      </ul>
    </nav>

    <div v-if="isMobile" class="md:hidden bg-customColor fixed top-[65px] left-0 w-full z-20">
      <ul class="flex flex-col space-y-4 p-8 text-white">
        <li><a href="#products">Product</a></li>
        <li><a href="#testimoni">Testimoni</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <PopUp />

    <section class="hero h-screen md:p-8 p-4 flex flex-col lg:flex-row items-center bg-cover bg-center">
      <div class="md:flex-1 text-center lg:text-left">
        <h2 class="text-5xl md:ml-8 pt-20 md:pt-0 font-spicy mb-8 md:mb-0 text-white">Welcome to VogueNest!</h2>
        <p class="mt-4 md:ml-8 px-2 md:px-0">Temukan koleksi pakaian stylish yang cocok untuk setiap suasana. Mulai dari gaya kasual hingga tampilan istimewa, kami hadirkan koleksi terbaru dengan kualitas yang bisa kamu andalkan dan harga yang bikin kamu ingin kembali lagi.</p>
        <p class="title md:ml-8 px-2 md:px-0 font-dyna">Let’s make your day brighter with our best fashion picks!</p>
      </div>
      <div class="md:flex-1">
        <img class="md:w-[80%] md:ml-[20%] md:mt-[40px] md:mb-[-30px] max-w-full h-auto" src="./assets/hero.png" alt="hero">
      </div>
    </section>

    <section id="products" class="products md:p-8">
      <h2 class="text-5xl font-spicy text-center mt-16 p-8 md:p-0 mb-8">Product VogueNest</h2>
      <div class="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 md:p-8"> 
        <product-card 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </section>

    <section>
      <Promo />
      <ShippingInfo />
    </section>

    <section id="testimoni">
      <TestimoniPelanggan :testimonials="testimonials" />
    </section>

    <section id="features">
      <Features />
    </section>

    <section>
      <Payments />
    </section>

    <section id="about" class="about p-6 md:p-8 mt-20 mb-20">
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between">

        <div class="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <img
            src="./assets/img.png"
            alt="Fashion Image"
            class="w-2/3 md:w-3/4 h-auto rounded-lg shadow-xl"
          />
        </div>

        <div class="w-full md:w-2/3 text-center md:text-left mr-[50px]">
          <h2 class="text-5xl md:text-5xl font-spicy mt-8 md:mt-16 mb-8">About Us</h2>
          <p class="mt-4 mb-4 text-base md:text-lg text-justify leading-relaxed">
            Selamat datang di <strong>VogueNest</strong>, tempat di mana gaya, kualitas, dan kenyamanan bertemu. Kami hadir dengan koleksi pakaian yang dirancang khusus untuk kamu yang ingin tampil trendi dan percaya diri setiap hari. Setiap produk kami dibuat dengan bahan pilihan, mengikuti tren mode terkini tanpa mengorbankan kenyamanan.
          </p>
          <p class="mt-4 mb-6 text-base md:text-lg text-justify leading-relaxed">
            Kami percaya bahwa setiap orang berhak memiliki pakaian yang tidak hanya tampak bagus, tetapi juga nyaman dikenakan. Mulai dari kaos kasual, jaket stylish, hingga koleksi pakaian lainnya, kami selalu berkomitmen untuk memberikan yang terbaik. Temukan gaya kamu di <strong>VogueNest</strong> dan jadilah dirimu sendiri dengan percaya diri!
          </p>
        </div>
      </div>
    </section>


    <section>
      <ContactUsF />
    </section>

    <Contact />

    <footer class="bg-ColorFooter p-4 text-center text-white">
      <p>&copy; 2024 VogueNest. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import Contact from './components/Contact.vue';
import ProductCard from './components/ProductCard.vue';
import TestimoniPelanggan from './components/TestimoniPelanggan.vue';
import Features from './components/Features.vue';
import Promo from './components/Promo.vue';
import ShippingInfo from './components/ShippingInfo.vue';
import Payments from './components/Payments.vue';
import ContactUsF from "./components/ContactUsF.vue";
import PopUp from "./components/PopUp.vue";

export default {
  components: {
    ProductCard,
    Contact,
    TestimoniPelanggan,
    Features,
    Promo,
    ShippingInfo,
    Payments,
    ContactUsF,
    PopUp
  },
  data() {
    return {
      isMobile: true,
      products: [
        { id: 1, 
          name: 'Vogue Cotton T-shirt', 
          price: '100.000', 
          description: 'Kaos katun premium yang tak hanya nyaman, tetapi juga menonjolkan gaya modern dan elegan. Desainnya yang unik akan membuat penampilanmu semakin keren, dari hangout santai hingga acara casual dengan teman-teman. Pilihan tepat untuk tampilan effortless namun tetap stylish.', 
          image: 'https://via.placeholder.com/300' ,
          rating: 4.5,
          reviewsCount: 103
        },
        { id: 2, 
          name: 'Urban Trendy Denim Jacket', 
          price: '250.000', 
          description: 'Jaket denim yang jadi statement dalam setiap kesempatan! Dengan desain yang chic dan fit yang pas di tubuh, jaket ini tak hanya menawarkan kenyamanan tetapi juga memberikan kesan urban yang penuh gaya. Cocok dipadukan dengan berbagai outfit untuk tampilan street style yang memukau.', 
          image: 'https://via.placeholder.com/300',
          rating: 5,
          reviewsCount: 100
        },
        { id: 3, 
          name: 'Chic Floral Midi Dress', 
          price: '200.000', 
          description: 'Gaun midi dengan motif bunga yang anggun, memberikan sentuhan feminin pada setiap gerakanmu. Dengan potongan yang memeluk tubuh dengan sempurna, gaun ini memberikan kesan elegan dan segar, siap menemani acara spesial maupun pesta malam. Percaya diri dalam setiap langkah dengan Chic Floral Midi Dress!', 
          image: 'https://via.placeholder.com/300', 
          rating: 4,
          reviewsCount: 50
        },
        { id: 4, 
          name: 'Cozy Knit Sweater', 
          price: '200.000', 
          description: 'Nikmati kenyamanan tiada tara dengan sweater rajut yang lembut dan hangat ini. Desain yang simpel dan timeless membuatnya mudah dipadukan dengan berbagai gaya, baik itu untuk santai di rumah atau jalan-jalan di musim dingin. Rasakan kenyamanan dan kehangatan yang membawa kesan elegan di setiap kesempatan.', 
          image: 'https://via.placeholder.com/300',
          rating: 4,
          reviewsCount: 70
         },
        { id: 5, 
          name: 'Signature Wool Coat', 
          price: '200.000', 
          description: 'Mantel wol yang tak hanya menghangatkan, tetapi juga menambah pesona pada penampilanmu. Dengan desain klasik yang tak lekang oleh waktu, mantel ini siap menemani hari-harimu dengan sentuhan elegan dan nyaman. Gaya formal, namun tetap stylish—membuatmu terlihat chic di musim dingin.', 
          image: 'https://via.placeholder.com/300',
          rating: 5,
          reviewsCount: 89
         },
        { id: 6, 
          name: 'Sport Shorts', 
          price: '200.000', 
          description: 'Siap beraksi dengan celana pendek olahraga yang ringan dan elastis ini! Dibuat untuk memberi keleluasaan dalam bergerak, Sport Shorts adalah pilihan tepat untuk berolahraga, berlari, atau bahkan hanya bersantai di akhir pekan. Tampil sporty dengan tetap nyaman!', 
          image: 'https://via.placeholder.com/300', 
          rating: 3.5,
          reviewsCount: 73
        },
        { id: 7, 
          name: 'Sweat Pants', 
          price: '200.000', 
          description: 'Celana sweat yang nyaman ini bukan hanya untuk olahraga, tetapi juga jadi pilihan tepat untuk bersantai di rumah atau jalan-jalan santai. Dengan bahan lembut dan fit yang pas, Sweat Pants ini memberikan kelembutan di kulit sekaligus fleksibilitas yang kamu butuhkan dalam aktivitas sehari-hari.', 
          image: 'https://via.placeholder.com/300',
          rating: 4,
          reviewsCount: 68
        },
        { id: 8, 
          name: 'Casual Summer Dress', 
          price: '200.000', 
          description: 'Gaun musim panas yang ringan dan flowy ini memberikan kesan segar dan chic di setiap langkah. Dengan desain yang effortless, gaun ini sempurna untuk acara santai atau liburan musim panas. Kenakan dengan sandal kesukaanmu dan nikmati hari cerah penuh gaya!', 
          image: 'https://via.placeholder.com/300',
          rating: 4,
          reviewsCount: 98
        },
        { id: 9, 
          name: 'Comfortable Knit Top', 
          price: '200.000', 
          description: 'Atasan rajut yang super nyaman dan serbaguna. Mudah dipadankan dengan jeans atau rok, memberikan kesan santai namun tetap chic. Bahan yang elastis memberikan kenyamanan ekstra, membuatmu tetap stylish sepanjang hari, baik untuk aktivitas outdoor maupun acara santai di rumah.', 
          image: 'https://via.placeholder.com/300',
          rating: 5,
          reviewsCount: 105
        },

      ],

      testimonials: [
      { name: "Dewi Ayu", message: "Pelayanan sangat ramah dan kualitas produk sangat memuaskan!", date: "15 November 2024", image: 'https://via.placeholder.com/300' },
      { name: "Putra Wijaya", message: "Harga terjangkau dan barang sesuai dengan deskripsi!", date: "10 November 2024", image: 'https://via.placeholder.com/300' },
      { name: "Siti Aminah", message: "Barang sampai tepat waktu dan kualitasnya sangat bagus!", date: "8 November 2024", image: 'https://via.placeholder.com/300' },      
      { name: "Dwiari", message: "wahhh cantik bangett produknya", date: "15 November 2024", image: 'https://via.placeholder.com/300' },
      { name: "Andini", message: "anjay kerenn banget disini kawan", date: "10 November 2024", image: 'https://via.placeholder.com/300' },
      { name: "Ayu Mas", message: "yahaha bagus banget asli beb", date: "8 November 2024", image: 'https://via.placeholder.com/300' },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMobile = !this.isMobile;
    }
  }
}
</script>

<style scoped>
.hero {
  background-image: url('./assets/background.png');
  background-size: cover;
  background-position: center;
  height: 100%;
}

.title{
  margin-top: 10px;
}
</style>
