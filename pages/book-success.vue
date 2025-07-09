<template>
  <div class="h-[100vh] bg-[#fcf7e8]">
    <header class="flex justify-center py-8">
        <NuxtLink to="/" class="flex items-center no-underline">
            <NuxtImg src="/images/logo-dark.svg" alt="Riley's Mailboxes" class="h-20 w-auto" />
        </NuxtLink>
    </header>
    
    <!-- Success Section -->
    <section class="py-10 bg-[#fcf7e8] flex items-center">
      <div class="max-w-4xl mx-auto px-8 text-center">
        <div class="bg-white p-12 rounded-3xl shadow-lg">
          <!-- Success Icon -->
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg class="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          
          <h1 class="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-800 uppercase tracking-tight">
            APPOINTMENT REQUESTED!
          </h1>
          
          <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Thank you for booking your appointment! We'll contact you within 24 hours to confirm your visit and discuss your mailbox project.
          </p>
          
          <div class="bg-[#fcf7e8] p-6 rounded-2xl mb-8">
            <h3 class="text-lg font-bold text-gray-800 mb-4">What happens next?</h3>
            <div class="space-y-3 text-left max-w-md mx-auto">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-[#e9ca5d] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-xs font-bold text-gray-800">1</span>
                </div>
                <p class="text-gray-700">We'll call or text you to confirm your appointment</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-[#e9ca5d] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-xs font-bold text-gray-800">2</span>
                </div>
                <p class="text-gray-700">We'll visit your home with samples and ideas</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-[#e9ca5d] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-xs font-bold text-gray-800">3</span>
                </div>
                <p class="text-gray-700">You'll receive a free, no-obligation quote</p>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/" 
              class="inline-block bg-[#e9ca5d] text-gray-800 px-8 py-3 text-lg font-semibold rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg no-underline"
            >
              Back to Home
            </NuxtLink>
            <a 
              href="tel:3852075487" 
              class="inline-block bg-gray-800 text-[#fcf7e8] px-8 py-3 text-lg font-semibold rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg no-underline"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- <TheFooter /> -->
  </div>
</template>

<script setup>
// Set page title and meta tags
useSeoMeta({
  title: 'Appointment Booked - Riley\'s Mailboxes | Thank You',
  description: 'Thank you for booking your mailbox makeover appointment with Riley\'s Mailboxes! We\'ll contact you within 24 hours to confirm your visit and discuss your project.',
  ogTitle: 'Appointment Booked - Riley\'s Mailboxes',
  ogDescription: 'Thank you for booking your mailbox makeover appointment with Riley\'s Mailboxes! We\'ll contact you within 24 hours to confirm your visit and discuss your project.',
  ogImage: '/images/social/book-success-og.png',
  ogUrl: 'https://rileysmailboxes.com/book-success',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Appointment Booked - Riley\'s Mailboxes',
  twitterDescription: 'Thank you for booking your mailbox makeover appointment with Riley\'s Mailboxes! We\'ll contact you within 24 hours to confirm your visit and discuss your project.',
  twitterImage: '/images/social/book-success-og.png',
  robots: 'noindex, nofollow'
})
</script>
