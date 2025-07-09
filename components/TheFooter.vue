<template>
  <footer class="bg-gray-800 text-white py-12 pb-4">
    <div class="max-w-7xl mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
        <div class="text-center">
          <div class="mb-4">
            <NuxtLink to="/" class="flex items-center justify-center no-underline">
              <NuxtImg src="/images/logo-light.svg" alt="Riley's Mailboxes" class="h-16 w-auto" />
            </NuxtLink>
          </div>
          <p class="text-sm text-gray-300 m-0">Fresh mailboxes, fresh curb appeal.</p>
        </div>
        <div class="text-center">
          <p class="text-sm mb-4 text-gray-300">
            <strong>Get in touch</strong><br>
            Schedule your mailbox makeover today
          </p>
          <NuxtLink to="/book" class="inline-block border border-[#e9ca5d] text-[#e9ca5d] px-6 py-3 rounded no-underline font-semibold transition-all duration-300 hover:-translate-y-1">
            Book Now
          </NuxtLink>
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