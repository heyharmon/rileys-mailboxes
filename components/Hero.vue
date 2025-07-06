<template>
  <section class="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
    <div class="absolute inset-0 z-10" style="background: url('https://placehold.co/600x400'); background-size: cover; background-position: center;">
      <!-- We'll use a div with background styling for now, but in production you would use NuxtImg -->
    </div>
    <div class="absolute inset-0 bg-black bg-opacity-40 z-20"></div>
    <div class="relative z-30 max-w-4xl px-8">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight uppercase">
        FRESH MAILBOXES,<br />
        FRESH CURB APPEAL.
      </h1>
      <p class="text-xl md:text-2xl mb-12 font-normal">Locally Owned • Satisfaction Guaranteed</p>
      <div class="mt-8">
        <NuxtLink to="/makeover" class="inline-block bg-yellow-400 text-gray-800 px-8 py-4 text-lg font-semibold no-underline rounded transition-colors duration-300 hover:bg-yellow-500">
          Makeover My Mailbox for $129
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero section component
</script>
