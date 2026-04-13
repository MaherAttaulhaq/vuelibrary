<template>
  <section class="bg-muted pb-16 pt-8 md:pb-24 md:pt-16">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col gap-x-16 gap-y-8 lg:flex-row lg:items-center">
        <div class="flex max-w-2xl flex-1 flex-col">
          <h1 class="text-display-lg font-bold text-primary md:text-display-xl">
            A better way to
            <span class="text-primary">send money</span>
          </h1>
          <p class="mt-6 text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <UButton
              label="Get started"
              color="primary"
              size="lg"
            />
            <UButton
              label="Learn more"
              variant="outline"
              color="neutral"
              size="lg"
            />
          </div>
        </div>
        <div class="flex flex-1 justify-center lg:justify-end">
          <div class="relative">
            <div class="absolute -left-4 top-4 z-10">
              <CreditCard name="John Doe" date="12/25" />
            </div>
            <div class="absolute -right-4 top-8 z-20">
              <CreditCardGlass name="Jane Smith" date="08/26" />
            </div>
            <div class="relative z-30">
              <CreditCard name="Mike Johnson" date="03/27" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional script needed - components are auto-imported
</script>