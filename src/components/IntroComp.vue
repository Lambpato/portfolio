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
    <div class="grid lg:grid-cols-2 w-auto align-middle">
      <div>
        <img
          src="../assets/images/portait.jpeg"
          alt="Portait Picture"
          class="rounded-xl lg:w-7/12"
        />
      </div>
      <div class="flex flex-col justify-evenly">
        <div
          class="rounded-xl cursor-pointer flex flex-col gap-4 hover:bg-slate-600"
          @click="handleAbout"
        >
          <h1 class="text-2xl lg:text-5xl">Hey, I'm Lamberto Martinez!</h1>
          <p class="text-xl lg:text-2xl">
            I'm a Software Engineer highly skilled in various tools and languages! I love being able
            to bring my code to life and seeing my friends and family put my projects to use. As
            technology advances I make sure to stay on top of it and do my research which allows me
            to stay up to date and apply it to my current code!
          </p>
        </div>

        <div class="flex justify-around items-center p-3">
          <div>
            <button
              class="border-2 border-white p-2 rounded-lg text-2xl hover:bg-slate-600"
              @click="redirectToWebsite('https://www.linkedin.com/in/lambpato/')"
            >
              LinkedIn
            </button>
          </div>
          <div class="flex justify-center">
            <button
              id="border"
              class="border-2 border-white bg-white p-3 rounded-lg text-3xl text-slate-900 hover:bg-slate-600 hover:text-white"
              @click="redirectToWebsite('/resume.pdf')"
            >
              Resume
            </button>
          </div>
          <div>
            <button
              class="border-2 border-white p-2 rounded-lg text-2xl hover:bg-slate-600"
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
