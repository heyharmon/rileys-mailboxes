<template>
  <header class="absolute top-0 left-0 w-full z-50 py-6 md:py-12">
    <div class="max-w-7xl mx-auto px-4">
      <nav class="flex justify-between items-center md:relative">
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <ul class="flex list-none gap-8 m-0 p-0">
            <li><NuxtLink to="/about" class="text-white no-underline font-medium transition-opacity duration-300 hover:opacity-80">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-white no-underline font-medium transition-opacity duration-300 hover:opacity-80">Contact</NuxtLink></li>
          </ul>
        </div>
        
        <!-- Logo - centered on desktop, left on mobile -->
        <div class="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <NuxtLink to="/" class="flex items-center no-underline">
            <NuxtImg src="/images/logo-light.svg" alt="Riley's Mailboxes" class="h-16 md:h-20 w-auto" />
          </NuxtLink>
        </div>
        
        <!-- Desktop Book Now Button -->
        <div class="hidden md:block">
          <NuxtLink to="/book" class="border border-white text-white bg-neutral-800/60 px-6 py-3 no-underline font-semibold rounded transition-colors duration-300 hover:bg-white hover:text-black">
            Book Now
          </NuxtLink>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-white p-2"
          aria-label="Toggle mobile menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
      
      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden mt-6 bg-neutral-900/95 backdrop-blur-sm rounded-lg p-6"
      >
        <ul class="flex flex-col gap-4 list-none m-0 p-0 mb-6">
          <li>
            <NuxtLink 
              to="/about" 
              class="text-white no-underline font-medium transition-opacity duration-300 hover:opacity-80 block py-2"
              @click="mobileMenuOpen = false"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/contact" 
              class="text-white no-underline font-medium transition-opacity duration-300 hover:opacity-80 block py-2"
              @click="mobileMenuOpen = false"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink 
          to="/book" 
          class="border border-white text-white bg-neutral-800/60 px-6 py-3 no-underline font-semibold rounded transition-colors duration-300 hover:bg-white hover:text-black block text-center"
          @click="mobileMenuOpen = false"
        >
          Book Now
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>
