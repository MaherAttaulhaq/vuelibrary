<template>
  <section class="bg-muted-100 py-16 dark:bg-muted-900 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <figure class="flex flex-col gap-10 lg:flex-row lg:gap-32">
        <img
          alt="Mathilde Lewis"
          src="https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80"
          class="size-[200px] rounded-2xl object-cover md:size-[328px]"
          aria-hidden="true"
        >
        <div class="flex flex-col gap-8 md:-ml-2">
          <div class="flex flex-col gap-4 md:gap-6">
            <div aria-hidden="true" class="flex gap-1">
              <Icon v-for="index in 5" :key="index" name="lucide:star" class="size-5 fill-yellow-400 text-yellow-400" />
            </div>
            <blockquote class="text-display-xs font-medium text-primary md:text-display-md">
              Untitled really understood the paired-back aesthetic that we were looking for. We couldn&apos;t be happier with our new offices.
            </blockquote>
          </div>
          <figcaption class="flex flex-col gap-1">
            <p class="text-lg font-semibold text-primary">
              Candice Wu
            </p>
            <cite class="text-md not-italic text-muted-500 dark:text-muted-400">
              Head of Design, Layers
            </cite>
          </figcaption>
        </div>
      </figure>
    </div>
  </section>
</template>
