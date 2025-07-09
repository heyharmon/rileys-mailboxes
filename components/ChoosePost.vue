<template>
  <section class="py-16 bg-[#fcf7e8]">
    <div class="max-w-[1600px] mx-auto px-8">
      <h2 class="text-3xl md:text-4xl font-black text-center mb-6 text-gray-800 uppercase tracking-tight">
        CHOOSE YOUR POST
      </h2>
      <p class="text-lg leading-relaxed text-center mb-12 text-gray-700 max-w-lg mx-auto">
        All post include installation, cleanup, and a 100% satisfaction guarantee as part of the price of the post.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
    name: 'HONEY MAPLE',
    price: 210,
    image: '/images/products/honey-maple.png',
    description: 'Beautiful honey maple finish mailbox with premium craftsmanship and weather-resistant coating.'
  },
  {
    id: 2,
    name: 'KONA',
    price: 210,
    image: '/images/products/kona.png',
    description: 'Rich Kona finish mailbox featuring elegant design and durable construction for lasting beauty.'
  },
  {
    id: 3,
    name: 'NATURAL PINE',
    price: 210,
    image: '/images/products/natural-pine.png',
    description: 'Classic natural pine mailbox with authentic wood grain and protective finish for outdoor use.'
  },
  {
    id: 4,
    name: 'WHITE PAINTED',
    price: 210,
    image: '/images/products/white-painted.png',
    description: 'Clean white painted mailbox with smooth finish and superior weather protection.'
  },
  {
    id: 5,
    name: 'WHITE STAINED',
    price: 210,
    image: '/images/products/white-stained.png',
    description: 'Elegant white stained mailbox combining natural wood beauty with modern appeal.'
  }
]
</script>