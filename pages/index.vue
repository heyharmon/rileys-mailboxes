<template>
  <div class="bg-[#fcf7e8]">
    <TheHeader />
    <Hero 
        pretitle="Serving Centerville, Utah"
        title="FRESH MAILBOXES FRESH CURB APPEAL" 
        description="Locally Owned • Satisfaction Guaranteed"
        ctaText="Makeover My Mailbox for $380"
        ctaLink="/book"
        backgroundImage="/images/homepage/hero.png"
        backgroundAlt="Beautiful home with fresh mailbox"
    />
    <Feature />
    <ChoosePost />
    <ChooseMailbox />
    <ChooseAddons />
    <HowItWorks />
    <CtaSection 
        background-image="/images/homepage/green-house.png"
        background-alt="Beautiful home with fresh mailbox"
        title="READY FOR A CURB-APPEAL UPGRADE?"
        description="LET'S REFRESH YOUR MAILBOX"
        primary-cta-text="Book Now"
        primary-cta-link="/book"
    />
    <TheFooter />
  </div>
</template>

<script setup>
// Homepage component

useSeoMeta({
  title: 'Riley\'s Mailboxes - Fresh Mailboxes, Fresh Curb Appeal | Centerville, Utah',
  description: 'Locally owned mailbox installation and renovation services in Centerville, Utah. Professional mailbox makeovers for $380 with satisfaction guaranteed.',
  ogTitle: 'Riley\'s Mailboxes - Fresh Mailboxes, Fresh Curb Appeal',
  ogDescription: 'Locally owned mailbox installation and renovation services in Centerville, Utah. Professional mailbox makeovers for $380 with satisfaction guaranteed.',
  ogImage: '/images/meta/default-og.png',
  ogUrl: 'https://rileysmailboxes.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Riley\'s Mailboxes - Fresh Mailboxes, Fresh Curb Appeal',
  twitterDescription: 'Locally owned mailbox installation and renovation services in Centerville, Utah. Professional mailbox makeovers for $380 with satisfaction guaranteed.',
  twitterImage: '/images/meta/default-og.png'
})
</script>
