<template>
  <section class="relative py-40 text-white text-center overflow-hidden">
    <!-- Background image layer -->
    <div class="absolute inset-0 z-10">
      <NuxtImg 
        :src="backgroundImage" 
        :alt="backgroundAlt" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/60 z-20"></div>
    
    <!-- Content -->
    <div class="relative max-w-6xl mx-auto px-8 z-30">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-[#fcf7e8] text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 uppercase tracking-tight">
          {{ title }}
        </h2>
        <p v-if="description" class="text-[#fcf7e8] text-xl md:text-2xl font-medium mb-12 tracking-wide">{{ description }}</p>
        <div class="flex flex-col sm:flex-row gap-4 mt-4">
          <NuxtLink v-if="primaryCtaText && primaryCtaLink" :to="primaryCtaLink" class="inline-block bg-[#e9ca5d] text-gray-800 px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:bg-[#e9ca5d] hover:-translate-y-1">
            {{ primaryCtaText }}
          </NuxtLink>
          <NuxtLink v-if="secondaryCtaText && secondaryCtaLink" :to="secondaryCtaLink" class="inline-block bg-[#fcf7e8] text-gray-800 px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1">
            {{ secondaryCtaText }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  backgroundImage: {
    type: String,
  },
  backgroundAlt: {
    type: String,
    default: 'Background'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  primaryCtaText: {
    type: String,
  },
  primaryCtaLink: {
    type: String,
  },
  secondaryCtaText: {
    type: String,
  },
  secondaryCtaLink: {
    type: String,
  }
})
</script>
