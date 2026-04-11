<template>
  <section class="relative py-16 md:py-24">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <div class="flex max-w-5xl flex-col">
        <h1 class="text-display-md font-medium text-white md:text-display-lg lg:text-display-xl">
          We design physical <span class="relative underline decoration-[3px] underline-offset-[0.218em] md:decoration-4">experiences</span> that create more happy in the world
        </h1>
        <p class="mt-4 max-w-sm text-lg text-white/80 md:mt-6 md:text-xl">
          We&apos;re a full-service interior design agency who specialize in simple, useful and beautiful solutions for any space.
        </p>
        <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
          <UButton variant="outline" class="border-white text-white hover:bg-white/10">
            <Icon name="lucide:play" class="size-5" />
            Showreel
          </UButton>
          <UButton variant="solid" color="primary">
            Get in touch
          </UButton>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
      <img
        alt="Two Working People"
        src="https://www.untitledui.com/marketing/two-working-people.webp"
        class="h-60 w-full object-cover md:h-[360px] lg:h-129"
      >
    </div>
  </section>
</template>
