<template>
  <section class="bg-gray-50 dark:bg-gray-900/50 py-16 md:py-24">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Sign up for our newsletter</h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 md:mt-5 md:text-xl">
          Be the first to know about releases and industry news and insights.
        </p>
        
        <form class="mt-8 flex w-full flex-col gap-4 md:max-w-120 md:flex-row" @submit.prevent="handleSubscribe">
          <UInput
            v-model="email"
            type="email"
            size="lg"
            placeholder="Enter your email"
            required
            class="flex-1"
          >
            <template #description>
              <span>We care about your data in our <a href="#" class="underline underline-offset-3">privacy policy</a>.</span>
            </template>
          </UInput>
          <UButton type="submit" color="primary" size="lg" label="Subscribe" />
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')

const handleSubscribe = () => {
  console.log('Email subscribed:', email.value)
  // Add toast notification
  useToast().add({ title: 'Subscribed!', description: 'Thank you for subscribing to our newsletter.', color: 'success' })
  email.value = ''
}
</script>