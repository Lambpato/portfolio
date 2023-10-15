<script setup lang="ts">
const projects = [
  {
    id: 1,
    name: 'Weather Report',
    thumbnail: '/src/assets/thumbnails/weather-report.png'
  },
  {
    id: 2,
    name: 'LSP',
    thumbnail: '/src/assets/thumbnails/lsp.png'
  }
]
</script>

<template>
  <header class="p-4">
    <h1 class="text-center text-7xl">Projects</h1>
  </header>
  <div id="icons" class="grid grid-cols-2 lg:grid-cols-2 gap-y-4">
    <div v-for="project in projects" :key="project.id" class="flex justify-center items-center">
      <div
        class="flex flex-col items-center mt-0 w-2/4 lg:h-[300px] border-4 rounded-xl border-slate-200 cursor-pointer"
      >
        <img :src="project.thumbnail" :alt="project.name" class="w-auto" />
        <div class="m-auto text-center">
          <h1 class="font-bold text-xs lg:text-lg">{{ project.name }}</h1>
          <p>Web Application</p>
        </div>
      </div>
    </div>
  </div>
</template>
