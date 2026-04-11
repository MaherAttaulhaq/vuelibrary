<script setup lang="ts">
const cards = [
  {
    name: 'Layers',
    logo: 'https://www.untitledui.com/logos/logotype/white/layers.svg',
    quote: 'Untitled has saved us thousands of hours of work. We\'re able to spin up projects faster.',
    gradient: 'from-primary/80 to-primary'
  },
  {
    name: 'Sisyphus',
    logo: 'https://www.untitledui.com/logos/logotype/white/sisyphus.svg',
    quote: 'We\'ve been using Untitled to kick start every new project and can\'t work without it.',
    gradient: 'from-secondary/80 to-secondary'
  }
]
</script>

<template>
  <section class="overflow-hidden bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <!-- Header -->
      <div class="flex flex-col gap-4 max-w-3xl">
        <h2 class="text-display-sm md:text-display-md font-semibold text-highlighted">
          We've helped hundreds of global companies
        </h2>
        <p class="text-lg md:text-xl text-muted-foreground">
          Case studies from some of our amazing customers who are building faster.
        </p>
      </div>

      <!-- Cards -->
      <div class="mt-12 md:mt-16 flex gap-6 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
        <UCard
          v-for="(card, index) in cards"
          :key="index"
          class="group relative h-[470px] w-[304px] md:w-[400px] shrink-0 snap-start overflow-hidden rounded-2xl border border-default transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <!-- Gradient Background -->
          <div
            class="absolute inset-0 bg-gradient-to-br"
            :class="card.gradient"
          />

          <!-- Dark Overlay for readability -->
          <div class="absolute inset-0 bg-black/20" />

          <!-- Logo -->
          <img
            :src="card.logo"
            :alt="card.name"
            class="absolute left-6 top-6 h-10 object-contain opacity-90"
          >

          <!-- Content -->
          <div class="relative z-10 flex h-full flex-col justify-end p-6">
            <div class="rounded-xl bg-white/10 backdrop-blur-lg ring-1 ring-white/20 p-5 transition group-hover:bg-white/20">
              <p class="text-sm font-semibold text-white/80">
                {{ card.name }}
              </p>

              <q class="mt-3 block text-lg font-medium text-white leading-relaxed">
                {{ card.quote }}
              </q>

              <UButton
                variant="link"
                color="white"
                class="mt-6 p-0 group-hover:translate-x-1 transition"
              >
                Read case study
                <Icon
                  name="lucide:arrow-up-right"
                  class="ml-1 size-4"
                />
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
