<template>
  <section class="relative bg-muted py-16 md:py-24">
    <div class="mx-auto w-full max-w-[1560px] px-4 md:px-8">
      <div class="flex max-w-3xl flex-col items-start">
        <h1 class="text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">
          Simple, transparent business credit cards
        </h1>
        <p class="mt-4 text-lg md:mt-6 md:text-xl">
          Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free trial.
        </p>
        <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
          <UButton
            label="Demo"
            icon="i-heroicons-play-circle"
            color="neutral"
            variant="outline"
            size="lg"
          />
          <UButton
            label="Sign up"
            color="primary"
            size="lg"
          />
        </div>
      </div>
    </div>

    <!-- Credit Cards Showcase -->
    <div class="relative mt-16 w-full max-w-[1560px] md:mx-auto md:mt-24 md:px-8">
      <div class="h-80 w-full bg-muted-alt md:h-120 md:rounded-2xl" />

      <div class="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden sm:pl-[30vw] md:inset-x-8 md:rounded-2xl md:pl-0">
        <div
          class="flex w-max flex-col gap-4"
          :style="{ transform: isMobile ? 'scale(0.585) rotate(30deg) translate(-87px, 799px)' : 'rotate(30deg) translate(416px, 177px)' }"
        >
          <!-- Row 1 -->
          <div class="flex gap-4 pl-40">
            <CreditCard
              v-for="i in 3"
              :key="`r1-${i}`"
              variant="primary"
              name="Phoenix Baker"
            />
          </div>
          <!-- Row 2 -->
          <div class="flex gap-4">
            <CreditCard
              variant="dark"
              name="Phoenix Baker"
            />
            <CreditCard
              variant="light"
              name="Phoenix Baker"
            />
            <CreditCard
              variant="glass"
              name="Phoenix Baker"
            />
          </div>
          <!-- Row 3 -->
          <div class="flex gap-4 pl-40">
            <CreditCard
              variant="glass"
              name="Phoenix Baker"
            />
            <CreditCard
              variant="primary"
              name="Phoenix Baker"
            />
          </div>
          <!-- Row 4 -->
          <div class="flex gap-4">
            <CreditCard
              variant="primary"
              name="Phoenix Baker"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768
})
</script>