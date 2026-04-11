<template>
  <section class="bg-primary py-12 md:py-16">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <div class="flex flex-col gap-8 text-center">
        <div class="flex flex-col gap-4">
          <h2 class="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Start your free trial
          </h2>
          <p class="text-lg text-primary-foreground/80">
            Join over 4,000+ companies already growing with Untitled.
          </p>
        </div>
        <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <UButton size="lg" variant="secondary">
            Get started
          </UButton>
          <UButton size="lg" variant="outline" class="bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
            Learn more
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// No script needed for this component
</script>