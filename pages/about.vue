<template>
  <div class="bg-[#fcf7e8]">
    <TheHeader />
    
    <Hero 
      title="ABOUT US"
      background-image="/images/homepage/green-house.png"
      height="h-[40vh]"
      padding-top="pt-22"
    />

    <!-- Our Story Section -->
    <section class="py-20 bg-[#fcf7e8]">
      <div class="max-w-[1600px] mx-auto px-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div class="lg:w-5/12 lg:pl-8">
            <h2 class="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-800 uppercase tracking-tight">
              OUR STORY
            </h2>
            <p class="text-lg leading-relaxed mb-6 text-gray-700 max-w-lg">
              What started as a simple weekend project has grown into a passion for transforming Centerville's neighborhoods, one mailbox at a time.
            </p>
            <p class="text-lg leading-relaxed mb-8 text-gray-700 max-w-lg">
              We believe that small details make a big difference in curb appeal, and every home deserves a beautiful, functional mailbox that reflects the pride of homeownership.
            </p>
          </div>
          <div class="lg:w-6/12">
            <div class="relative">
              <NuxtImg src="/images/about/about.png" alt="Our mailbox transformation work" class="w-full h-auto rounded-3xl object-cover shadow-none" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="py-20 bg-[#fcf7e8]">
      <div class="max-w-[1600px] mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-800 uppercase tracking-tight">
            OUR MISSION
          </h2>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto">
            To provide affordable, high-quality mailbox makeovers that enhance curb appeal and bring pride to every Centerville home.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-8">
            <div class="w-16 h-16 bg-[#e9ca5d] rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-gray-800">1</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4 uppercase">Quality First</h3>
            <p class="text-gray-700">We use only the best materials and craftsmanship to ensure your mailbox stands the test of time.</p>
          </div>
          
          <div class="text-center p-8">
            <div class="w-16 h-16 bg-[#e9ca5d] rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-gray-800">2</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4 uppercase">Local Focus</h3>
            <p class="text-gray-700">As Centerville locals, we understand our community's unique style and take pride in our neighborhood.</p>
          </div>
          
          <div class="text-center p-8">
            <div class="w-16 h-16 bg-[#e9ca5d] rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-gray-800">3</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4 uppercase">Satisfaction Guaranteed</h3>
            <p class="text-gray-700">We stand behind our work with a complete satisfaction guarantee on every mailbox makeover.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-[#fcf7e8]">
      <div class="max-w-[1600px] mx-auto px-8">
        <div class="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-24">
          <div class="lg:w-5/12 lg:pr-8">
            <h2 class="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-800 uppercase tracking-tight">
              WHY CHOOSE
              RILEY'S MAILBOXES?
            </h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-6 h-6 bg-[#e9ca5d] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-2">Locally Owned & Operated</h3>
                  <p class="text-gray-700">We're your neighbors, invested in making Centerville beautiful.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-6 h-6 bg-[#e9ca5d] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-2">Affordable Pricing</h3>
                  <p class="text-gray-700">Professional results at a price that won't break the bank.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-6 h-6 bg-[#e9ca5d] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-2">Quick Turnaround</h3>
                  <p class="text-gray-700">Most makeovers completed within a few days of scheduling.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-6 h-6 bg-[#e9ca5d] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-2">Custom Solutions</h3>
                  <p class="text-gray-700">Every mailbox is unique, and we tailor our approach to your style.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-8/12">
            <div class="relative">
              <NuxtImg src="/images/about/about-why.png" alt="Professional mailbox installation" class="w-full h-auto rounded-3xl object-cover shadow-none" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection 
      background-image="/images/homepage/green-house.png"
      background-alt="Beautiful home with fresh mailbox"
      title="READY TO GET STARTED?"
      description="LET'S TRANSFORM YOUR MAILBOX TODAY"
      primary-cta-text="Book Now"
      primary-cta-link="/book"
    />

    <TheFooter />
  </div>
</template>

<script setup>
// About page component

useSeoMeta({
  title: 'About Riley\'s Mailboxes - Local Centerville Mailbox Experts',
  description: 'Learn about Riley\'s Mailboxes, your locally owned and operated mailbox installation and renovation service in Centerville, Utah. Quality first, satisfaction guaranteed.',
  ogTitle: 'About Riley\'s Mailboxes - Local Centerville Mailbox Experts',
  ogDescription: 'Learn about Riley\'s Mailboxes, your locally owned and operated mailbox installation and renovation service in Centerville, Utah. Quality first, satisfaction guaranteed.',
  ogImage: '/images/meta/default-og.png',
  ogUrl: 'https://rileysmailboxes.com/about',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'About Riley\'s Mailboxes - Local Centerville Mailbox Experts',
  twitterDescription: 'Learn about Riley\'s Mailboxes, your locally owned and operated mailbox installation and renovation service in Centerville, Utah. Quality first, satisfaction guaranteed.',
  twitterImage: '/images/meta/default-og.png'
})
</script>
