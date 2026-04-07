<template>
  <section class="relative overflow-hidden pt-16 md:pb-24">
    <div class="mx-auto max-w-[1560px] flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-8">
      <div class="flex w-full max-w-3xl flex-1 flex-col">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Banking, but for digital creators
        </h1>
        <p class="mt-4 max-w-120 text-lg text-gray-600 dark:text-gray-400 md:mt-6 md:text-xl">
          Designed by creators, for creators. Untitled gives you the guidance, data and innovation you need to sell more and grow your digital business.
        </p>
        
        <form class="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start" @submit.prevent="handleSubmit">
          <UInput
            v-model="phoneNumber"
            type="tel"
            size="lg"
            placeholder="+1 (555) 000-0000"
            required
            class="flex-1"
          >
            <template #description>
              <span>We care about your data in our <a href="#" class="underline underline-offset-3">privacy policy</a>.</span>
            </template>
          </UInput>
          <UButton type="submit" color="primary" size="lg" label="Text me a link" />
        </form>
      </div>
      
      <div class="relative flex h-90 w-full items-start justify-center lg:h-128 lg:flex-1 lg:items-center">
        <!-- Desktop Dashboard Mockup -->
        <div class="absolute top-0 left-16 max-lg:hidden">
          <div class="rounded-2xl bg-white dark:bg-gray-900 p-1 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
            <div class="overflow-hidden rounded-xl">
              <img 
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp" 
                alt="Dashboard mockup" 
                class="max-w-5xl object-cover dark:hidden"
              />
              <img 
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp" 
                alt="Dashboard mockup" 
                class="max-w-5xl object-cover not-dark:hidden"
              />
            </div>
          </div>
        </div>
        
        <!-- Mobile Mockup -->
        <div class="top-26 left-0 lg:absolute">
          <div class="max-w-70 rounded-2xl bg-white dark:bg-gray-900 p-1 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
            <div class="overflow-hidden rounded-xl">
              <img 
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp" 
                alt="Mobile app mockup" 
                class="size-full object-cover dark:hidden"
              />
              <img 
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp" 
                alt="Mobile app mockup" 
                class="size-full object-cover not-dark:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const phoneNumber = ref('')

const handleSubmit = () => {
  console.log('Phone number submitted:', phoneNumber.value)
}
</script>