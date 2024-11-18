<template>
  <div class="keunggulan-toko-section p-6 bg-customColor mt-6 ">
    <h2 class="text-5xl font-spicy text-center mb-20 mt-10">Keunggulan VogueNest</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mr-10 md:ml-10 md:mb-10">
      <div class="keunggulan-item text-center bg-white md:p-20 p-7">
        <div class="icon-wrapper mb-4">
          <i class="fas fa-shipping-fast text-4xl text-blue-500"></i> <!-- Ikon Pengiriman Cepat -->
        </div>
        <p class="text-lg font-medium text-gray-700">Pengiriman Cepat</p>
        <p class="text-gray-500">Kami menjamin pengiriman yang cepat dan tepat waktu untuk setiap pesanan.</p>
      </div>

      <div class="keunggulan-item text-center bg-white md:p-20 p-7">
        <div class="icon-wrapper mb-4">
          <i class="fas fa-cogs text-4xl text-green-500"></i> <!-- Ikon Kualitas Produk -->
        </div>
        <p class="text-lg font-medium text-gray-700">Kualitas Produk Terjamin</p>
        <p class="text-gray-500">Setiap produk yang kami jual telah melalui proses kontrol kualitas yang ketat.</p>
      </div>

      <div class="keunggulan-item text-center bg-white md:p-20 p-7">
        <div class="icon-wrapper mb-4">
          <i class="fas fa-tags text-4xl text-orange-500"></i> <!-- Ikon Harga Terjangkau -->
        </div>
        <p class="text-lg font-medium text-gray-700">Harga Terjangkau</p>
        <p class="text-gray-500">Kami menawarkan harga yang bersaing tanpa mengorbankan kualitas produk.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeunggulanToko"
};
</script>

<style scoped>
.keunggulan-item {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.5s ease; 
}

.keunggulan-item:hover {
  cursor: pointer; 
  transform: translateY(-20px); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f5f9;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: auto;
}

.text-gray-500 {
  color: #6b7280;
}

.text-gray-700 {
  color: #374151;
}

.text-blue-500 {
  color: #3b82f6;
}

.text-green-500 {
  color: #10b981;
}

.text-orange-500 {
  color: #f97316;
}

@media (min-width: 640px) {
  .keunggulan-item {
    padding: 25px;
  }
}

@media (min-width: 1024px) {
  .keunggulan-item {
    padding: 30px;
  }
}
</style>
