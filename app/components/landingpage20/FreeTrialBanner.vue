<template>
  <section class="bg-muted-100 dark:bg-muted-900 py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col justify-between lg:flex-row">
        <div class="max-w-3xl">
          <h2
            class="text-display-sm font-semibold text-primary md:text-display-md"
          >
            Start your free trial
          </h2>
          <p
            class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
          >
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>
        <div
          class="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start lg:mt-0"
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
    </div>
  </section>
</template>
