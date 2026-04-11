<template>
  <div class="mx-auto max-w-container px-4 md:px-8">
    <hr class="h-px w-full border-none bg-muted-200 dark:bg-muted-800">
  </div>

  <section class="overflow-hidden bg-muted py-16 md:py-24">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <div class="flex w-full flex-col lg:max-w-3xl">
        <h2 class="text-display-sm font-semibold text-primary md:text-display-md">
          Untitled is a full-service creative agency crafting human-centric digital experiences.
        </h2>
        <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">
          We&apos;ve been designing and building beautiful digital products since 2018.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
        <ul class="flex flex-col">
          <li>
            <div class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-brand py-4 pl-5 transition hover:border-brand">
              <div>
                <h3 class="text-lg font-semibold text-primary">Share team inboxes</h3>
                <p class="mt-1 text-md text-muted-600 dark:text-muted-400">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
              </div>
              <ULink to="#" class="group inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">
                Learn more
                <Icon name="lucide:arrow-right" class="size-5" />
              </ULink>
            </div>
          </li>
          <li>
            <div class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-muted-200 py-4 pl-5 transition hover:border-brand dark:border-muted-800">
              <div>
                <h3 class="text-lg font-semibold text-primary">Deliver instant answers</h3>
                <p class="mt-1 text-md text-muted-600 dark:text-muted-400">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
              </div>
              <ULink to="#" class="group inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">
                Learn more
                <Icon name="lucide:arrow-right" class="size-5" />
              </ULink>
            </div>
          </li>
          <li>
            <div class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-muted-200 py-4 pl-5 transition hover:border-brand dark:border-muted-800">
              <div>
                <h3 class="text-lg font-semibold text-primary">Manage your team with reports</h3>
                <p class="mt-1 text-md text-muted-600 dark:text-muted-400">Measure what matters with Untitled&apos;s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
              </div>
              <ULink to="#" class="group inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">
                Learn more
                <Icon name="lucide:arrow-right" class="size-5" />
              </ULink>
            </div>
          </li>
        </ul>

        <div class="relative -ml-4 flex h-90 w-screen items-start justify-center sm:w-auto lg:h-128">
          <div class="absolute top-0 left-16 hidden w-max lg:block lg:h-168.5 lg:max-h-168.5">
            <div class="size-full rounded-[9.03px] bg-muted p-[0.9px] shadow-lg ring-[0.56px] ring-muted-300 ring-inset dark:ring-muted-700 md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px]">
              <div class="size-full rounded-[7.9px] bg-muted p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
                <div class="relative size-full overflow-hidden rounded-[6.77px] bg-muted-50 ring-[0.56px] ring-muted-200 dark:ring-muted-800 md:rounded-[20.21px] md:ring-[1.68px]">
                  <img src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp" alt="Desktop application dashboard" class="size-full object-cover object-left-top dark:hidden">
                  <img src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp" alt="Desktop application dashboard" class="size-full object-cover object-left-top not-dark:hidden">
                </div>
              </div>
            </div>
          </div>
          <div class="w-max max-w-70 lg:absolute lg:top-26 lg:left-0">
            <div class="size-full rounded-[23.89px] bg-muted p-[3px] shadow-lg ring-[1.49px] ring-muted-300 ring-inset dark:ring-muted-700">
              <div class="size-full rounded-[20.91px] bg-muted p-1 shadow-modern-mockup-inner-lg">
                <div class="relative size-full overflow-hidden rounded-[17.92px] bg-muted-50 ring-[1.49px] ring-muted-200 dark:ring-muted-800">
                  <img src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp" alt="Mobile application interface" class="size-full object-cover object-left-top dark:hidden">
                  <img src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp" alt="Mobile application interface" class="size-full object-cover object-left-top not-dark:hidden">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
