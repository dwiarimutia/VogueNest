<template>
  <div class="fixed bottom-4 right-4 group">
    <a
      href="https://wa.me/085738659535"
      target="_blank"
      rel="noopener noreferrer"
      class="relative flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <span
        class="absolute right-full mr-1 p-5 text-sm text-gray-700 bg-white border border-gray-300 rounded-full shadow opacity-0 group-hover:opacity-100 transition duration-500"
        style="white-space: nowrap;"
      >
        Hubungi kami untuk pemesanan
      </span>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="w-10 h-10" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'WhatsAppButton',
}
</script>

<style scoped>
</style>
