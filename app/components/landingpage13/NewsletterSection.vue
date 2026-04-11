<script setup lang="ts">
const email = ref('')
const isLoading = ref(false)

async function onSubmit() {
  isLoading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('Subscribed:', email.value)
  email.value = ''
  isLoading.value = false
}
</script>

<template>
  <div class="mx-auto max-w-container px-4 md:px-8">
    <hr class="h-px w-full border-none bg-border-secondary">
  </div>
  <section class="bg-muted pt-16 md:py-24 overflow-hidden">
    <div
      class="mx-auto grid w-full max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center"
    >
      <div class="z-20 flex flex-col items-start md:max-w-xl md:pr-18">
        <h2
          class="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg"
        >
          Be the first to know when we launch
        </h2>
        <p class="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
          We're still building. Subscribe for updates and 20% off when we
          launch.
          <span class="max-md:hidden">No spam, we promise!</span>
        </p>
        <form
          class="mt-8 flex w-full flex-col gap-4 md:mt-12 md:max-w-120 md:flex-row"
          @submit.prevent="onSubmit"
        >
          <UInput
            v-model="email"
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
        </form>
        <p class="mt-3 text-sm text-tertiary">
          We care about your data in our
          <ULink
            href="#"
            class="rounded-xs underline underline-offset-3"
          >privacy policy</ULink>.
        </p>
      </div>
      <div
        class="relative -mx-4 min-h-90 w-auto overflow-hidden bg-tertiary md:mx-0 md:min-h-128 md:w-full"
      >
        <IPhoneMockup
          class="absolute top-14 left-[47%] w-full max-w-67 -translate-x-[60%] drop-shadow-iphone-mockup sm:top-28 md:max-w-78.5 lg:left-12 lg:translate-x-0"
        />
        <IPhoneMockup
          class="absolute top-6 right-[47%] w-full max-w-67 translate-x-[60%] drop-shadow-iphone-mockup sm:top-12 md:max-w-78.5 lg:right-12 lg:translate-x-0"
        />
      </div>
    </div>
  </section>
</template>
