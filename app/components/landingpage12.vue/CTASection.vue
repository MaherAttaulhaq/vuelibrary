<template>
  <section class="bg-gray-50 dark:bg-gray-900/50 py-16 md:pt-0 md:pb-24">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <div class="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-gray-100 dark:bg-gray-800 px-6 py-10 lg:flex-row lg:p-16">
        <div class="flex max-w-3xl flex-1 flex-col">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            <span class="hidden md:inline">Start your 30-day free trial</span>
            <span class="md:hidden">Start your free trial</span>
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 lg:text-xl">
            Get up and running in less than 5 minutes.
          </p>
        </div>
        <div class="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
          <UButton variant="outline" label="Learn more" />
          <UButton color="primary" label="Get started" />
        </div>
      </div>
    </div>
  </section>
</template>