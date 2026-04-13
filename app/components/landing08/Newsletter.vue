<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto flex w-full max-w-container flex-col items-start justify-between gap-8 px-4 md:px-8 lg:flex-row">
      <div>
        <h1 class="text-display-sm font-semibold text-primary md:text-display-md">
          Sign up for our newsletter
        </h1>
        <p class="mt-4 text-lg md:mt-5 md:text-xl">
          Be the first to know about releases and industry news and insights.
        </p>
      </div>
      <UForm
        :state="newsletterState"
        class="flex w-full flex-col gap-4 md:max-w-120 md:flex-row"
        @submit="onNewsletterSubmit"
      >
        <UInput
          v-model="newsletterState.email"
          name="email"
          type="email"
          size="xl"
          placeholder="Enter your email"
          class="flex-1"
          :ui="{ wrapper: 'w-full md:max-w-[345px]' }"
        />
        <UButton
          type="submit"
          size="xl"
          color="primary"
          label="Subscribe"
        />
      </UForm>
    </div>
  </section>
</template>

<script setup lang="ts">
const newsletterState = reactive({ email: '' })

const onNewsletterSubmit = (event: Event) => {
  event.preventDefault()
  console.log('Newsletter submitted:', newsletterState)
}
</script>
