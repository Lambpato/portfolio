<script setup lang="ts">
import IntroComp from './IntroComp.vue'
import SkillsComp from './SkillsComp.vue'
import ProjectsComp from './ProjectsComp.vue'
import QualificationsComp from './QualificationsComp.vue'
import router from '@/router'

const handleAbout = () => {
  router.push({ path: '/about-me' })
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <IntroComp -section="Introduction" class="cursor-pointer" @click="handleAbout" />
    <SkillsComp />
    <ProjectsComp />
    <QualificationsComp />
  </div>
</template>
