<script setup lang="ts">
const email = ref('')
const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const message = ref('')
const privacyAccepted = ref(false)
const isLoading = ref(false)

const countryItems = [
  { label: 'US', value: 'us' },
  { label: 'UK', value: 'uk' },
  { label: 'CA', value: 'ca' },
  { label: 'AU', value: 'au' }
]

async function onSubmitContact() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isLoading.value = false
}
</script>

<template>
  <section class="bg-muted pb-16 md:pb-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div class="max-lg:hidden lg:h-192">
          <img src="https://www.untitledui.com/images/portraits/lana-steiner" alt="Lana Steiner" class="size-full object-cover">
        </div>
        <div class="flex items-center justify-center">
          <div class="w-full md:max-w-120">
            <h2 class="text-display-sm font-semibold text-primary md:text-display-md">
              Let&apos;s start your project
            </h2>
            <p class="mt-4 text-lg text-default md:mt-5 md:text-xl">
              Our friendly team would love to hear from you.
            </p>

            <form class="mt-12 flex flex-col gap-8" @submit.prevent="onSubmitContact">
              <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-x-8 gap-y-6 sm:flex-row">
                  <UInput
                    v-model="firstName"
                    type="text"
                    label="First name"
                    placeholder="First name"
                    required
                    size="lg"
                    class="flex-1"
                  />
                  <UInput
                    v-model="lastName"
                    type="text"
                    label="Last name"
                    placeholder="Last name"
                    required
                    size="lg"
                    class="flex-1"
                  />
                </div>

                <UInput
                  v-model="email"
                  type="email"
                  label="Email"
                  placeholder="you@company.com"
                  required
                  size="lg"
                />

                <div class="flex flex-col gap-2">
                  <label class="text-sm font-medium text-muted-700 dark:text-muted-300">
                    Phone number
                  </label>
                  <div class="flex gap-2">
                    <USelect :items="countryItems" default-value="us" class="w-24" />
                    <UInput
                      v-model="phone"
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                      class="flex-1"
                    />
                  </div>
                </div>

                <UTextarea
                  v-model="message"
                  label="Message"
                  placeholder="Leave us a message..."
                  required
                  :rows="5"
                />

                <UCheckbox v-model="privacyAccepted" name="privacy">
                  You agree to our friendly <ULink href="#" class="underline underline-offset-3">privacy policy.</ULink>
                </UCheckbox>
              </div>

              <UButton type="submit" variant="solid" color="primary" size="lg" :loading="isLoading">
                Send message
              </UButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
