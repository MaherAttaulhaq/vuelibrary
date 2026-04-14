<script setup lang="ts">
const caseStudies = [
  {
    name: 'Layers',
    color: 'utility-brand',
    quote:
      'Untitled has saved us thousands of hours of work. We\'re able to spin up projects faster.'
  },
  {
    name: 'Sisyphus',
    color: 'utility-green',
    quote:
      'We\'ve been using Untitled to kick start every new project and can\'t work without it.'
  },
  {
    name: 'Capsule',
    color: 'utility-blue',
    quote:
      'Love the simplicity of the service and the prompt customer support.'
  },
  {
    name: 'Catalog',
    color: 'utility-indigo',
    quote:
      'Untitled has saved us thousands of hours of work. We\'re able to spin up projects faster.'
  },
  {
    name: 'Orbit',
    color: 'utility-brand',
    quote:
      'The workflow improvements are unbelievable. Everything just feels faster.'
  },
  {
    name: 'Nova',
    color: 'utility-green',
    quote:
      'A truly modern experience that helped our team scale effortlessly.'
  }
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    arrows
    dots
    :autoplay="{ delay: 3000 }"
    :items="caseStudies"
    :ui="{ item: 'basis-1/3' }"
    class="w-full"
  >
    <div
      class="relative flex h-96 cursor-grab items-end rounded-xl p-6"
      :class="`bg-${item.color}-600`"
    >
      <!-- Initial circle -->
      <div
        class="absolute top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/20"
      >
        <span class="font-semibold text-white">
          {{ item.name.charAt(0) }}
        </span>
      </div>

      <!-- Content -->
      <div
        class="flex flex-col bg-white/30 p-5 backdrop-blur-md ring-1 ring-white/30 rounded-lg"
      >
        <p class="text-lg font-semibold text-white">
          {{ item.name }}
        </p>

        <p class="mt-3 text-white text-sm">
          {{ item.quote }}
        </p>
      </div>
    </div>
  </UCarousel>
</template>
