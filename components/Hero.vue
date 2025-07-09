<template>
    <section class="relative h-[80vh] w-full rounded-[4rem] rounded-t-none flex items-center justify-center text-center text-white overflow-hidden">
      <!-- Background image layer -->
      <div class="absolute inset-0 z-10">
        <NuxtImg 
          src="/images/homepage/hero.png" 
          alt="Background" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/60 z-20"></div>
      
      <!-- Content -->
      <div class="relative z-30 max-w-4xl px-8">
        <p class="text-xl text-[#fcf7e8] mb-12">Serving Centerville, Utah</p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl text-[#fcf7e8] font-extrabold mb-6 leading-tight uppercase">
          FRESH MAILBOXES
          FRESH CURB APPEAL
        </h1>
        <p class="text-xl md:text-2xl text-[#fcf7e8] mb-12 font-normal">Locally Owned • Satisfaction Guaranteed</p>
        <div class="mt-8">
          <NuxtLink to="/makeover" class="inline-block bg-[#e9ca5d] text-gray-800 px-8 py-4 text-lg font-semibold no-underline rounded transition-colors duration-300 hover:bg-[#e9ca5d]">
            Makeover My Mailbox for $229
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Hero section component
  </script>