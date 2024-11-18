<template>
  <div class="py-10 px-4 md:px-20 lg:px-14 mb-10">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <!-- Map -->
      <div class="rounded-lg h-80 relative">
        <iframe
          class="w-full h-full rounded-lg"
          src="https://maps.google.com/maps?q=Bucharest&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Meet Us -->
      <div class="flex flex-col gap-4 col-span-1">
        <h2 class="text-3xl font-spicy mb-3 mt-[80px]">Meet us</h2>
        <ul class="space-y-2">
            <li class="flex items-center gap-2">
                <i class="fa-solid fa-phone text-ColorFooter font-semibold"></i>
                <span>+62 857-3865-9535</span>
            </li>

            <li class="flex items-center gap-2">
                <i class="fa-solid fa-envelope text-ColorFooter"></i>
                <span>VogueNest@gmail.com</span>
            </li>

            <li class="flex items-center gap-2">
                <i class="fa-brands fa-instagram text-ColorFooter font-bold"></i>
                <span>Instagram : <a href="https://instagram.com/VogueNest" target="_blank" class="text-sky-500">@VogueNest</a></span>
            </li>

            <li class="flex items-center gap-2">
                <i class="fa-brands fa-facebook text-ColorFooter font-bold"></i>
                <span>Facebook : <a href="https://facebook.com/VogueNest" target="_blank" class="text-sky-500">VogueNest</a></span>
            </li>

            <li class="flex items-center gap-2">
                <i class="fa-solid fa-location-dot text-ColorFooter"></i>
                <span>Amman St, no 35, 4th floor, ap 10, Bucharest</span>
            </li>

        </ul>
      </div>

      <!-- Pitch Us -->
      <div class="flex flex-col gap-4 bg-slate-300 p-5">
        <h2 class="text-3xl font-spicy mb-4">Pitch us</h2>
        <textarea
          class="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-0 focus:border-teal-500"
          placeholder="hello, my name is [your name] and my email is [your email]. I would like to discuss about this product."
          rows="5"
        ></textarea>
        <button class="bg-customColor text-black hover:text-white font-semibold py-2 rounded-lg hover:bg-Button hover:scale-105 transform transition duration-300 ease-in-out w-[100px]">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUsFull',
};
</script>

<style scoped>
</style>
