<script setup lang="ts">
const caseStudies = [
  {
    name: 'Layers',
    logo: 'layers',
    color: 'utility-brand',
    quote:
      'Untitled has saved us thousands of hours of work. We\'re able to spin up projects faster.'
  },
  {
    name: 'Sisyphus',
    logo: 'sisyphus',
    color: 'utility-green',
    quote:
      'We\'ve been using Untitled to kick start every new project and can\'t work without it.'
  },
  {
    name: 'Capsule',
    logo: 'capsule',
    color: 'utility-blue',
    quote:
      'Love the simplicity of the service and the prompt customer support.'
  },
  {
    name: 'Catalog',
    logo: 'catalog',
    color: 'utility-indigo',
    quote:
      'Untitled has saved us thousands of hours of work. We\'re able to spin up projects faster.'
  }
]
</script>

<template>
  <section class="overflow-hidden bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col justify-between gap-8 lg:flex-row lg:gap-0">
        <div class="flex max-w-3xl flex-col gap-4 md:gap-5">
          <h2
            class="text-display-sm font-semibold text-primary md:text-display-md"
          >
            We've helped grow hundreds of companies
          </h2>
          <p class="text-lg text-muted-600 md:text-xl">
            Case studies from some of our amazing customers who are building
            faster.
          </p>
        </div>
        <div
          class="flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start"
        >
          <UButton
            variant="outline"
            color="muted"
          >
            Our customers
          </UButton>
          <UButton
            variant="solid"
            color="primary"
          >
            Create account
          </UButton>
        </div>
      </div>

      <div
        class="relative mt-12 md:mt-16"
        role="region"
        aria-roledescription="carousel"
      >
        <div class="h-full w-full">
          <div class="flex max-h-full gap-6 pr-4 md:gap-8 md:pr-8">
            <div
              v-for="study in caseStudies"
              :key="study.name"
              class="min-w-0 grow-0 basis-full relative flex h-118 max-w-76 shrink-0 cursor-grab items-end p-6 md:h-126 md:w-full md:max-w-sm md:p-5"
              :class="`bg-${study.color}-600`"
            >
              <div
                class="absolute top-6 left-6 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center md:top-8 md:left-8"
              >
                <span class="text-white font-semibold">{{
                  study.name.charAt(0)
                }}</span>
              </div>
              <div
                class="flex cursor-auto flex-col bg-white/30 px-4 py-5 ring-1 ring-white/30 backdrop-blur-md ring-inset md:p-5 md:px-6 md:py-8"
              >
                <p
                  class="text-display-xs font-semibold text-white md:text-display-sm"
                >
                  {{ study.name }}
                </p>
                <q
                  class="mt-3 text-lg font-medium text-balance text-white md:mt-4"
                >{{ study.quote }}</q>
                <ULink
                  to="#"
                  class="group inline-flex items-center gap-1.5 mt-8 text-white hover:text-white/80 font-semibold"
                >
                  Read case study
                  <Icon
                    name="lucide:arrow-up-right"
                    class="size-5"
                  />
                </ULink>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex gap-4 md:gap-8">
          <UButton
            variant="ghost"
            color="muted"
            class="group flex size-12 items-center justify-center rounded-full bg-muted ring-1 ring-muted-200 transition duration-100 ease-linear hover:bg-muted-100 md:size-14"
          >
            <Icon
              name="lucide:arrow-left"
              class="size-5 text-muted-400 group-hover:text-muted-600 md:size-6"
            />
          </UButton>
          <UButton
            variant="ghost"
            color="muted"
            class="group flex size-12 items-center justify-center rounded-full bg-muted ring-1 ring-muted-200 transition duration-100 ease-linear hover:bg-muted-100 md:size-14"
          >
            <Icon
              name="lucide:arrow-right"
              class="size-5 text-muted-400 group-hover:text-muted-600 md:size-6"
            />
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
