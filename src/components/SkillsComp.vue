<script setup lang="ts">
import { icons } from './SkillsArray'

const redirectToWebsite = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <section>
    <header class="p-4">
      <h1 class="text-center text-5xl lg:text-7xl">Skills</h1>
    </header>
    <div id="icons" class="grid grid-cols-3 lg:grid-cols-4 gap-y-4">
      <div v-for="icon in icons" :key="icon.id" class="flex justify-center items-center">
        <div
          class="flex flex-col justify-center items-center lg:w-2/4 h-[160px] border-4 rounded-xl border-slate-200 hover:bg-slate-600 cursor-pointer"
          @click="redirectToWebsite(icon.siteUrl)"
        >
          <img :src="icon.imgUrl" :alt="icon.name" class="w-24 p-4" />
          <h1 class="font-bold text-xs lg:text-lg">{{ icon.name }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>
