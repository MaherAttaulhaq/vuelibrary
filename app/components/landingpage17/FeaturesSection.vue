<script setup lang="ts">
const capabilityItems = [
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
  }
]
</script>

<template>
  <section class="overflow-hidden bg-muted py-16 md:py-24">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <div class="flex w-full flex-col lg:max-w-3xl">
        <span class="text-sm font-semibold text-brand-600 md:text-md">Hire faster</span>
        <h2
          class="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
        >
          A seamless experience for candidates
        </h2>
        <p class="mt-4 text-lg text-muted-600 md:mt-5 md:text-xl">
          Treat candidates with a rich careers site and a wonderful application
          process.
        </p>
      </div>

      <div
        class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center"
      >
        <ul class="flex flex-col">
          <li
            v-for="(item, index) in capabilityItems"
            :key="item.title"
          >
            <div
              class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 py-4 pl-5 transition duration-100 ease-linear hover:border-brand"
              :class="index === 0 ? 'border-brand' : 'border-muted-200'"
            >
              <div>
                <h3 class="text-lg font-semibold text-primary">
                  {{ item.title }}
                </h3>
                <p class="mt-1 text-md text-muted-600">
                  {{ item.description }}
                </p>
              </div>
              <ULink
                to="#"
                class="group inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 font-semibold"
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

        <div class="relative -ml-4 w-screen md:w-full lg:h-140">
          <div
            class="-mx-4 flex items-center justify-center lg:absolute lg:mr-9.5 lg:-ml-0 lg:h-140 lg:w-[50vw] lg:justify-start"
          >
            <img
              src="https://www.untitledui.com/marketing/screen-mockups/mackbook-pro-screen-mockup-light.webp"
              alt="MacBook Pro displaying a professional application interface"
              class="h-full object-contain lg:max-w-none dark:hidden"
            >
            <img
              src="https://www.untitledui.com/marketing/screen-mockups/mackbook-pro-screen-mockup-dark.webp"
              alt="MacBook Pro displaying a professional application interface"
              class="h-full object-contain not-dark:hidden lg:max-w-none"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
