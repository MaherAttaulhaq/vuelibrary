<template>
  <section class="bg-bg-primary py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <figure class="flex w-full shrink-0 snap-start flex-col gap-8 text-center">
        <!-- Light mode logo -->
        <img
          alt="Wildcrafted"
          src="https://www.untitledui.com/logos/logotype/color/wildcrafted.svg"
          class="mx-auto h-10 dark:hidden"
          aria-hidden="true"
        >
        <!-- Dark mode logo -->
        <img
          alt="Wildcrafted"
          src="https://www.untitledui.com/logos/logotype/white/wildcrafted.svg"
          class="mx-auto hidden h-10 opacity-85 dark:block"
          aria-hidden="true"
        >
        <blockquote class="text-display-sm font-medium text-text-primary md:text-display-lg">
          We've been able to scale faster by combining our deposits, spend and controls in one account.
        </blockquote>
        <figcaption class="flex justify-center">
          <div class="flex flex-col items-center gap-4">
            <UAvatar
              src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
              alt="Amelie Laurent"
              size="lg"
            />
            <div class="flex flex-col gap-1">
              <p class="text-lg font-semibold text-text-primary">
                Amélie Laurent
              </p>
              <cite class="text-md text-text-tertiary not-italic">Finance Manager, Sisyphus</cite>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
