<template>
  <footer class="bg-gray-800 text-white py-12 pb-4">
    <div class="max-w-6xl mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
        <div class="md:text-left text-center">
          <div class="flex flex-col items-start md:items-start items-center mb-4">
            <span class="text-2xl md:text-3xl font-bold text-white italic">Riley's</span>
            <span class="text-sm font-semibold text-yellow-400 tracking-wider">MAILBOXES</span>
          </div>
          <p class="text-sm text-gray-300 m-0">Fresh mailboxes, fresh curb appeal.</p>
        </div>
        <div class="md:text-left text-center">
          <ul class="list-none p-0 m-0">
            <li class="mb-2"><NuxtLink to="/about" class="text-gray-300 no-underline transition-colors duration-300 hover:text-white">About</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/programs" class="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Programs</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/press" class="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Press</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/contact" class="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="md:text-left text-center">
          <p class="text-sm mb-4 text-gray-300">
            <strong>Get in touch</strong><br>
            Schedule your mailbox makeover today
          </p>
          <NuxtLink to="/schedule" class="inline-block bg-yellow-400 text-gray-800 px-6 py-3 no-underline font-semibold rounded transition-colors duration-300 hover:bg-yellow-500">SCHEDULE NOW</NuxtLink>
        </div>
      </div>
      <div class="border-t border-gray-600 pt-4 text-center">
        <p class="text-xs text-gray-400 m-0">&copy; 2024 Riley's Mailboxes. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>