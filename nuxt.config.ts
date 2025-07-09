// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch.ong' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' }
      ]
    }
  }
})