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
      <h1 class="text-center text-5xl lg:text-7xl">ChatGPTStyler</h1>
    </header>
    <div class="grid lg:grid-cols-2 place-items-center gap-14">
      <div class="w-8/12">
        <img
          src="../assets/gifs/ChatGPTStyler1.gif"
          alt="Log In Screen"
          class="rounded-xl lg:w-full"
        />
      </div>
      <div class="w-8/12">
        <img
          src="../assets/gifs/ChatGPTStyler2.gif"
          alt="Saved Songs View"
          class="rounded-xl lg:w-full"
        />
      </div>
    </div>
    <div class="grid lg:grid-cols-2">
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl">Links!</h1>
          <p>
            <span class="text-xl">Live Link:</span>
            <a
              href="https://chromewebstore.google.com/detail/chatgpt-styler/mmfefeellkogplnodhfnggcpkomlaapj?hl=en&authuser=0&pli=1"
              target="_blank"
              class="text-xl"
            >
              https://chromewebstore.google.com/detail/chatgpt-styler/</a
            >
          </p>
          <p>
            <span class="text-xl">GitHub:</span>
            <a
              href="https://github.com/joseph-w-valdez/chatGPTStyler"
              target="_blank"
              class="text-xl"
            >
              https://github.com/joseph-w-valdez/chatGPTStyler</a
            >
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl">Tools and Technologies!</h1>
          <p class="text-xl">React, Typescript, Tailwind, Webpack, Jest, Storybook, and Chrome</p>
        </div>
        <div class="gap-1">
          <h1 class="text-3xl">About</h1>
          <p class="text-xl">
            A Chromium web extension created by an organized team of software engineers to transform
            the UI of ChatGPT. Users are able to customize the appearance of its site!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
