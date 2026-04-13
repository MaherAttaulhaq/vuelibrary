<script setup lang="ts">
const features = [
  {
    title: 'Share team inboxes',
    description:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page.'
  },
  {
    title: 'Deliver instant answers',
    description:
      'An all-in-one customer service platform that helps you balance everything.'
  },
  {
    title: 'Manage your team with reports',
    description: 'Measure what matters with Untitled\'s easy-to-use reports.'
  }
]
</script>

<template>
  <section class="overflow-hidden bg-muted pb-16 md:pb-24">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <div class="flex w-full flex-col lg:max-w-3xl">
        <span
          class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md"
        >Hire faster</span>
        <h2
          class="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
        >
          A seamless experience for candidates
        </h2>
        <p
          class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
        >
          Treat candidates with a rich careers site and a wonderful application
          process.
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
          <img
            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
            class="rounded-xl shadow-2xl dark:hidden"
          >
          <img
            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
            class="rounded-xl shadow-2xl not-dark:hidden"
          >
        </div>
      </div>
    </div>
  </section>
</template>
