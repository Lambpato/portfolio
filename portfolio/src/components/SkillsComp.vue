<script setup lang="ts">
const icons = [
  {
    id: 1,
    name: 'React',
    imgUrl: '../assets/icons/react.png',
    siteUrl: 'https://react.dev/'
  },
  {
    id: 2,
    name: 'Next.js',
    imgUrl: '../assets/icons/next-js.png',
    siteUrl: 'https://nextjs.org/'
  },
  {
    id: 3,
    name: 'Vue.js',
    imgUrl: '../assets/icons/vue.png',
    siteUrl: 'https://vuejs.org/'
  },
  {
    id: 4,
    name: 'TypeScript',
    imgUrl: '../assets/icons/typescript.png',
    siteUrl: 'https://www.typescriptlang.org/'
  },
  {
    id: 5,
    name: 'JavaScript',
    imgUrl: '../assets/icons/javascript.png',
    siteUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    id: 6,
    name: 'HTML',
    imgUrl: '../assets/icons/html.png',
    siteUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    id: 7,
    name: 'CSS',
    imgUrl: '../assets/icons/css.png',
    siteUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    id: 8,
    name: 'Bootstrap',
    imgUrl: '../assets/icons/bootstrap.png',
    siteUrl: 'https://getbootstrap.com/'
  },
  {
    id: 9,
    name: 'Tailwind',
    imgUrl: '../assets/icons/tailwind.png',
    siteUrl: 'https://tailwindcss.com/'
  },
  {
    id: 10,
    name: 'Express',
    imgUrl: '../assets/icons/express.png',
    siteUrl: 'https://expressjs.com/'
  },
  {
    id: 11,
    name: 'Node.js',
    imgUrl: '../assets/icons/node-js.png',
    siteUrl: 'https://nodejs.org/en'
  },
  {
    id: 12,
    name: 'PostgreSQL',
    imgUrl: '../assets/icons/postgresql.png',
    siteUrl: 'https://www.postgresql.org/'
  },
  {
    id: 13,
    name: 'Prisma',
    imgUrl: '../assets/icons/prisma.png',
    siteUrl: 'https://www.prisma.io/'
  },
  {
    id: 14,
    name: 'Azure',
    imgUrl: '../assets/icons/azure.png',
    siteUrl: 'https://azure.microsoft.com/en-us'
  },
  {
    id: 15,
    name: 'NPM',
    imgUrl: '../assets/icons/npm.png',
    siteUrl: 'https://www.npmjs.com/'
  },
  {
    id: 16,
    name: 'Webpack',
    imgUrl: '../assets/icons/webpack.png',
    siteUrl: 'https://webpack.js.org/'
  },
  {
    id: 17,
    name: 'Git',
    imgUrl: '../assets/icons/git.png',
    siteUrl: 'https://git-scm.com/'
  },
  {
    id: 18,
    name: 'Arduino',
    imgUrl: '../assets/icons/arduino.png',
    siteUrl: 'https://www.arduino.cc/'
  },
  {
    id: 19,
    name: 'Figma',
    imgUrl: '../assets/icons/figma.png',
    siteUrl: 'https://www.figma.com/'
  }
]

const redirectToWebsite = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div>
    <header class="p-4">
      <h1 class="text-center text-7xl">Skills</h1>
    </header>
    <div id="icons" class="grid grid-cols-2 lg:grid-cols-4 gap-y-4">
      <div
        v-for="icon in icons"
        :key="icon.id"
        @click="redirectToWebsite(icon.siteUrl)"
        class="flex justify-center items-center"
      >
        <div
          class="flex flex-col justify-center items-center w-2/4 lg:h-[160px] border-4 rounded-xl border-slate-200 cursor-pointer"
        >
          <img :src="icon.imgUrl" :alt="icon.name" class="w-24 p-4" />
          <h1 class="font-bold text-xs lg:text-lg">{{ icon.name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
