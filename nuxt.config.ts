// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  target: 'static',
  head: {
    title: 'Mayzou',
    htmlAttrs: {
      lang: 'fr',
    },
  },
  buildModules: [
    '@nuxtjs/style-resources',
    '@vueuse/motion/nuxt',
    'nuxt-use-motion',
  ],
  plugins: [{ src: '@/plugins/aos', ssr: false, mode: 'client' }],

  motions: {
    directives: {
      'pop-bottom': {
        initial: {
          scale: 0,
          opacity: 0,
          y: 100,
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0,
        },
      },
    },
  },
  build: { transpile: ['aos'] },
  vite: {
    optimizeDeps: {
      exclude: ['class-validator'],
    },
  },
  css: [
    // CSS file in the project
    // SCSS file in the project
    '@/assets/styles/main.scss',
    'aos/dist/aos.css',
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;400;500;600;700&display=swap',
    },
  ],
  styleResources: {
    scss: ['~/assets/styles/main.scss', '~/assets/styles./*.scss'],
  },
});
