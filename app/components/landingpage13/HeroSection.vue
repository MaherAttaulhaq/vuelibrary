<template>
  <section class="relative overflow-hidden pt-16 md:py-24 bg-transparent">
    <div
      class="mx-auto flex max-w-container flex-col gap-16 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-16"
    >
      <!-- LEFT -->
      <div class="flex w-full max-w-3xl flex-1 flex-col items-start">
        <!-- ✅ Announcement Badge (ADDED BACK) -->
        <ULink
          href="#"
          class="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <!-- Desktop -->
          <UBadge
            variant="subtle"
            color="secondary"
            class="cursor-pointer transition duration-100 ease-linear hover:bg-secondary py-1 pr-2 pl-1 text-sm font-medium hidden md:flex"
          >
            <UBadge variant="solid" color="primary" size="sm" class="mr-2">
              <span
                class="inline-block size-2 shrink-0 rounded-full bg-primary"
              />
              New feature
            </UBadge>
            Personalized coaching in-app
            <Icon name="lucide:arrow-right" class="ml-1 size-4 text-muted" />
          </UBadge>

          <!-- Mobile -->
          <UBadge
            variant="subtle"
            color="secondary"
            size="sm"
            class="cursor-pointer transition duration-100 ease-linear hover:bg-secondary py-1 pr-2 pl-1 text-xs font-medium md:hidden"
          >
            <UBadge variant="solid" color="primary" size="sm" class="mr-2">
              <span
                class="inline-block size-2 shrink-0 rounded-full bg-primary"
              />
              New feature
            </UBadge>
            Personalized coaching in-app
            <Icon name="lucide:arrow-right" class="ml-1 size-4 text-muted" />
          </UBadge>
        </ULink>

        <!-- Heading -->
        <h1 class="mt-4 text-4xl font-semibold text-highlighted">
          Portfolio performance tracking made easy
        </h1>

        <!-- Description -->
        <p class="mt-4 text-lg text-muted md:mt-6">
          Designed by marketers. Untitled gives you the guidance, data and
          innovation you need.
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex gap-3 md:mt-12">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>

      <!-- RIGHT -->
      <div
        class="relative flex h-[400px] w-full justify-center lg:h-[640px] lg:max-w-lg items-center"
      >
        <!-- Background Shape -->
        <div class="absolute top-24 w-[532px] lg:top-auto z-0">
          <svg viewBox="0 0 532 480" fill="none">
            <path
              d="M182.034 461.691C74.9901 428.768 1.32278 329.846 0.0121784 217.408C-1.15817 117.003 82.1936 43.2414 176.777 10.7273C260.07 -17.9056 346.327 12.9156 406.143 77.7959C484.913 163.236 571.343 274.645 512.702 375.097C449.003 484.212 302.448 498.727 182.034 461.691Z"
              class="fill-muted"
            />
          </svg>
        </div>

        <!-- Phone -->
        <IPhoneMockup class="relative z-10" />
      </div>
    </div>
  </section>
</template>
