<template>
  <section class="py-16 bg-[#fcf7e8]">
    <div class="max-w-[1600px] mx-auto px-8">
      <h2 class="text-3xl md:text-4xl font-black text-center mb-12 text-gray-800 uppercase tracking-tight">
        CHOOSE YOUR MAILBOX
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
        >
          <div class="w-full h-90 overflow-hidden">
            <NuxtImg 
              :src="product.image" 
              :alt="product.name" 
              class="w-full h-full object-cover object-top" 
            />
          </div>
          <div class="p-6 border-t border-gray-200">
            <h3 class="text-lg font-extrabold mb-2 text-gray-800 uppercase tracking-wide">{{ product.name }}</h3>
            <p class="text-xl font-bold text-gray-700 mb-4">${{ product.price }}</p>
            <p class="text-sm leading-relaxed text-gray-600 m-0">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Setup cards section component
const products = [
  {
    id: 1,
    name: 'BLACK MAILBOX',
    price: 90,
    image: '/images/products/black-mailbox.png',
    description: 'Sleek black mailbox with premium finish and weather-resistant coating for lasting durability.'
  },
  {
    id: 2,
    name: 'WHITE MAILBOX',
    price: 90,
    image: '/images/products/white-mailbox.png',
    description: 'Classic white mailbox featuring clean lines and superior weather protection.'
  }
]
</script>