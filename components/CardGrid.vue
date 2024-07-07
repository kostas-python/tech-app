
<template>
  <div class="bg-gradient-to-r from-gray-500 from-20% via-sky-500 via-30% to-emerald-800 to-90% bg-cover py-24 sm:py-32 ">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2  ref="el" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team!</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
      </div>
      <button ref="myHoverableElement" class="mt-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg h-8 w-20">
    {{ isHovered ? 'Thank you!' : 'Hover me!'}}
  </button>

      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <li v-for="person in people" :key="person.name" class="relative" :style="person.style" :class="person.hoverClass">
          <img class="aspect-[3/2] w-full rounded-2xl object-cover" :src="person.imageUrl" alt="" />
          <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ person.name }}</h3>
          <p class="text-base leading-7 text-gray-300">{{ person.role }}</p>
          <ul role="list" class="mt-6 flex gap-x-6">
            <li>
              <a :href="person.xUrl" class="text-gray-100 hover:text-gray-500">
                <span class="sr-only">X</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                </svg>
              </a>
            </li>
            <li>

              <a :href="person.linkedinUrl" class="text-gray-100 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import { useElementHover, type MaybeElement } from '@vueuse/core'
import { ref } from 'vue';
import { useAnimate } from '@vueuse/core'

const el = shallowRef<MaybeElement>();

  // Animation section //

useAnimate(
  el,
  [
  { clipPath: 'circle(20% at 0% 30%)' },
  { clipPath: 'circle(20% at 50% 80%)' },
  { clipPath: 'circle(20% at 100% 30%)' },
  ],
  {
    duration: 3000,
    iterations: 5,
    direction: 'alternate',
    easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
  },
);

  // Button Hover //
  
const myHoverableElement = ref()
const isHovered = useElementHover(myHoverableElement)

useMotion(myHoverableElement)



const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    style: {
      '--x': '-20px',
      '--y': '-20px'
    },
    hoverClass: 'hover:scale-105'
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    style: {
      '--x': '-120px',
      '--y': '-120px'
    },
    hoverClass: 'hover:rotate-6'
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    style: {
      '--x': '-10px',
      '--y': '10px'
    },
    hoverClass: 'hover:shadow-2xl'
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    style: {
      '--x': '10px',
      '--y': '-10px'
    },
    hoverClass: 'hover:translate-x-2 hover:translate-y-2'
  },
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    style: {
      '--x': '-15px',
      '--y': '15px'
    },
    hoverClass: 'hover:skew-x-6 hover:skew-y-6'
  },
  {
    name: 'Floyd Miles',
    role: 'Principal Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    style: {
      '--x': '15px',
      '--y': '-15px'
    },
    hoverClass: 'hover:rotate-[-6deg] hover:scale-110'
  }
]


</script>

<style scoped>
.card {
  transform: translate(var(--x), var(--y));
  transition: transform 0.3s ease-in-out;
}

.card.hover:scale-105 {
  transform: translate(var(--x), var(--y)) scale(1.05);
}

</style>
