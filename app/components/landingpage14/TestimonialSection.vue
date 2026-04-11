<template>
  <div class="mx-auto max-w-container px-4 md:px-8">
    <hr class="h-px w-full border-none bg-muted-200 dark:bg-muted-800">
  </div>
  <section class="bg-muted py-16 lg:py-24">
    <div class="mx-auto flex max-w-container flex-col gap-12 overflow-hidden px-4 md:gap-16 md:px-8 lg:flex-row lg:items-center">
      <figure class="flex flex-col gap-8 md:gap-12 lg:flex-1">
        <div class="flex flex-1 flex-col gap-6 md:gap-12">
          <div aria-hidden="true" class="flex gap-1">
            <Icon v-for="index in 5" :key="index" name="lucide:star" class="size-5 fill-yellow-400 text-yellow-400" />
          </div>
          <blockquote class="origin-bottom-left text-display-sm font-medium text-balance text-primary will-change-transform sm:text-display-md md:text-display-lg">
            We&apos;ve really sped up our workflow using Untitled and haven&apos;t looked back.
          </blockquote>
        </div>
        <div class="flex flex-col justify-between gap-6 md:flex-row">
          <div class="flex origin-bottom-left gap-4 will-change-transform">
            <UAvatar src="https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80" alt="Sienna Hewitt" size="lg" />
            <figcaption class="flex flex-col gap-0.5">
              <p class="text-lg font-semibold whitespace-nowrap text-primary">
                Sienna Hewitt
              </p>
              <cite class="text-md whitespace-nowrap not-italic text-muted-500 dark:text-muted-400">Project Manager, Warpspeed</cite>
            </figcaption>
          </div>
          <div class="flex gap-4 md:gap-8">
            <UButton variant="ghost" color="neutral" class="group flex size-12 items-center justify-center rounded-full bg-muted ring-1 ring-muted-200 transition hover:bg-muted-100 dark:ring-muted-800 dark:hover:bg-muted-900 md:size-14">
              <Icon name="lucide:arrow-left" class="size-5 text-muted-400 group-hover:text-muted-600 md:size-6" />
            </UButton>
            <UButton variant="ghost" color="neutral" class="group flex size-12 items-center justify-center rounded-full bg-muted ring-1 ring-muted-200 transition hover:bg-muted-100 dark:ring-muted-800 dark:hover:bg-muted-900 md:size-14">
              <Icon name="lucide:arrow-right" class="size-5 text-muted-400 group-hover:text-muted-600 md:size-6" />
            </UButton>
          </div>
        </div>
      </figure>

      <div class="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4 lg:flex-1">
        <img src="https://www.untitledui.com/marketing/testimonial-abstract-image-01.webp" class="size-full object-cover" alt="Abstract artwork" style="grid-area: 3 / 3 / 7 / 7">
        <img src="https://www.untitledui.com/marketing/smiling-girl-3.webp" class="size-full object-cover" alt="Smiling team member" style="grid-area: 1 / 7 / 7 / 11">
        <img src="https://www.untitledui.com/marketing/ai-woman-03.webp" class="size-full object-cover" alt="Portrait" style="grid-area: 7 / 1 / 10 / 5">
        <img src="https://www.untitledui.com/marketing/two-standing-women.webp" class="size-full object-cover" alt="Two standing women" style="grid-area: 7 / 5 / 13 / 9">
        <img src="https://www.untitledui.com/marketing/smiling-girl-8.webp" class="size-full object-cover" alt="Portrait" style="grid-area: 7 / 9 / 10 / 13">
      </div>
    </div>
  </section>
</template>
