<script setup lang="ts">
const features = [
  {
    icon: 'lucide:message-circle',
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    icon: 'lucide:zap',
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
  }
]
</script>

<template>
  <section class="bg-muted">
    <div class="bg-muted-100 pt-16 pb-[112px] dark:bg-muted-900 md:pt-24 md:pb-40">
      <div class="mx-auto grid w-full max-w-container grid-cols-1 gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2 lg:gap-24">
        <div class="flex w-full flex-col">
          <span class="text-sm font-semibold text-primary md:text-md">Who we are</span>
          <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
            Commercial interior designers
          </h2>
          <p class="mt-4 text-lg text-default md:mt-5 md:text-xl">
            Untitled are a commercial interior design studio. We specialize in customised office design, restaurant design, shop design, and studio design.
          </p>
        </div>

        <ul class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-1">
          <li v-for="feature in features" :key="feature.title">
            <div class="flex max-w-140 gap-4">
              <div class="relative hidden size-12 shrink-0 items-center justify-center rounded-[10px] bg-primary text-muted-600 shadow-xs ring-1 ring-muted-200 dark:text-muted-400 dark:ring-muted-800 md:inline-flex">
                <Icon :name="feature.icon" class="size-6" />
              </div>
              <div class="relative inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-muted-600 shadow-xs ring-1 ring-muted-200 dark:text-muted-400 dark:ring-muted-800 md:hidden">
                <Icon :name="feature.icon" class="size-5" />
              </div>
              <div class="flex flex-col items-start gap-4">
                <div>
                  <h3 class="mt-1.5 text-lg font-semibold text-primary md:mt-2.5">
                    {{ feature.title }}
                  </h3>
                  <p class="mt-1 text-md text-default">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="mx-auto -mt-16 flex w-full max-w-container justify-center px-4 pb-16 md:-mt-24 md:px-8 md:pb-24">
      <img src="https://www.untitledui.com/marketing/workspace.webp" alt="Workspace" class="h-60 w-full object-cover md:h-100 lg:h-129">
    </div>
  </section>
</template>
