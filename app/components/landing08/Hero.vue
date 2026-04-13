<template>
  <section class="relative overflow-hidden bg-muted py-16 md:py-24">
    <!-- Background pattern -->
    <img
      alt="Grid of dots"
      aria-hidden="true"
      src="https://www.untitledui.com/patterns/light/grid-sm-desktop.svg"
      class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block"
    >
    <img
      alt="Grid of dots"
      aria-hidden="true"
      src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
      class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden"
    >

    <div class="mx-auto flex w-full max-w-container flex-col justify-between gap-8 px-4 md:px-8 lg:flex-row lg:items-end">
      <div class="flex max-w-3xl flex-1 flex-col items-start">
        <h1 class="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
          Simple, transparent business credit cards
        </h1>
        <p class="mt-4 text-lg text-balance md:mt-6 md:text-xl">
          Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free trial.
        </p>

        <!-- Feature list for mobile -->
        <ul class="mt-8 flex shrink-0 flex-col gap-4 pl-2 lg:hidden">
          <li class="flex gap-3">
            <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span class="text-lg">Instantly issue virtual corporate cards</span>
          </li>
          <li class="flex gap-3">
            <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span class="text-lg">Control spending before it happens</span>
          </li>
          <li class="flex gap-3">
            <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span class="text-lg">Automate your expense management</span>
          </li>
        </ul>

        <!-- Form -->
        <UForm
          :state="formState"
          class="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start"
          @submit="onSubmit"
        >
          <UInput
            v-model="formState.email"
            name="email"
            type="email"
            size="xl"
            placeholder="Enter your email"
            class="flex-1"
            :ui="{ wrapper: 'w-full' }"
          />
          <UButton
            type="submit"
            size="xl"
            color="primary"
            label="Get started"
          />
        </UForm>
      </div>

      <!-- Feature list for desktop -->
      <ul class="hidden shrink-0 flex-col gap-5 pb-6 pl-4 lg:flex">
        <li class="flex gap-3">
          <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span class="text-lg">Instantly issue virtual corporate cards</span>
        </li>
        <li class="flex gap-3">
          <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span class="text-lg">Control spending before it happens</span>
        </li>
        <li class="flex gap-3">
          <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span class="text-lg">Automate your expense management</span>
        </li>
      </ul>
    </div>

    <!-- Hero Image -->
    <div class="relative mt-16 w-full max-w-container px-4 md:mx-auto md:px-8">
      <img
        src="https://www.untitledui.com/marketing/glass-cards.webp"
        alt="Hero card mockup"
        class="h-68 w-full overflow-hidden rounded-2xl object-cover md:h-120 md:rounded-2xl"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
const formState = reactive({ email: '' })

const onSubmit = (event: Event) => {
  event.preventDefault()
  console.log('Form submitted:', formState)
}
</script>
