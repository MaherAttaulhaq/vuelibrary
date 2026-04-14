<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div
        class="grid grid-cols-1 items-center overflow-hidden rounded-2xl bg-muted-100 dark:bg-muted-900 md:rounded-3xl lg:grid-cols-[auto_auto]"
      >
        <div
          class="flex flex-1 flex-col gap-8 px-6 py-10 md:gap-8 md:px-8 md:py-12 lg:p-16"
        >
          <figure class="flex flex-col gap-8">
            <div class="flex flex-col gap-4 md:gap-6">
              <div aria-hidden="true" class="flex gap-1">
                <Icon
                  v-for="i in 5"
                  :key="i"
                  name="lucide:star"
                  class="size-5 text-yellow-400 fill-yellow-400"
                />
              </div>
              <blockquote
                class="origin-bottom-left text-display-xs font-medium text-balance text-primary will-change-transform sm:text-display-sm md:text-display-md"
              >
                Love the simplicity of the service and the prompt customer
                support. We can't imagine working without it.
              </blockquote>
            </div>
            <figcaption
              class="flex origin-bottom-left flex-col gap-1 will-change-transform"
            >
              <p class="text-lg font-semibold text-primary">— Renee Wells</p>
              <cite
                class="text-md text-muted-500 dark:text-muted-400 not-italic"
                >Product Designer, Quotient</cite
              >
            </figcaption>
          </figure>
        </div>
        <div
          class="relative flex h-70 w-full items-center justify-center overflow-hidden sm:h-full sm:min-h-90 lg:min-h-112 lg:w-120"
        >
          <img
            alt="Annie Stanley"
            src="https://www.untitledui.com/images/portraits/annie-stanley"
            class="absolute inset-0 size-full object-cover"
          />
          <span class="absolute flex size-full items-center justify-center">
            <div
              class="flex items-center justify-center rounded-full bg-white/30 backdrop-blur transition duration-100 ease-linear hover:bg-white/40 size-16"
            >
              <Icon name="lucide:play" class="size-5 text-white" />
            </div>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
