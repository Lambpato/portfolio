<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path
        fill-rule="evenodd"
        d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
        clip-rule="evenodd"
      />
    </svg>
  </RouterLink>

  <div class="pt-8">
    <header class="p-4">
      <h1 class="text-center text-7xl">Weather Report</h1>
    </header>
    <div class="grid lg:grid-cols-2 place-items-center gap-14">
      <div class="w-8/12">
        <img src="../assets/gifs/WR1.gif" alt="Log In Screen" class="rounded-xl lg:w-full" />
      </div>
      <div class="w-8/12">
        <img src="../assets/gifs/WR2.gif" alt="Saved Songs View" class="rounded-xl lg:w-full" />
      </div>
    </div>
    <div class="grid lg:grid-cols-2">
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl">Links!</h1>
          <p>
            <span class="text-xl">Live Link:</span>
            <a href="https://lambpato.github.io/weather-report/" target="_blank" class="text-xl">
              https://lambpato.github.io/weather-report/</a
            >
          </p>
          <p>
            <span class="text-xl">GitHub:</span>
            <a href="https://github.com/Lambpato/weather-report" target="_blank" class="text-xl">
              https://github.com/Lambpato/weather-report</a
            >
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl">Tools and Technologies!</h1>
          <p class="text-xl">HTML, CSS, JavaScript, Ajax, and JSON</p>
        </div>
      </div>
      <div>
        <h1 class="text-3xl">About</h1>
        <p class="text-xl">
          A dynamic HTML, CSS, and JavaScript solo project which allows users to view the weather as
          well as additional forecast and allows users to add or delete a location.
        </p>
      </div>
    </div>
  </div>
</template>
