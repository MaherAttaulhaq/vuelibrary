<template>
  <section class="bg-muted pb-16 md:pb-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-muted-section px-6 py-10 lg:flex-row lg:p-16">
        <div class="flex max-w-3xl flex-1 flex-col">
          <h2 class="text-display-sm font-semibold text-primary">
            <span class="hidden md:inline">Start your 30-day free trial</span>
            <span class="md:hidden">Start your free trial</span>
          </h2>
          <p class="mt-4 text-lg lg:text-xl">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>
        <div class="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
          <UButton
            label="Learn more"
            color="neutral"
            variant="outline"
            size="xl"
          />
          <UButton
            label="Get started"
            color="primary"
            size="xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>
