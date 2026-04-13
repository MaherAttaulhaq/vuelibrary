<template>
  <section class="bg-muted pb-16 md:pb-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div
        class="grid grid-cols-1 overflow-hidden rounded-3xl bg-muted-100 dark:bg-muted-900 lg:grid-cols-2 lg:items-center"
      >
        <div class="flex flex-1 flex-col px-6 pt-10 pb-12 sm:p-12 lg:p-16">
          <h2
            class="text-display-sm font-semibold text-primary xl:text-display-md"
          >
            Join 4,000+ startups growing with Untitled
          </h2>
          <p
            class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 lg:text-xl"
          >
            Start your 30-day free trial today.
          </p>
          <div
            class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12"
          >
            <UButton variant="outline" color="muted">Learn more</UButton>
            <UButton variant="solid" color="primary">Get started</UButton>
          </div>
        </div>
        <div
          class="h-52 w-full translate-x-6 translate-y-0 sm:h-90 sm:translate-x-12 sm:translate-y-12 md:h-120 lg:w-auto"
        >
          <div
            class="w-max max-w-full rounded-[9.03px] bg-muted p-[0.9px] shadow-lg ring-[0.56px] ring-muted-300 dark:ring-muted-700 ring-inset md:rounded-[20.91px] md:p-0.5 md:ring-[1.26px] lg:max-w-3xl"
          >
            <div
              class="size-full rounded-[7.9px] bg-muted p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.68px] md:p-1 md:shadow-modern-mockup-inner-lg"
            >
              <div
                class="relative size-full overflow-hidden rounded-[6.77px] bg-muted-50 ring-[0.56px] ring-muted-200 dark:ring-muted-800 md:rounded-[15.16px] md:ring-[1.26px]"
              >
                <img
                  alt="Dashboard mockup showing application interface"
                  src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                  class="size-full object-cover object-left-top dark:hidden"
                />
                <img
                  alt="Dashboard mockup showing application interface"
                  src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                  class="size-full object-cover object-left-top not-dark:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
