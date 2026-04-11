<template>
  <section class="relative py-16 md:py-24">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <div class="flex max-w-5xl flex-col">
        <h1 class="text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
          We design physical <span class="relative underline decoration-[3px] underline-offset-[0.218em] md:decoration-4 lg:decoration-4">experiences</span> that create more happy in the world
        </h1>
        <p class="mt-4 max-w-sm text-lg text-muted-600 dark:text-muted-400 md:mt-6 md:text-xl">
          We&apos;re a full-service interior design agency who specialize in simple, useful and beautiful solutions for any space.
        </p>
        <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
          <UButton variant="outline" color="neutral" size="lg">
            <Icon name="lucide:play" class="size-5" />
            Showreel
          </UButton>
          <UButton variant="solid" color="primary" size="lg">
            Get in touch
          </UButton>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
      <img
        alt="Smiling Girl"
        src="https://www.untitledui.com/marketing/smiling-girl-3.webp"
        class="h-60 w-full object-cover lg:h-129"
      >
    </div>
  </section>
</template>
