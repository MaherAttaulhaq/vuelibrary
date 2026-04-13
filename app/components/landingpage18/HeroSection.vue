<script setup lang="ts">
const email = ref("");
const isLoading = ref(false);

async function onSubmitNewsletter() {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Subscribed:", email.value);
  email.value = "";
  isLoading.value = false;
}
</script>

<template>
  <div class="relative overflow-hidden bg-muted">
    <img
      alt="Grid of dots"
      aria-hidden="true"
      src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
      class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
    />
    <img
      alt="Grid of dots"
      aria-hidden="true"
      src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
      class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2] md:hidden"
    />

    <slot name="header" />

    <!-- Hero Content -->
    <section class="py-16 md:pb-24">
      <div
        class="relative mx-auto grid max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:min-h-160 lg:items-center"
      >
        <div class="z-10 flex max-w-200 flex-col items-start">
          <h1
            class="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl"
          >
            Customer service software for customer-first teams
          </h1>
          <p
            class="mt-4 max-w-xl text-lg text-balance text-muted-600 dark:text-muted-400 md:mt-6 md:text-xl"
          >
            The best customer service software for customer-first teams.
            Industry-leading email and live chat support.
          </p>
          <form
            class="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start"
            @submit.prevent="onSubmitNewsletter"
          >
            <UInput
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
              size="lg"
              class="flex-1"
            >
              <template #description>
                <span
                  >We care about your data in our
                  <ULink
                    href="#"
                    class="rounded-xs underline underline-offset-3"
                    >privacy policy</ULink
                  >.</span
                >
              </template>
            </UInput>
            <UButton
              type="submit"
              variant="solid"
              color="primary"
              size="lg"
              :loading="isLoading"
            >
              Get started
            </UButton>
          </form>
        </div>

        <div
          class="relative lg:absolute lg:top-0 lg:right-8 lg:h-full lg:w-140"
        >
          <img
            class="inset-0 h-60 w-full object-cover md:h-110 lg:h-full"
            src="https://www.untitledui.com/images/portraits/lana-steiner"
            alt="Portrait"
          />
        </div>
      </div>
    </section>
  </div>
</template>
