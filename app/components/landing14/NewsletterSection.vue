<script setup lang="ts">
const newsletterEmail = ref('')
const isLoading = ref(false)

async function onSubmitNewsletter() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  newsletterEmail.value = ''
  isLoading.value = false
}
</script>

<template>
  <section class="bg-muted pb-16 md:pb-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col items-center rounded-2xl bg-muted-100 px-6 py-10 text-center dark:bg-muted-900 lg:p-16">
        <h2 class="text-display-sm font-semibold text-primary xl:text-display-md">
          Still thinking <br class="md:hidden"> about it?
        </h2>
        <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 lg:text-xl">
          Sign up for our newsletter and get 10% off your next purchase.
        </p>
        <form class="mt-8 flex w-full flex-col gap-4 md:max-w-120 md:flex-row" @submit.prevent="onSubmitNewsletter">
          <UInput
            v-model="newsletterEmail"
            type="email"
            placeholder="Enter your email"
            required
            size="lg"
            class="flex-1"
          />
          <UButton type="submit" variant="solid" color="primary" size="lg" :loading="isLoading">
            Subscribe
          </UButton>
        </form>
        <p class="mt-3 text-sm text-muted-600 dark:text-muted-400">
          Read about our
          <ULink href="#" class="rounded-xs underline underline-offset-3">privacy policy</ULink>.
        </p>
      </div>
    </div>
  </section>
</template>
