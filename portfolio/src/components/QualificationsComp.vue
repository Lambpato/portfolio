<script setup lang="ts">
const redirectToWebsite = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="cursor-pointer" @click="redirectToWebsite('https://learningfuze.com/')">
    <header class="p-4">
      <h1 class="text-center text-5xl lg:text-7xl">Qualifications</h1>
    </header>
    <div class="flex flex-col gap-10">
      <div class="flex gap-8">
        <img
          src="../assets/images/LearningFuze.jpeg"
          alt="LearningFuze Logo"
          class="rounded-lg w-[200px] h-[200px]"
        />
        <div class="flex flex-col">
          <div>
            <h1 class="font-bold text-xl">LearningFuze</h1>
            <p class="font-extralight">January 2023 - April 2023</p>
          </div>
          <div class="flex flex-col m-auto">
            <p>
              Full Immersion Program for a career in Software Development in a simulated, agile work
              environment.
            </p>
            <p>
              Over 800 total hours of programming (70+ hours/week) in a simulated work
              environmentFull-Stack Web Development Over 800 total hours of programming (70+
              hours/week) in a simulated work environment
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex gap-8 cursor-pointer"
        @click="redirectToWebsite('https://www.linkedin.com/in/robert-gardner-phd/')"
      >
        <img
          src="../assets/images/Robert.jpeg"
          alt="Robert"
          class="rounded-lg w-[200px] h-[200px]"
        />
        <div class="flex flex-col gap-4">
          <div>
            <h1 class="font-bold text-xl">Robert Gardner, Ph.D.</h1>
            <p class="font-extralight">Software Developer Instructor</p>
            <p class="font-extralight">April 28, 2023, Robert was Lamberto's Instructor</p>
          </div>
          <div class="flex flex-col m-auto gap-5">
            <p>
              I taught Lamberto at LearningFuze, where he learned full stack development with React,
              Node, and PostgreSQL. This was an intense course that required Lamberto to write a
              full stack application on his own.
            </p>
            <p>
              At LearningFuze, Lamberto developed a great sense for writing software. He studied
              hard, asked probing and insightful questions, worked his way over any hurdles he
              faced, and became a solid developer. For his final project, Lamberto wrote a fun app
              that lets the user upload their favorite music or take photos and upload them.
              Lamberto learned, on his own, several technologies for this, such as React Router,
              Bootstrap and React Bootstrap.
            </p>
            <p>
              Lamberto was a solid student who developed a good understanding of how the computer
              works, how to write good, clean code, and how to design and organize the code to make
              it easy to work with. He has a good grasp of basic data structures and complexity
              analysis and how to use them to solve common software problems. Lamberto has an
              outstanding work ethic and strives to always do his best work. I was impressed with
              how deep he would dive into the exercises, asking solid questions to make sure he
              understood the material correctly. He knows how to learn and when to ask questions;
              and then how to understand and make use of the answers to his questions.
            </p>
            <p>
              As a former Director of Engineering at Google, I can say with confidence that Lamberto
              will be an asset to any team he joins.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
