<script setup lang="ts">
const partnerLogos = [
  "ephemeral",
  "wildcrafted",
  "codecraft",
  "convergence",
  "img-compress",
  "epicurious",
  "watchtower",
  "renaissance",
  "contrast-ai",
];
</script>

<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-16">
        <div class="flex flex-col">
          <div class="max-w-3xl">
            <h2
              class="text-display-sm font-semibold text-primary md:text-display-md"
            >
              Join over 4,000+ startups growing with Untitled
            </h2>
            <p class="mt-4 text-lg text-muted-600 md:mt-5 md:text-xl">
              Start your 30-day free trial today.
            </p>
          </div>
          <div
            class="mt-8 flex flex-col gap-3 self-stretch sm:flex-row sm:self-start md:mt-12 lg:flex-row-reverse"
          >
            <UButton variant="solid" color="primary">Get started</UButton>
            <UButton variant="outline" color="muted">Learn more</UButton>
          </div>
        </div>

        <div
          class="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-y-6 lg:mt-0"
        >
          <img
            v-for="logo in partnerLogos"
            :key="logo"
            :src="`https://www.untitledui.com/logos/logotype/color/${logo}.svg`"
            :alt="logo"
            class="h-9 md:h-10 dark:hidden"
          />
          <img
            v-for="logo in partnerLogos"
            :key="`${logo}-dark`"
            :src="`https://www.untitledui.com/logos/logotype/white/${logo}.svg`"
            :alt="logo"
            class="h-9 opacity-85 not-dark:hidden md:h-10"
          />
        </div>
      </div>
    </div>
  </section>
</template>
