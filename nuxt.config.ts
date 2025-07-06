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
    }
  }
})