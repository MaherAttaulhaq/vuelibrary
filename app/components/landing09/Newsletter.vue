<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto flex w-full max-w-container flex-col items-start justify-between gap-8 px-4 md:px-8 lg:flex-row">
      <div>
        <h2 class="text-display-sm font-semibold text-primary md:text-display-md">Sign up for our newsletter</h2>
        <p class="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
          Be the first to know about releases and industry news and insights.
        </p>
      </div>
      <UForm class="flex w-full flex-col gap-4 md:max-w-120 md:flex-row" @submit="onSubscribe">
        <UInput
          v-model="email"
          type="email"
          placeholder="Enter your email"
          size="lg"
          class="flex-1"
          required
        />
        <UButton type="submit" color="primary">Subscribe</UButton>
      </UForm>
    </div>
  </section>
</template>

<script setup>
const email = ref('')

const onSubscribe = () => {
  console.log('Subscribed with email:', email.value)
}
</script>
