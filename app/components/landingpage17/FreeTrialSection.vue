<template>
  <section class="overflow-hidden bg-muted py-16 md:pt-24 md:pb-0">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col justify-center text-center">
        <h2
          class="text-display-sm font-semibold text-primary md:text-display-md"
        >
          <span class="hidden md:inline">Start your 30-day free trial</span>
          <span class="md:hidden">Start your free trial</span>
        </h2>
        <p class="mt-4 text-lg text-muted-600 md:mt-5 md:text-xl">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div
          class="mt-8 flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-center"
        >
          <UButton variant="outline" color="muted">Learn more</UButton>
          <UButton variant="solid" color="primary">Get started</UButton>
        </div>
      </div>
    </div>

    <div
      class="mx-auto mt-16 w-full max-w-container px-4 md:max-h-100 md:overflow-hidden md:px-8"
    >
      <div
        class="size-full rounded-[9.03px] bg-muted p-[0.9px] shadow-lg ring-[0.56px] ring-muted-300 ring-inset md:rounded-[32px] md:p-1 md:ring-[2px]"
      >
        <div
          class="size-full rounded-[7.9px] bg-muted p-0.5 shadow-modern-mockup-inner-md md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg"
        >
          <div
            class="relative size-full overflow-hidden rounded-[6.77px] bg-muted-50 ring-[0.56px] ring-muted-200 md:rounded-[24px] md:ring-[2px]"
          >
            <img
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
              class="size-full object-cover dark:hidden"
              alt="Dashboard mockup showing application interface"
            />
            <img
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
              class="size-full object-cover not-dark:hidden"
              alt="Dashboard mockup showing application interface"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
