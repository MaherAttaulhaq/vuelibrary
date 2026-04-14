<script setup lang="ts">
const features = [
  {
    title: 'Share team inboxes',
    description:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    title: 'Deliver instant answers',
    description:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
  },
  {
    title: 'Manage your team with reports',
    description:
      'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
  }
]
</script>

<template>
  <section class="overflow-hidden bg-muted pb-16 md:pb-24">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <div class="flex w-full flex-col lg:max-w-3xl">
        <span
          class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md"
        >Features</span>
        <h2
          class="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
        >
          Overflowing with useful features
        </h2>
        <p
          class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div
        class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center"
      >
        <ul class="flex flex-col">
          <li
            v-for="(feature, index) in features"
            :key="feature.title"
          >
            <div
              class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 py-4 pl-5 transition duration-100 ease-linear hover:border-brand"
              :class="
                index === 0
                  ? 'border-brand'
                  : 'border-muted-200 dark:border-muted-800'
              "
            >
              <div>
                <h3 class="text-lg font-semibold text-primary">
                  {{ feature.title }}
                </h3>
                <p class="mt-1 text-md text-muted-600 dark:text-muted-400">
                  {{ feature.description }}
                </p>
              </div>
              <ULink
                to="#"
                class="group inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-semibold"
              >
                Learn more
                <Icon
                  name="lucide:arrow-right"
                  class="size-5"
                />
              </ULink>
            </div>
          </li>
        </ul>

        <div
          class="relative -ml-4 flex h-90 w-screen items-start justify-center sm:w-auto lg:h-128"
        >
          <div
            class="absolute top-0 left-16 hidden w-max lg:block lg:h-168.5 lg:max-h-168.5"
          >
            <div
              class="size-full rounded-[9.03px] bg-muted p-[0.9px] shadow-lg ring-[0.56px] ring-muted-300 dark:ring-muted-700 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px]"
            >
              <div
                class="size-full rounded-[7.9px] bg-muted p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg"
              >
                <div
                  class="relative size-full overflow-hidden rounded-[6.77px] bg-muted-50 ring-[0.56px] ring-muted-200 dark:ring-muted-800 md:rounded-[20.21px] md:ring-[1.68px]"
                >
                  <img
                    alt="Dashboard mockup"
                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                    class="size-full object-cover object-left-top dark:hidden"
                  >
                  <img
                    alt="Dashboard mockup"
                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                    class="size-full object-cover object-left-top not-dark:hidden"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="w-max max-w-70 lg:absolute lg:top-26 lg:left-0">
            <div
              class="size-full rounded-[23.89px] bg-muted p-[3px] shadow-lg ring-[1.49px] ring-muted-300 dark:ring-muted-700 ring-inset"
            >
              <div
                class="size-full rounded-[20.91px] bg-muted p-1 shadow-modern-mockup-inner-lg"
              >
                <div
                  class="relative size-full overflow-hidden rounded-[17.92px] bg-muted-50 ring-[1.49px] ring-muted-200 dark:ring-muted-800"
                >
                  <img
                    alt="Mobile app interface mockup"
                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                    class="size-full object-cover object-left-top dark:hidden"
                  >
                  <img
                    alt="Mobile app interface mockup"
                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                    class="size-full object-cover object-left-top not-dark:hidden"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-modern-mockup-inner-md {
  box-shadow:
    0px 0.56px 1.13px 0px rgba(16, 24, 40, 0.06),
    0px 0.56px 1.69px 0px rgba(16, 24, 40, 0.1);
}
.shadow-modern-mockup-inner-lg {
  box-shadow:
    0px 1.68px 3.37px 0px rgba(16, 24, 40, 0.06),
    0px 1.68px 5.05px 0px rgba(16, 24, 40, 0.1);
}
</style>
