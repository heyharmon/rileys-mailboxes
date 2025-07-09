<template>
  <div class="bg-[#fcf7e8]">
    <TheHeader />
    
    <Hero 
      title="CONTACT US"
      background-image="/images/homepage/green-house.png"
      height="h-[40vh]"
      padding-top="pt-22"
    />

    <!-- Contact Information Section -->
    <section class="py-20 bg-[#fcf7e8]">
      <div class="max-w-[1600px] mx-auto px-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div class="lg:w-5/12 lg:pl-8">
            <h2 class="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-800 uppercase tracking-tight">
              GET IN TOUCH
            </h2>
            <p class="text-lg leading-relaxed mb-8 text-gray-700 max-w-lg">
              Ready to transform your mailbox? We'd love to hear from you! Reach out today for a free quote or to schedule your mailbox makeover.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-[#e9ca5d] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Phone</h3>
                  <a href="tel:3852075487" class="text-lg text-gray-700 hover:text-gray-900 transition-colors">(385) 207-5487</a>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-[#e9ca5d] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:hello@rileysmailboxes.com" class="text-lg text-gray-700 hover:text-gray-900 transition-colors">hello@rileysmailboxes.com</a>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-[#e9ca5d] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Service Area</h3>
                  <p class="text-lg text-gray-700">Centerville, Utah</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-6/12">
            <form class="bg-white p-8 rounded-3xl shadow-lg" action="https://usebasin.com/f/2a05631523ce" method="POST" enctype="multipart/form-data" id="form">
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="firstName" class="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">First Name *</label>
                  <input type="text" id="firstName" name="firstName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent" required>
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent" required>
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="email" class="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent">
                </div>
                <div>
                  <label for="phone" class="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Phone *</label>
                  <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent" required>
                </div>
              </div>
              
              <div class="mb-8">
                <label for="message" class="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent" placeholder="Tell us about your mailbox project..."></textarea>
              </div>
              
              <div class="text-center">
                <button type="submit" class="cursor-pointer inline-block bg-[#e9ca5d] text-gray-800 px-10 py-3 text-lg font-semibold rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>



    <!-- Quick Contact Section -->
    <section class="py-20 bg-[#fcf7e8]">
      <div class="max-w-6xl mx-auto px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-black leading-tight mb-8 text-gray-800 uppercase tracking-tight">
          PREFER TO CALL OR TEXT?
        </h2>
        <p class="text-xl text-gray-700 mb-8">
          We're here to help! Give us a call or send a text for the fastest response.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:3852075487" class="inline-block bg-[#e9ca5d] text-gray-800 px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1">
            Call (385) 207-5487
          </a>
          <a href="sms:3852075487" class="inline-block bg-gray-800 text-[#fcf7e8] px-10 py-3 text-lg font-semibold no-underline rounded transition-all duration-300 hover:-translate-y-1">
            Send a Text
          </a>
        </div>
      </div>
    </section>
    
    <TheFooter />
  </div>
</template>

<script setup>
// Contact page component
</script>
