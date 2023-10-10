<script setup lang="ts">
import IntroComp from './IntroComp.vue'
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

  <IntroComp -section="About Me" />
  <div class="pt-8">
    <header class="p-4">
      <h1 class="text-center text-7xl">Hobbies</h1>
    </header>
    <div class="grid grid-rows-2 gap-14">
      <div class="grid lg:grid-cols-2 w-auto">
        <div><img src="./images/sewing.jpeg" alt="Sewing" class="rounded-xl lg:w-72" /></div>
        <p>
          Sewing is one of my favorite go to hobbies to take a break from coding. While coding makes
          me think all logically, sewing lets my creative side flow, and it's a hands-on, an
          experience that's totally different. When I ditch the computer for my sewing machine, I
          dive into a world of patterns and textures. It's like trading code for fabric, where I can
          whip up cool clothes and accessories. The mix of coding and sewing isn't just about
          learning new stuff, it's about finding balance in life and tackling creative challenges
          and grow from my mistakes.
        </p>
      </div>
      <div class="grid lg:grid-cols-2 w-auto">
        <div><img src="./images/gamer.jpeg" alt="Gaming" class="rounded-xl lg:w-72" /></div>
        <p>
          Gaming is my go to when I need a coding break and dont have any sewing projects in mind.
          Coding is all about being precise and logical, but FPS's is just pure fun. When I turn on
          my PC, I'm in for some seriously exciting action. I get to jump into battlegrounds, engage
          in shootouts, and tackle all sorts of challenges. It's a super enjoyable way to pass time,
          hang out with friends online. FPS gaming adds a twist to my downtime, giving me a break
          from code and letting me dive into games I enjoy to play.
        </p>
      </div>
    </div>
  </div>
</template>
