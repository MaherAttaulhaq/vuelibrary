<script setup lang="ts">
const integrations = [
  {
    name: "Notion",
    description:
      "Work faster and smarter by integrating directly with Notion, right in the app.",
  },
  {
    name: "Slack",
    description:
      "Work faster and smarter by integrating directly with Slack, right in the app.",
  },
  {
    name: "Google Drive",
    description:
      "Work faster and smarter by integrating directly with Google Drive, right in the app.",
  },
  {
    name: "Intercom",
    description:
      "Work faster and smarter by integrating directly with Intercom, right in the app.",
  },
  {
    name: "Jira",
    description:
      "Work faster and smarter by integrating directly with Jira, right in the app.",
  },
  {
    name: "Dropbox",
    description:
      "Work faster and smarter by integrating directly with Dropbox, right in the app.",
  },
];
</script>

<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <div
        class="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
      >
        <span
          class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md"
          >Integrations</span
        >
        <h2
          class="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
        >
          Get more value from your tools
        </h2>
        <p
          class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
        >
          Connect your tools, connect your teams. With over 100 apps already
          available in our directory, your team's favorite tools are just a
          click away.
        </p>
      </div>

      <div class="mt-12 md:mt-16">
        <ul
          class="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16"
        >
          <li v-for="integration in integrations" :key="integration.name">
            <div
              class="mt-6 flex max-w-sm flex-col items-center gap-4 rounded-2xl bg-muted-100 dark:bg-muted-900 px-6 pb-8 text-center"
            >
              <span
                class="-mt-[26px] flex size-13 shrink-0 items-center justify-center rounded-lg bg-muted shadow-xs ring-1 ring-muted-200 dark:ring-muted-800 md:-mt-8 md:size-16 md:rounded-xl"
              >
                <div
                  class="size-12 flex items-center justify-center md:size-14"
                >
                  <span class="text-2xl font-bold text-brand-600">{{
                    integration.name.charAt(0)
                  }}</span>
                </div>
              </span>
              <div>
                <h3 class="text-lg font-semibold text-primary">
                  {{ integration.name }} integration
                </h3>
                <p class="mt-1 text-md text-muted-600 dark:text-muted-400">
                  {{ integration.description }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
