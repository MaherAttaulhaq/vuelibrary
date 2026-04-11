<template>
  <UPageHero class="relative overflow-hidden  lg:flex lg:min-h-[720px] lg:py-0">
    <!-- Left content -->
    <div class="mx-auto w-full max-w-[1560px] px-4 md:px-8">
      <div class="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pt-32 lg:pb-24">
        <!-- Badge -->
        <UBadge
          variant="subtle"
          color="neutral"
          class="hidden md:flex gap-2"
        >
          <span class="size-2 rounded-full bg-primary" />
          We're hiring! Join our remote team
          <UIcon
            name="i-heroicons-arrow-right"
            class="size-4"
          />
        </UBadge>

        <!-- Headline -->
        <h1 class="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Smart business credit cards
        </h1>

        <!-- Description -->
        <p class="mt-6 text-lg text-muted-foreground md:text-xl">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
        </p>

        <!-- Input + Button -->
        <div class="mt-8 flex w-full flex-col gap-3 md:mt-10 md:max-w-md md:flex-row">
          <UInput
            size="lg"
            placeholder="Enter your email"
            class="flex-1"
          />
          <UButton
            color="primary"
            size="lg"
          >
            Get started
          </UButton>
        </div>

        <!-- Privacy Text -->
        <p class="mt-4 text-sm text-muted-foreground">
          We care about your data. Read our
          <a
            href="#"
            class="text-primary underline"
          >privacy policy</a>
        </p>
      </div>
    </div>

    <!-- Right content: Hero card rotated stack -->
    <div class="relative mt-16 h-80 w-full bg-muted/50 px-4 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
      <div class="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          class="relative"
          style="transform: rotate(25deg) scale(0.8) translateX(100px);"
        >
          <!-- Rotated Card -->
          <div class="relative lg:w-[480px] lg:h-[350px] w-[350px] h-[200px] rounded-2xl bg-gradient-to-br from-primary/90 to-primary shadow-xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div class="relative p-5 flex flex-col justify-between h-full">
              <div class="flex justify-between text-white">
                <span class="font-semibold">Untitled</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <div>
                <div class="text-xs text-white/80 uppercase">
                  Phoenix Baker
                </div>
                <div class="text-white text-lg tracking-wider">
                  •••• 1234
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UPageHero>
</template>

<script lang="ts" setup>
// No script needed for this component
</script>