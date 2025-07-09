<template>
  <section class="relative py-24 text-white text-center overflow-hidden">
    <!-- Background image layer -->
    <div class="absolute inset-0 z-10">
      <NuxtImg 
        src="/images/homepage/green-house.png" 
        alt="Background" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/60 z-20"></div>
    
    <!-- Content -->
    <div class="relative max-w-6xl mx-auto px-8 z-30">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 uppercase tracking-tight">
          READY FOR A CURB-<br />
          APPEAL UPGRADE?
        </h2>
        <p class="text-xl md:text-2xl font-medium mb-12 tracking-wide">LET'S REFRESH YOUR MAILBOX</p>
        <div class="mt-4">
          <a href="/quote" class="inline-block bg-white text-gray-800 px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1">Get My Free Quote</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Call to action section component
</script>
