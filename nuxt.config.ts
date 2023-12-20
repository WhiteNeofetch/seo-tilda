// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '89937555',
        webvisor: true,
        // consoleLog: true,
        // clickmap: true,
        // useCDN: false,
        // trackLinks: true,
        // accurateTrackBounce: true,
      }
    ]
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
