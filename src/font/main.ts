import localFont from 'next/font/local'

export const main = localFont({
  variable: '--font-main',
  src: [
    {
      path: './assets/ProximaNova-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: './assets/ProximaNova-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './assets/ProximaNova-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './assets/ProximaNova-Semibold.woff2',
      weight: '600',
      style: 'normal'
    },

    {
      path: './assets/ProximaNova-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './assets/ProximaNova-Extrabld.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: './assets/ProximaNova-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
})