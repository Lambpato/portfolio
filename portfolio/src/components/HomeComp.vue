<script setup lang="ts">
import IntroComp from './IntroComp.vue'
import router from '@/router'

const handleAbout = () => {
  router.push({ path: '/about-me' })
}
</script>

<template>
  <IntroComp -section="Introduction" class="cursor-pointer" @click="handleAbout" />
</template>
