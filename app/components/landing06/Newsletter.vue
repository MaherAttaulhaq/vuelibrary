<template>
  <section class="py-12 md:py-16">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <div class="flex flex-col gap-8 text-center">
        <div class="flex flex-col gap-4">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl">
            Stay in the loop
          </h2>
          <p class="text-lg text-muted-foreground">
            Join our newsletter to stay up to date with features and releases.
          </p>
        </div>
        <div class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <UInput
            v-model="email"
            placeholder="Enter your email"
            type="email"
            class="flex-1"
          />
          <UButton size="lg">
            Subscribe
          </UButton>
        </div>
        <p class="text-sm text-muted-foreground">
          We care about your data. Read our
          <NuxtLink to="#" class="underline hover:no-underline">
            privacy policy
          </NuxtLink>
          .
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const email = ref('')
</script>