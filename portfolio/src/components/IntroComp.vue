<script setup lang="ts">
import router from '@/router'

defineProps<{
  Section: string
}>()

const redirectToWebsite = (url: string) => {
  window.open(url, '_blank')
}

const handleAbout = () => {
  router.push({ path: '/about-me' })
}
</script>

<template>
  <div>
    <header class="p-4">
      <h1 class="text-center text-5xl lg:text-7xl">{{ Section }}</h1>
    </header>
    <div class="grid lg:grid-cols-2 w-auto">
      <div>
        <img
          src="../assets/images/portait.jpeg"
          alt="Portait Picture"
          class="rounded-xl lg:w-9/12"
        />
      </div>
      <div class="flex flex-col justify-evenly">
        <div class="cursor-pointer flex flex-col gap-4" @click="handleAbout">
          <h1 class="text-2xl lg:text-5xl">Hey, I'm Lamberto Martinez!</h1>
          <p class="text-xl lg:text-3xl">
            I'm a Software Engineer highly skilled in various tools and languages! I love being able
            to bring my code to life and seeing my friends and family put my projects to use. As
            technology advances I make sure to stay on top of it and do my research which allows me
            to stay up to date and apply it to my current code!
          </p>
        </div>

        <div class="flex justify-around p-5">
          <div>
            <button
              class="border border-white p-2 rounded-lg"
              @click="redirectToWebsite('https://www.linkedin.com/in/lambpato/')"
            >
              LinkedIn
            </button>
          </div>
          <div>
            <button
              class="border border-white p-2 rounded-lg"
              @click="redirectToWebsite('https://github.com/Lambpato')"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
