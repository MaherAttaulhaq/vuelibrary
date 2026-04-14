<template>
  <div class="relative overflow-hidden">
    <img
      alt="Grid background pattern"
      aria-hidden="true"
      src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
      class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
    />
    <img
      alt="Grid background pattern"
      aria-hidden="true"
      src="https://www.untitledui.com/patterns/light/grid-md-mobile.svg"
      class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2] md:hidden"
    />

    <section class="py-16 md:pb-24">
      <div
        class="relative mx-auto grid max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:min-h-160 lg:items-center"
      >
        <div class="z-10 flex max-w-200 flex-col items-start">
          <h1
            class="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl"
          >
            Customer service software for customer-first teams
          </h1>
          <p
            class="mt-4 max-w-xl text-lg text-muted-600 dark:text-muted-400 md:mt-6 md:text-xl"
          >
            The best customer service software for customer-first teams.
            Industry-leading email and live chat support.
          </p>
          <div
            class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start"
          >
            <UButton variant="outline" color="muted" size="lg">
              <Icon name="lucide:play" class="size-5" />
              Demo
            </UButton>
            <UButton variant="solid" color="primary" size="lg">Sign up</UButton>
          </div>
        </div>
        <div
          class="relative lg:absolute lg:top-0 lg:right-8 lg:h-full lg:w-140"
        >
          <img
            class="inset-0 h-60 w-full rounded-tr-[32px] rounded-bl-[32px] object-cover md:h-110 md:rounded-tr-[64px] md:rounded-bl-[64px] lg:h-full"
            src="https://www.untitledui.com/marketing/workspace.webp"
            alt="Workspace"
          />
        </div>
      </div>
    </section>
  </div>
</template>
