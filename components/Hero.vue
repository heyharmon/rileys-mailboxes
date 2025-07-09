<template>
  <section :class="`relative ${height} w-full rounded-[3rem] rounded-t-none flex items-center justify-center text-center text-white overflow-hidden`">
    <!-- Background image layer -->
    <div class="absolute inset-0 z-10">
      <NuxtImg 
        :src="backgroundImage" 
        :alt="backgroundAlt" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-gray-900/60 z-20"></div>
    
    <!-- Content -->
    <div class="relative z-30 max-w-4xl px-8" :class="paddingTop">
      <p v-if="pretitle" class="text-xl text-[#fcf7e8] mb-12">{{ pretitle }}</p>
      <h1 class="text-4xl md:text-5xl lg:text-6xl text-[#fcf7e8] font-extrabold mb-6 leading-tight uppercase">
        {{ title }}
      </h1>
      <p v-if="description" class="text-xl md:text-2xl text-[#fcf7e8] mb-12 font-normal">{{ description }}</p>
      <div v-if="ctaLink" class="mt-8">
        <NuxtLink :to="ctaLink" class="inline-block bg-[#e9ca5d] text-gray-800 px-8 py-4 text-lg font-semibold no-underline rounded hover:bg-[#e9ca5d] transition-all duration-300 hover:-translate-y-1">
          {{ ctaText }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
    pretitle: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  ctaText: {
    type: String,
  },
  ctaLink: {
    type: String,
  },
  backgroundImage: {
    type: String,
  },
  backgroundAlt: {
    type: String,
    default: 'Background'
  },
  height: {
    type: String,
    default: 'h-[68vh]'
  },
  paddingTop: {
    type: String,
    default: ''
  },
})
</script>