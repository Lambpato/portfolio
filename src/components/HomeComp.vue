<script setup lang="ts">
import IntroComp from './IntroComp.vue'
import SkillsComp from './SkillsComp.vue'
import ProjectsComp from './ProjectsComp.vue'
import QualificationsComp from './QualificationsComp.vue'
</script>

<template>
  <div class="flex flex-col gap-20">
    <IntroComp -section="Introduction" />
    <SkillsComp />
    <ProjectsComp />
    <QualificationsComp />
  </div>
</template>
