<!-- components/CTAScreenMockup.vue -->
<template>
  <section class="overflow-hidden bg-muted py-16 md:pt-24 md:pb-0">
    <UContainer>
      <div class="flex flex-col justify-center text-center">
        <h2 class="text-3xl font-semibold text-primary md:text-4xl">
          <span class="hidden md:inline">Start your 30-day free trial</span>
          <span class="md:hidden">Start your free trial</span>
        </h2>
        <p class="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div class="mt-8 flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-center">
          <UButton color="secondary" size="xl">Learn more</UButton>
          <UButton color="primary" size="xl">Get started</UButton>
        </div>
      </div>
    </UContainer>

    <!-- Dashboard Mockup -->
    <div class="mx-auto mt-16 w-full max-w-container px-4 md:max-h-100 md:overflow-hidden md:px-8">
      <div class="size-full rounded-lg bg-muted p-px shadow-lg ring-1 ring-secondary ring-inset md:rounded-2xl md:p-1 md:ring-2">
        <div class="size-full rounded-md bg-muted p-0.5 shadow-inner md:rounded-xl md:p-1.5">
          <div class="relative size-full overflow-hidden rounded bg-muted ring-1 ring-secondary md:rounded-lg md:ring-2">
            <img
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
              class="size-full object-cover dark:hidden"
              alt="Dashboard mockup"
            />
            <img
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
              class="size-full object-cover not-dark:hidden"
              alt="Dashboard mockup"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>