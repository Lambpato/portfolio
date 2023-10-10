<script setup lang="ts">
const icons = [
  {
    id: 1,
    name: 'React',
    url: '/src/components/icons/react.png'
  },
  {
    id: 2,
    name: 'Next.js',
    url: '/src/components/icons/next-js.png'
  },
  {
    id: 3,
    name: 'Vue.js',
    url: '/src/components/icons/vue.png'
  },
  {
    id: 4,
    name: 'TypeScript',
    url: '/src/components/icons/typescript.png'
  },
  {
    id: 5,
    name: 'JavaScript',
    url: '/src/components/icons/javascript.png'
  },
  {
    id: 6,
    name: 'HTML',
    url: '/src/components/icons/html.png'
  },
  {
    id: 7,
    name: 'CSS',
    url: '/src/components/icons/css.png'
  },
  {
    id: 8,
    name: 'Bootstrap',
    url: '/src/components/icons/bootstrap.png'
  },
  {
    id: 9,
    name: 'Tailwind',
    url: '/src/components/icons/tailwind.png'
  },
  {
    id: 10,
    name: 'Express',
    url: '/src/components/icons/express.png'
  },
  {
    id: 11,
    name: 'Node.js',
    url: '/src/components/icons/node-js.png'
  },
  {
    id: 12,
    name: 'PostgreSQL',
    url: '/src/components/icons/postgresql.png'
  },
  {
    id: 13,
    name: 'Prisma',
    url: '/src/components/icons/prisma.png'
  },
  {
    id: 14,
    name: 'Azure',
    url: '/src/components/icons/azure.png'
  },
  {
    id: 15,
    name: 'NPM',
    url: '/src/components/icons/npm.png'
  },
  {
    id: 16,
    name: 'Webpack',
    url: '/src/components/icons/webpack.png'
  },
  {
    id: 17,
    name: 'Git',
    url: '/src/components/icons/git.png'
  },
  {
    id: 18,
    name: 'Arduino',
    url: '/src/components/icons/arduino.png'
  },
  {
    id: 19,
    name: 'Figma',
    url: '/src/components/icons/figma.png'
  }
]
</script>

<template>
  <div>
    <header class="p-4">
      <h1 class="text-center text-7xl">Skills</h1>
    </header>
    <div id="icons" class="grid grid-cols-3 lg:grid-cols-4 gap-y-4">
      <div v-for="icon in icons" :key="icon.id" class="flex justify-center items-center">
        <div
          class="flex flex-col justify-center items-center w-2/4 h-[160px] border-4 rounded-xl border-slate-200"
        >
          <img :src="icon.url" :alt="icon.name" class="w-24 p-4" />
          <h1 class="font-bold">{{ icon.name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
