<template>
  <header class="absolute top-0 left-0 w-full z-50 py-6">
    <div class="max-w-6xl mx-auto px-4">
      <nav class="flex justify-between items-center">
        <div>
          <NuxtLink to="/" class="flex flex-col items-center no-underline">
            <span class="text-2xl md:text-3xl font-bold text-white italic">Riley's</span>
            <span class="text-sm font-semibold text-yellow-400 tracking-wider">MAILBOXES</span>
          </NuxtLink>
        </div>
        <div class="hidden md:block">
          <ul class="flex list-none gap-8 m-0 p-0">
            <li><NuxtLink to="/about" class="text-white no-underline font-medium transition-opacity duration-300 hover:opacity-80">About</NuxtLink></li>
            <li><NuxtLink to="/programs" class="text-white no-underline font-medium transition-opacity duration-300 hover:opacity-80">Programs</NuxtLink></li>
            <li><NuxtLink to="/press" class="text-white no-underline font-medium transition-opacity duration-300 hover:opacity-80">Press</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-white no-underline font-medium transition-opacity duration-300 hover:opacity-80">Contact</NuxtLink></li>
          </ul>
        </div>
        <div>
          <NuxtLink to="/schedule" class="bg-white text-black px-6 py-3 no-underline font-semibold rounded transition-colors duration-300 hover:bg-gray-100">SCHEDULE</NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Header component
</script>
