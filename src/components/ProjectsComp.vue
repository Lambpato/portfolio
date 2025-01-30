<script setup lang="ts">
import router from '@/router'

const goToView = (href: string) => {
  router.push({ path: href })
}
import { projects } from './ProjectsArray'
</script>

<template>
  <div>
    <header class="p-4">
      <h1 class="text-center text-5xl lg:text-7xl">Projects</h1>
    </header>
    <div id="icons" class="grid grid-cols-2 md:grid-cols-3 gap-y-4">
      <div v-for="project in projects" :key="project.id" class="flex justify-center items-center">
        <div
          class="flex flex-col items-center mt-0 gap-2 w-11/12 h-fit border-4 rounded-xl border-slate-200 hover:bg-slate-600 cursor-pointer"
          @click="() => goToView(project.href)"
        >
          <img :src="project.thumbnail" :alt="project.name" class="w-auto rounded-lg" />
          <div class="m-auto text-center py-2">
            <h1 class="font-bold text-base md:text-xl">{{ project.name }}</h1>
            <p class="sm:text-xxs md:text-lg">Web Application</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
