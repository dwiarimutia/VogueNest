<template>
  <div class="shipping-return-info p-6 bg-gradient-to-r from-orange-300 to-amber-300 text-white rounded-lg shadow-lg">
    <div class="flex flex-col lg:flex-row justify-between items-center gap-5">
      <!-- Gratis Ongkir-->
      <div class="shipping-info flex-1 text-center lg:text-left bg-white text-gray-800 p-5 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
        <i class="fas fa-shipping-fast text-4xl text-blue-500 mb-3"></i>
        <p class="font-semibold text-xl">Pengiriman Gratis</p>
        <p class="text-sm">Untuk pembelian di atas Rp500.000</p>
      </div>

      <!-- Pengembalian -->
      <div class="return-info flex-1 text-center lg:text-left bg-white text-gray-800 p-5 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
        <i class="fas fa-sync-alt text-4xl text-green-500 mb-3"></i>
        <p class="font-semibold text-xl">Garansi Pengembalian 7 Hari</p>
        <p class="text-sm">Pengembalian barang mudah dalam 7 hari setelah pembelian</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShippingReturnInfo',
};
</script>

<style scoped>
.shipping-return-info {
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Card Styling */
.shipping-info, .return-info {
  flex: 1;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 200px; /* Atur tinggi minimum yang sama */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shipping-info:hover, .return-info:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.shipping-info i, .return-info i {
  font-size: 2.5rem;
}

/* Responsiveness */
@media (min-width: 1024px) {
  .shipping-return-info {
    padding: 20px;
  }
}
</style>
