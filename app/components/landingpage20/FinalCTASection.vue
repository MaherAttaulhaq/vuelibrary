<template>
  <section class="bg-muted py-16 lg:py-24">
    <div
      class="mx-auto grid max-w-container grid-cols-1 gap-16 overflow-hidden px-4 md:px-8 lg:grid-cols-2 lg:items-center"
    >
      <div class="flex max-w-3xl flex-col items-start">
        <h2
          class="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg"
        >
          No long-term contracts. No catches.
        </h2>
        <p
          class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-6 md:text-xl"
        >
          Start your 30-day free trial today.
        </p>
        <div
          class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12"
        >
          <UButton
            variant="outline"
            color="muted"
          >
            Learn more
          </UButton>
          <UButton
            variant="solid"
            color="primary"
          >
            Get started
          </UButton>
        </div>
      </div>
      <div
        class="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 justify-self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4"
      >
        <img
          src="https://www.untitledui.com/marketing/abstract-image-01.webp"
          class="size-full object-cover"
          alt="Abstract"
          style="grid-area: 3 / 3 / 7 / 7"
        >
        <img
          src="https://www.untitledui.com/marketing/abstract-image-02.webp"
          class="size-full object-cover"
          alt="Abstract"
          style="grid-area: 1 / 7 / 7 / 11"
        >
        <img
          src="https://www.untitledui.com/marketing/abstract-image-03.webp"
          class="size-full object-cover"
          alt="Abstract"
          style="grid-area: 7 / 5 / 13 / 9"
        >
        <img
          src="https://www.untitledui.com/marketing/abstract-image-04.webp"
          class="size-full object-cover"
          alt="Abstract"
          style="grid-area: 7 / 9 / 10 / 13"
        >
      </div>
    </div>
  </section>
</template>
