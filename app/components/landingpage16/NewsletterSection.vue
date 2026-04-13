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
  <section class="bg-muted-100 py-16 dark:bg-muted-900 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <h1 class="text-display-sm font-semibold text-primary md:text-display-md">We&apos;ll send you a nice letter once per week</h1>
        <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">No spam. Just the latest releases and tips, interesting articles, and exclusive interviews with great people.</p>

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
          We care about your data in our
          <ULink href="#" class="rounded-xs underline underline-offset-3">privacy policy</ULink>.
        </p>
      </div>
    </div>
  </section>
</template>
