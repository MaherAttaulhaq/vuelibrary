<template>
  <section class="overflow-hidden bg-muted py-16 md:py-24">
    <div
      class="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2"
    >
      <div class="flex w-full max-w-3xl flex-col">
        <h1
          class="text-display-sm font-semibold text-primary md:text-display-lg"
        >
          Join 4,000+ startups growing with Untitled
        </h1>
        <ul class="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
          <li class="flex gap-3">
            <Icon
              name="lucide:check-circle"
              class="shrink-0 text-brand-500 size-7"
            />
            <span
              class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg"
              >30-day free trial</span
            >
          </li>
          <li class="flex gap-3">
            <Icon
              name="lucide:check-circle"
              class="shrink-0 text-brand-500 size-7"
            />
            <span
              class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg"
              >Personalized onboarding</span
            >
          </li>
          <li class="flex gap-3">
            <Icon
              name="lucide:check-circle"
              class="shrink-0 text-brand-500 size-7"
            />
            <span
              class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg"
              >Access to all features</span
            >
          </li>
        </ul>
        <div
          class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12"
        >
          <UButton variant="outline" color="muted">Learn more</UButton>
          <UButton variant="solid" color="primary">Get started</UButton>
        </div>
      </div>
      <div class="relative mx-auto w-full lg:h-128">
        <div
          class="top-0 left-0 w-full max-w-5xl rounded-[9.03px] bg-muted p-[0.9px] shadow-lg ring-[0.56px] ring-muted-300 dark:ring-muted-700 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px] lg:absolute lg:w-max"
        >
          <div
            class="rounded-[7.9px] bg-muted p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg"
          >
            <div
              class="relative overflow-hidden rounded-[6.77px] bg-muted-50 ring-[0.56px] ring-muted-200 dark:ring-muted-800 md:rounded-[20.21px] md:ring-[1.68px]"
            >
              <img
                alt="Dashboard mockup"
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                class="object-cover object-left-top dark:hidden"
              />
              <img
                alt="Dashboard mockup"
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                class="object-cover object-left-top not-dark:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
