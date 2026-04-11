<script setup lang="ts">
const stats = [
  {
    value: '400+',
    title: 'Projects completed',
    description: 'We\'ve helped build over 400 amazing projects.'
  },
  {
    value: '600%',
    title: 'Return on investment',
    description: 'Our customers have reported an average of ~600% ROI.'
  },
  {
    value: '10k',
    title: 'Global downloads',
    description: 'Our free UI kit has been downloaded over 10k times.'
  },
  {
    value: '200+',
    title: '5-star reviews',
    description: 'We\'re proud of our 5-star rating with over 200 reviews.'
  }
]
</script>

<template>
  <div class="mx-auto max-w-container px-4 md:px-8">
    <hr class="h-px w-full border-none bg-muted-200 dark:bg-muted-800">
  </div>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col gap-12 md:gap-16">
        <div class="flex w-full flex-col md:max-w-3xl">
          <p class="text-sm font-semibold text-primary md:text-md">
            Launch faster
          </p>
          <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
            Creating memorable spaces
          </h2>
          <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">
            We design physical experiences that create more happy in the world.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
          <dl class="grid grid-cols-1 gap-8 self-center md:grid-cols-2 md:gap-y-16 md:pr-8">
            <div v-for="stat in stats" :key="stat.title" class="flex flex-1 flex-col-reverse gap-3 text-center">
              <div class="flex flex-col gap-1">
                <dt class="text-lg font-semibold text-primary">
                  {{ stat.title }}
                </dt>
                <p class="text-md text-muted-600 dark:text-muted-400">
                  {{ stat.description }}
                </p>
              </div>
              <dd class="text-display-lg font-semibold text-primary md:text-display-xl">
                {{ stat.value }}
              </dd>
            </div>
          </dl>
          <img src="https://www.untitledui.com/marketing/photographer-girl.webp" alt="Professional female photographer holding a camera in natural lighting" class="h-70 w-full object-cover md:h-140">
        </div>
      </div>
    </div>
  </section>
</template>
