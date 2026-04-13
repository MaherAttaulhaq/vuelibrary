<script setup lang="ts">
const email = ref("");
const isLoading = ref(false);

async function onSubmit() {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Subscribed:", email.value);
  email.value = "";
  isLoading.value = false;
}
</script>

<template>
  <section class="bg-muted-100 dark:bg-muted-900 py-16 md:py-24">
    <div
      class="mx-auto flex w-full max-w-container flex-col items-start justify-between gap-8 px-4 md:px-8 lg:flex-row"
    >
      <div>
        <h1
          class="text-display-sm font-semibold text-primary md:text-display-md"
        >
          Sign up for our newsletter
        </h1>
        <p
          class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
        >
          Be the first to know about releases and industry news and insights.
        </p>
      </div>
      <form
        class="flex w-full flex-col gap-4 md:max-w-120 md:flex-row"
        @submit.prevent="onSubmit"
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
              <ULink href="#" class="rounded-xs underline underline-offset-3"
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
          Subscribe
        </UButton>
      </form>
    </div>
  </section>
</template>
