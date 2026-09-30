// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

// Google Analytics (property 556813095, managed by Omni). Production builds only,
// so previews and local development never send visits.
const GA_ID = 'G-CLLYW9E3VR'
const analytics = process.env.VERCEL_ENV === 'production'
  ? [
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, async: true },
      {
        // Page addresses are sent without query strings or fragments, keeping only utm_* and gclid.
        // Phone link taps are sent as phone_click; form submissions send generate_lead from their pages.
        innerHTML: `
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
gtag('js', new Date());
(function () {
  var url = new URL(location.href), keep = new URLSearchParams();
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'].forEach(function (k) {
    if (url.searchParams.has(k)) keep.set(k, url.searchParams.get(k));
  });
  url.search = keep.toString();
  url.hash = '';
  gtag('config', '${GA_ID}', { page_location: url.href });
})();
document.addEventListener('click', function (e) {
  if (e.target.closest && e.target.closest('a[href^="tel:"]')) gtag('event', 'phone_click', { transport_type: 'beacon' });
});`,
      },
    ]
  : []

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts'
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  
  css: ['~/assets/css/main.css'],

  image: {
    domains: ['images.unsplash.com']
  },

  fonts: {
    defaults: {
        weights: [400],
        styles: ['normal', 'italic'],
        subsets: [
          'cyrillic-ext',
          'cyrillic',
          'greek-ext',
          'greek',
          'vietnamese',
          'latin-ext',
          'latin',
        ]
      }
  },
  
  app: {
    head: {
      title: 'Riley\'s Mailboxes - Fresh Mailboxes, Fresh Curb Appeal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Riley\'s Mailboxes - Locally owned mailbox installation and renovation services with satisfaction guaranteed.' }
      ],
      script: analytics,
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch.ong' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' }
      ]
    }
  }
})