<template>
  <section class="relative py-40 text-white text-center overflow-hidden">
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
        <h2 class="text-[#fcf7e8] text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 uppercase tracking-tight">
          READY FOR A CURB-<br />
          APPEAL UPGRADE?
        </h2>
        <p class="text-[#fcf7e8] text-xl md:text-2xl font-medium mb-12 tracking-wide">LET'S REFRESH YOUR MAILBOX</p>
        <div class="flex flex-col sm:flex-row gap-4 mt-4">
            <NuxtLink to="/makeover" class="inline-block bg-[#e9ca5d] text-gray-800 px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:bg-[#e9ca5d] hover:-translate-y-1">
              Book Now
            </NuxtLink>
            <NuxtLink to="/quote" class="inline-block bg-[#fcf7e8] text-gray-800 px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1">
              See a Sample
            </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Call to action section component
</script>
