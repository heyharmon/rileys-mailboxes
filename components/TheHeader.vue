<template>
  <header class="absolute top-0 left-0 w-full z-50 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <nav class="flex justify-between items-center">
        <div class="hidden md:block">
          <ul class="flex list-none gap-8 m-0 p-0">
            <li><NuxtLink to="/about" class="text-white no-underline font-medium transition-opacity duration-300 hover:opacity-80">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-white no-underline font-medium transition-opacity duration-300 hover:opacity-80">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <NuxtLink to="/" class="flex items-center no-underline">
            <NuxtImg src="/images/logo-light.svg" alt="Riley's Mailboxes" class="h-20 w-auto" />
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="/book" class="border border-white text-white bg-neutral-800/60 px-6 py-3 no-underline font-semibold rounded transition-colors duration-300 hover:bg-white hover:text-black">
            Book Now
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Header component
</script>
