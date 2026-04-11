<script setup lang="ts">
const features = [
  {
    icon: 'lucide:message-circle',
    title: 'Share team inboxes',
    description:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    icon: 'lucide:zap',
    title: 'Deliver instant answers',
    description:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
  },
  {
    icon: 'lucide:bar-chart-2',
    title: 'Manage your team with reports',
    description:
      'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
  },
  {
    icon: 'lucide:smile',
    title: 'Connect with customers',
    description:
      'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.'
  }
]
</script>

<template>
  <section class="overflow-hidden bg-muted pt-16 lg:py-24">
    <div class="mx-auto w-full max-w-container">
      <div class="flex w-full flex-col px-4 md:px-8 lg:max-w-210">
        <span class="text-sm font-semibold text-brand-secondary md:text-md">Features</span>
        <h2
          class="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
        >
          Overflowing with useful features
        </h2>
        <p class="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div
        class="mt-12 grid grid-cols-1 gap-12 px-4 md:mt-16 md:gap-16 md:px-8 lg:grid-cols-2 lg:items-start"
      >
        <ul
          class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-y-12"
        >
          <li
            v-for="feature in features"
            :key="feature.title"
          >
            <div class="flex max-w-sm flex-col gap-4">
              <div
                class="relative shrink-0 items-center justify-center bg-primary shadow-xs-skeuomorphic ring-1 ring-primary ring-inset size-10 md:size-12 rounded-lg md:rounded-[10px] text-fg-secondary inline-flex"
              >
                <Icon
                  :name="feature.icon"
                  class="size-5 md:size-6"
                />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary">
                  {{ feature.title }}
                </h3>
                <p class="mt-1 text-md text-tertiary">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div
          class="relative -ml-4 hidden w-full md:ml-0 lg:flex lg:h-128 lg:w-full"
        >
          <img
            alt="Iphone and Screen Mockup 02"
            src="https://www.untitledui.com/marketing/screen-mockups/iphone-and-screen-mockup-light-01.webp"
            class="absolute -top-5 h-183 max-w-none object-contain dark:hidden"
          >
          <img
            alt="Iphone and Screen Mockup 02"
            src="https://www.untitledui.com/marketing/screen-mockups/iphone-and-screen-mockup-dark-01.webp"
            class="absolute -top-5 h-183 max-w-none object-contain not-dark:hidden"
          >
        </div>

        <div class="relative flex h-90 w-full justify-center lg:hidden">
          <IPhoneMockup />
        </div>
      </div>
    </div>
  </section>
</template>
