<template>
  <section class="relative py-16 md:py-24">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <div class="mx-auto flex max-w-5xl flex-col md:items-center md:text-center">
        <ULink href="#" class="rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
          <UBadge variant="subtle" color="primary" class="hidden py-1 pr-2 pl-1 text-sm font-medium md:flex">
            <UBadge variant="solid" color="primary" size="sm" class="mr-2">We're hiring!</UBadge>
            Join our design team
            <Icon name="lucide:arrow-right" class="ml-1 size-4" />
          </UBadge>
          <UBadge variant="subtle" color="primary" size="sm" class="py-1 pr-2 pl-1 text-xs font-medium md:hidden">
            <UBadge variant="solid" color="primary" size="sm" class="mr-2">We're hiring!</UBadge>
            Join our design team
            <Icon name="lucide:arrow-right" class="ml-1 size-4" />
          </UBadge>
        </ULink>

        <h1 class="mt-4 text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
          Creating stylish, functional and memorable spaces
        </h1>

        <p class="mt-4 max-w-120 text-lg text-balance text-muted-500 dark:text-muted-400 md:mt-6 md:text-xl">
          We&apos;re a full-service interior design studio who specialize in simple and timeless spaces.
        </p>

        <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
          <UButton variant="outline" color="neutral" size="lg">
            <Icon name="lucide:play" class="size-5" />
            Showreel
          </UButton>
          <UButton variant="solid" color="primary" size="lg">Chat to us</UButton>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
      <img
        alt="Geo Shapes Desktop 04"
        src="https://www.untitledui.com/marketing/geo-shapes/geo-shapes-desktop-04.svg"
        class="hidden w-full object-cover sm:block"
      >
      <img
        alt="Geo Shapes Mobile 04"
        src="https://www.untitledui.com/marketing/geo-shapes/geo-shapes-mobile-04.svg"
        class="w-full object-cover sm:hidden"
      >
    </div>
  </section>
</template>
