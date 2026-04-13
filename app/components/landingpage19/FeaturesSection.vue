<script setup lang="ts">
const features = [
  {
    icon: "lucide:message-circle",
    title: "Share team inboxes",
    benefits: [
      "Leverage automation to move fast",
      "Always give customers a human to chat to",
      "Automate customer support and close leads faster",
    ],
  },
  {
    icon: "lucide:zap",
    title: "Deliver instant answers",
    benefits: [
      "Keep your customers in the loop with live chat",
      "Embed help articles right on your website",
      "Customers never have to leave the page to find an answer",
    ],
  },
  {
    icon: "lucide:bar-chart-2",
    title: "Manage your team with reports",
    benefits: [
      "Filter, export, and drilldown on the data quickly",
      "Save, schedule, and automate reports to your inbox",
      "Connect the tools you already use with 100+ integrations",
    ],
  },
];
</script>

<template>
  <section
    class="flex flex-col gap-12 overflow-hidden bg-muted pb-16 sm:gap-16 md:gap-20 md:pb-24 lg:gap-24"
  >
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <div
        class="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
      >
        <span
          class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md"
          >Features</span
        >
        <h2
          class="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
        >
          Beautiful analytics to grow smarter
        </h2>
        <p
          class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
    </div>

    <div
      class="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24"
    >
      <!-- Feature 1 -->
      <div class="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
        <div class="max-w-xl flex-1 self-center">
          <div
            class="relative flex shrink-0 items-center justify-center rounded-full size-12 bg-brand-600 text-white"
          >
            <Icon :name="features[0].icon" class="size-6" />
          </div>
          <h2
            class="mt-5 text-display-xs font-semibold text-primary md:text-display-sm"
          >
            {{ features[0].title }}
          </h2>
          <p
            class="mt-2 text-md text-muted-600 dark:text-muted-400 md:mt-4 md:text-lg"
          >
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <ul class="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
            <li
              v-for="benefit in features[0].benefits"
              :key="benefit"
              class="flex gap-3"
            >
              <Icon
                name="lucide:check-circle"
                class="shrink-0 text-brand-500 size-7"
              />
              <span
                class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg"
                >{{ benefit }}</span
              >
            </li>
          </ul>
        </div>
        <div
          class="relative -ml-4 w-screen flex-1 bg-muted-100 dark:bg-muted-900 px-4 py-6 md:ml-0 md:min-h-128 md:w-full md:overflow-hidden md:p-0 lg:overflow-visible"
        >
          <div
            class="top-0 left-0 bg-muted-100 dark:bg-muted-900 md:absolute md:h-full md:w-screen lg:overflow-hidden"
          >
            <img
              alt="Dashboard mockup"
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
              class="top-12 left-12 w-full rounded object-contain object-left-top ring-4 ring-white/10 dark:ring-black/10 md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl dark:hidden"
            />
            <img
              alt="Dashboard mockup"
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
              class="top-12 left-12 w-full rounded object-contain object-left-top ring-4 ring-white/10 dark:ring-black/10 not-dark:hidden md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl"
            />
          </div>
        </div>
      </div>

      <!-- Feature 2 -->
      <div class="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
        <div class="max-w-xl flex-1 self-center lg:order-last">
          <div
            class="relative flex shrink-0 items-center justify-center rounded-full size-12 bg-brand-600 text-white"
          >
            <Icon :name="features[1].icon" class="size-6" />
          </div>
          <h2
            class="mt-5 text-display-xs font-semibold text-primary md:text-display-sm"
          >
            {{ features[1].title }}
          </h2>
          <p
            class="mt-2 text-md text-muted-600 dark:text-muted-400 md:mt-4 md:text-lg"
          >
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
          <ul class="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
            <li
              v-for="benefit in features[1].benefits"
              :key="benefit"
              class="flex gap-3"
            >
              <Icon
                name="lucide:check-circle"
                class="shrink-0 text-brand-500 size-7"
              />
              <span
                class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg"
                >{{ benefit }}</span
              >
            </li>
          </ul>
        </div>
        <div
          class="relative -ml-4 h-90 w-screen overflow-hidden bg-muted-100 dark:bg-muted-900 px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible"
        >
          <div
            class="top-0 right-0 h-full bg-muted-100 dark:bg-muted-900 md:absolute md:w-screen lg:overflow-hidden"
          >
            <img
              alt="Mobile mockup"
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
              class="top-12 right-12 mx-auto w-71 drop-shadow-iphone-mockup md:absolute md:mx-0 md:w-78.5 md:max-w-none md:translate-x-[70%] lg:right-12 lg:translate-x-0 dark:hidden"
            />
            <img
              alt="Mobile mockup"
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
              class="top-12 right-12 mx-auto w-71 drop-shadow-iphone-mockup md:absolute md:mx-0 md:w-78.5 md:max-w-none md:translate-x-[70%] lg:right-12 lg:translate-x-0 not-dark:hidden"
            />
          </div>
        </div>
      </div>

      <!-- Feature 3 -->
      <div class="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
        <div class="max-w-xl flex-1 self-center">
          <div
            class="relative flex shrink-0 items-center justify-center rounded-full size-12 bg-brand-600 text-white"
          >
            <Icon :name="features[2].icon" class="size-6" />
          </div>
          <h2
            class="mt-5 text-display-xs font-semibold text-primary md:text-display-sm"
          >
            {{ features[2].title }}
          </h2>
          <p
            class="mt-2 text-md text-muted-600 dark:text-muted-400 md:mt-4 md:text-lg"
          >
            Measure what matters with Untitled's easy-to-use reports.
          </p>
          <ul class="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
            <li
              v-for="benefit in features[2].benefits"
              :key="benefit"
              class="flex gap-3"
            >
              <Icon
                name="lucide:check-circle"
                class="shrink-0 text-brand-500 size-7"
              />
              <span
                class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg"
                >{{ benefit }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
