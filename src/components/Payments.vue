<template>
  <div class="payment-methods p-6 bg-white shadow-lg mt-6">
    <h2 class="text-3xl font-semibold text-center mb-10">Metode Pembayaran</h2>
    <div class="flex flex-wrap justify-center gap-20">

      <div class="payment-method text-center">
        <i class="fas fa-university text-4xl text-blue-500 mb-3"></i>
        <p class="text-lg font-medium text-gray-700 mt-2">Transfer Bank</p>
      </div>

      <div class="payment-method text-center">
        <i class="fas fa-credit-card text-4xl text-gray-800 mb-3"></i>
        <p class="text-lg font-medium text-gray-700 mt-2">Kartu Kredit</p>
      </div>

      <div class="payment-method text-center">
        <i class="fas fa-wallet text-4xl text-yellow-500 mb-3"></i>
        <p class="text-lg font-medium text-gray-700 mt-2">E-Wallet</p>
      </div>

      <div class="payment-method text-center">
        <i class="fas fa-cash-register text-4xl text-green-500 mb-3"></i>
        <p class="text-lg font-medium text-gray-700 mt-2">Cash On Delivery (COD)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethods',
};
</script>

<style scoped>
.payment-methods {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.payment-method i {
  font-size: 3rem;
}

@media (min-width: 1024px) {
  .payment-methods {
    padding: 20px;
  }
}
</style>
