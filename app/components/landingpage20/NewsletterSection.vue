<script setup lang="ts">
const newsletterEmail = ref('')
const isLoading = ref(false)

async function onSubmitNewsletter() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('Subscribed:', newsletterEmail.value)
  newsletterEmail.value = ''
  isLoading.value = false
}
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 py-10 md:py-12">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col items-start justify-between gap-8 md:flex-row">
        <div class="flex flex-col gap-2 md:gap-4">
          <p class="text-display-xs font-semibold text-primary md:text-display-sm">
            Get notified when we launch
          </p>
          <p class="text-md text-muted-600 dark:text-muted-400 md:text-xl">
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>
        <form
          class="w-full sm:w-100"
          @submit.prevent="onSubmitNewsletter"
        >
          <div class="flex flex-col gap-4 sm:flex-row">
            <UInput
              v-model="newsletterEmail"
              type="email"
              placeholder="Enter your email"
              required
              size="lg"
              class="flex-1"
            />
            <UButton
              type="submit"
              variant="solid"
              color="primary"
              size="lg"
              :loading="isLoading"
            >
              Subscribe
            </UButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
