<template>
  <div class="bg-muted/90">
    <UHeader
      :toggle="{
        color: 'primary',
        variant: 'subtle',
        class: 'rounded-full'
      }"
    >
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />

        <UTooltip
          text="Open on GitHub"
          :kbds="['meta', 'G']"
        >
          <UButton
            color="neutral"
            variant="ghost"
            to="https://github.com/nuxt/ui"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
          />
        </UTooltip>
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-bg-primary py-16 md:py-24">
      <!-- Background pattern -->
      <img
        alt="Grid of dots"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-sm-desktop.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
      >
      <img
        alt="Grid of dots"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2] md:hidden"
      >

      <div class="mx-auto flex w-full max-w-container flex-col justify-between gap-8 px-4 md:px-8 lg:flex-row lg:items-end">
        <div class="flex max-w-3xl flex-1 flex-col items-start">
          <h1 class="text-display-md font-semibold text-text-primary md:text-display-lg lg:text-display-xl">
            Simple, transparent business credit cards
          </h1>
          <p class="mt-4 text-lg text-balance text-text-tertiary md:mt-6 md:text-xl">
            Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free trial.
          </p>

          <!-- Feature list for mobile -->
          <ul class="mt-8 flex shrink-0 flex-col gap-4 pl-2 lg:hidden">
            <li class="flex gap-3">
              <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-success-secondary text-icon-success">
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
              <span class="text-lg text-text-tertiary">Instantly issue virtual corporate cards</span>
            </li>
            <li class="flex gap-3">
              <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-success-secondary text-icon-success">
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
              <span class="text-lg text-text-tertiary">Control spending before it happens</span>
            </li>
            <li class="flex gap-3">
              <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-success-secondary text-icon-success">
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
              <span class="text-lg text-text-tertiary">Automate your expense management</span>
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
              label="Get started"
            />
          </UForm>
        </div>

        <!-- Feature list for desktop -->
        <ul class="hidden shrink-0 flex-col gap-5 pb-6 pl-4 lg:flex">
          <li class="flex gap-3">
            <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-success-secondary text-icon-success">
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
            <span class="text-lg text-text-tertiary">Instantly issue virtual corporate cards</span>
          </li>
          <li class="flex gap-3">
            <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-success-secondary text-icon-success">
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
            <span class="text-lg text-text-tertiary">Control spending before it happens</span>
          </li>
          <li class="flex gap-3">
            <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-success-secondary text-icon-success">
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
            <span class="text-lg text-text-tertiary">Automate your expense management</span>
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

    <!-- Social Proof Section -->
    <section class="bg-bg-primary pb-16 md:pb-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col gap-8">
          <p class="text-center text-md font-medium text-text-tertiary">
            Join 4,000+ companies already growing
          </p>
          <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
            <!-- Light mode images -->
            <img
              alt="Odeaolabs"
              src="https://www.untitledui.com/logos/logotype/color/odeao-labs.svg"
              class="h-9 dark:hidden md:h-10"
            >
            <img
              alt="Kintsugi"
              src="https://www.untitledui.com/logos/logotype/color/kintsugi.svg"
              class="h-9 dark:hidden md:h-10"
            >
            <img
              alt="Stackedlab"
              src="https://www.untitledui.com/logos/logotype/color/stacked-lab.svg"
              class="h-9 dark:hidden md:h-10"
            >
            <img
              alt="Magnolia"
              src="https://www.untitledui.com/logos/logotype/color/magnolia.svg"
              class="h-9 dark:hidden md:h-10"
            >
            <img
              alt="Warpspeed"
              src="https://www.untitledui.com/logos/logotype/color/warpspeed.svg"
              class="h-9 dark:hidden md:h-10"
            >
            <img
              alt="Sisyphus"
              src="https://www.untitledui.com/logos/logotype/color/sisyphus.svg"
              class="h-9 dark:hidden md:h-10"
            >
            <!-- Dark mode images -->
            <img
              alt="Odeaolabs"
              src="https://www.untitledui.com/logos/logotype/white/odeao-labs.svg"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
            <img
              alt="Kintsugi"
              src="https://www.untitledui.com/logos/logotype/white/kintsugi.svg"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
            <img
              alt="Stackedlab"
              src="https://www.untitledui.com/logos/logotype/white/stacked-lab.svg"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
            <img
              alt="Magnolia"
              src="https://www.untitledui.com/logos/logotype/white/magnolia.svg"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
            <img
              alt="Warpspeed"
              src="https://www.untitledui.com/logos/logotype/white/warpspeed.svg"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
            <img
              alt="Sisyphus"
              src="https://www.untitledui.com/logos/logotype/white/sisyphus.svg"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Features Large Screen Mockup Section -->
    <section class="bg-bg-primary pb-16 md:pb-0">
      <div class="bg-bg-secondary pt-16 pb-28 md:pt-24 md:pb-40">
        <div class="mx-auto w-full max-w-container px-4 md:px-8">
          <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <span class="text-sm font-semibold text-text-brand-secondary md:text-md">Features</span>
            <h2 class="mt-3 text-display-sm font-semibold text-text-primary md:text-display-md">
              All-in-one finance for any business
            </h2>
            <p class="mt-4 text-lg text-text-tertiary md:mt-5 md:text-xl">
              Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.
            </p>
          </div>
        </div>
      </div>

      <div class="mx-auto -mt-17 w-full max-w-container px-4 pt-1 md:-mt-26 md:overflow-hidden md:px-8 md:pt-2">
        <div class="flex flex-col md:items-start">
          <div class="flex h-full w-full items-center justify-center md:max-h-105 md:w-full md:items-start lg:max-h-140">
            <img
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
              alt="Comprehensive business finance dashboard showing charts, metrics, and account overview in a clean interface"
              class="size-full rounded object-cover ring-4 ring-screen-mockup-border dark:hidden md:rounded-xl md:ring-8"
            >
            <img
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
              alt="Comprehensive business finance dashboard showing charts, metrics, and account overview in a clean interface"
              class="size-full rounded object-cover ring-4 ring-screen-mockup-border hidden dark:block md:rounded-xl md:ring-8"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="mx-auto max-w-container px-4 md:px-8">
      <hr class="h-px w-full border-none bg-border-secondary">
    </div>

    <!-- Testimonial Section -->
    <section class="bg-bg-primary py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <figure class="flex w-full shrink-0 snap-start flex-col gap-8 text-center">
          <!-- Light mode logo -->
          <img
            alt="Wildcrafted"
            src="https://www.untitledui.com/logos/logotype/color/wildcrafted.svg"
            class="mx-auto h-10 dark:hidden"
            aria-hidden="true"
          >
          <!-- Dark mode logo -->
          <img
            alt="Wildcrafted"
            src="https://www.untitledui.com/logos/logotype/white/wildcrafted.svg"
            class="mx-auto hidden h-10 opacity-85 dark:block"
            aria-hidden="true"
          >
          <blockquote class="text-display-sm font-medium text-text-primary md:text-display-lg">
            We've been able to scale faster by combining our deposits, spend and controls in one account.
          </blockquote>
          <figcaption class="flex justify-center">
            <div class="flex flex-col items-center gap-4">
              <UAvatar
                src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
                alt="Amelie Laurent"
                size="lg"
              />
              <div class="flex flex-col gap-1">
                <p class="text-lg font-semibold text-text-primary">
                  Amélie Laurent
                </p>
                <cite class="text-md text-text-tertiary not-italic">Finance Manager, Sisyphus</cite>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- CTA Card Horizontal -->
    <section class="bg-bg-primary pb-16 md:pb-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-bg-secondary px-6 py-10 lg:flex-row lg:p-16">
          <div class="flex max-w-3xl flex-1 flex-col">
            <h2 class="text-display-sm font-semibold text-text-primary">
              <span class="hidden md:inline">Start your 30-day free trial</span>
              <span class="md:hidden">Start your free trial</span>
            </h2>
            <p class="mt-4 text-lg text-text-tertiary lg:text-xl">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
          <div class="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
            <UButton
              label="Learn more"
              color="neutral"
              variant="outline"
              size="xl"
            />
            <UButton
              label="Get started"
              color="primary"
              size="xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Tabs Mockup Section -->
    <section class="overflow-hidden bg-bg-primary pb-16 lg:pb-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="flex w-full flex-col lg:max-w-3xl">
          <span class="text-sm font-semibold text-text-brand-secondary md:text-md">Features</span>
          <h2 class="mt-3 text-display-sm font-semibold text-text-primary md:text-display-md">
            The only card you'll ever need. Simple.
          </h2>
          <p class="mt-4 text-lg text-text-tertiary md:mt-5 md:text-xl">
            Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
          <ul class="flex flex-col">
            <li
              v-for="(item, index) in featureTabs"
              :key="item.title"
              @click="activeFeatureTab = index"
            >
              <div
                :class="[
                  'relative flex cursor-pointer flex-col items-start gap-4 border-l-4 py-4 pl-5 transition duration-100 ease-linear hover:border-border-brand',
                  activeFeatureTab === index ? 'border-border-brand' : 'border-border-tertiary'
                ]"
              >
                <div>
                  <h3 class="text-lg font-semibold text-text-primary">
                    {{ item.title }}
                  </h3>
                  <p class="mt-1 text-md text-text-tertiary">
                    {{ item.subtitle }}
                  </p>
                </div>
                <UButton
                  label="Learn more"
                  variant="link"
                  color="primary"
                  to="#"
                />
              </div>
            </li>
          </ul>

          <!-- 3D Card Stack -->
          <div class="relative -mx-4 flex h-80 items-center justify-center bg-bg-tertiary md:mr-0 md:h-120 md:rounded-2xl lg:h-140">
            <div class="-space-y-[146px] md:-translate-x-2 md:translate-y-3.5 md:-space-y-[126px]">
              <div
                class="relative z-4 [--scale:1.13] md:[--scale:1.641]"
                :style="{ transform: 'scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)' }"
              >
                <CreditCard
                  type="transparent-gradient"
                  card-holder="Demi Wilkinson"
                />
              </div>
              <div
                class="relative z-3 [--scale:1.13] md:[--scale:1.641]"
                :style="{ transform: 'scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)' }"
              >
                <CreditCard
                  type="brand-dark"
                  card-holder="Lana Steiner"
                />
              </div>
              <div
                class="relative z-2 [--scale:1.13] md:[--scale:1.641]"
                :style="{ transform: 'scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)' }"
              >
                <CreditCard
                  type="transparent"
                  card-holder="OLIVIA RHYE"
                />
              </div>
              <div
                class="relative z-1 [--scale:1.13] md:[--scale:1.641]"
                :style="{ transform: 'scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)' }"
              >
                <CreditCard
                  type="gray-dark"
                  card-holder="Phoenix Baker"
                />
              </div>
              <div
                class="relative z-0 [--scale:1.13] md:[--scale:1.641]"
                :style="{ transform: 'scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)' }"
              >
                <div class="h-47.5 w-79 rounded-2xl bg-neutral-900 opacity-15 blur-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="bg-bg-secondary py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="mx-auto flex w-full max-w-2xl flex-col xl:mx-0 xl:max-w-3xl">
          <span class="text-sm font-semibold text-text-brand-secondary md:text-md">Upgrade</span>
          <h2 class="mt-3 text-display-sm font-semibold text-text-primary md:text-display-md">
            Unlock more features
          </h2>
          <p class="mt-4 text-lg text-text-tertiary md:mt-5">
            Simple, transparent pricing that grows with you. Try any plan free for 30 days.
          </p>
        </div>

        <div class="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-12 md:mt-16 md:gap-16 xl:mx-0 xl:max-w-none xl:grid-cols-2 xl:items-center">
          <ul class="grid max-w-xl grid-cols-1 gap-10 md:gap-12">
            <li
              v-for="item in pricingFeatures"
              :key="item.title"
            >
              <div class="flex gap-4">
                <UFeaturedIcon
                  :icon="item.icon"
                  size="lg"
                  color="neutral"
                  class="hidden md:flex"
                />
                <UFeaturedIcon
                  :icon="item.icon"
                  size="md"
                  color="neutral"
                  class="flex md:hidden"
                />
                <div class="pt-1.5 md:pt-2.5">
                  <h3 class="text-lg font-semibold text-text-primary md:text-xl">
                    {{ item.title }}
                  </h3>
                  <p class="mt-1 text-md text-text-tertiary md:mt-2">
                    {{ item.subtitle }}
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <PricingCard
            title="Basic plan"
            description="Our most popular plan for small teams."
            price="$10"
            badge="Popular"
            :features="[
              'Access to basic features',
              'Basic reporting + analytics',
              'Up to 10 individual users',
              '20 GB individual data',
              'Basic chat support',
              'Attend events',
              'Automatic updates',
              'Backup your account',
              'Audit log and notes',
              'Feature requests'
            ]"
            class="md:-ml-4"
          />
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-bg-brand-section py-16 md:py-24">
      <div class="mx-auto flex w-full max-w-container flex-col items-start justify-between gap-8 px-4 md:px-8 lg:flex-row">
        <div>
          <h1 class="text-display-sm font-semibold text-text-primary_on-brand md:text-display-md">
            Sign up for our newsletter
          </h1>
          <p class="mt-4 text-lg text-text-tertiary_on-brand md:mt-5 md:text-xl">
            Be the first to know about releases and industry news and insights.
          </p>
        </div>
        <UForm
          :state="newsletterState"
          class="flex w-full flex-col gap-4 md:max-w-120 md:flex-row"
          @submit="onNewsletterSubmit"
        >
          <UInput
            v-model="newsletterState.email"
            name="email"
            type="email"
            size="xl"
            placeholder="Enter your email"
            class="flex-1"
            :ui="{ wrapper: 'w-full md:max-w-[345px]' }"
          />
          <UButton
            type="submit"
            size="xl"
            label="Subscribe"
          />
        </UForm>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-bg-primary py-12 md:pt-16">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col justify-center text-center">
          <h2 class="text-display-xs font-semibold text-text-primary md:text-display-sm">
            Start growing with Untitled
          </h2>
          <p class="mt-2 text-md text-text-tertiary md:mt-4 md:text-xl">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div class="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-12 md:flex-row md:self-center">
            <UButton
              label="Chat to us"
              color="neutral"
              variant="outline"
              size="xl"
            />
            <UButton
              label="Get started"
              color="primary"
              size="xl"
            />
          </div>
        </div>

        <nav class="mt-12 md:mt-16">
          <ul class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            <li
              v-for="category in footerNavList"
              :key="category.label"
            >
              <h4 class="text-sm font-semibold text-text-quaternary">
                {{ category.label }}
              </h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li
                  v-for="item in category.items"
                  :key="item.label"
                  class="flex"
                >
                  <UButton
                    :to="item.href"
                    variant="link"
                    :label="item.label"
                    class="text-text-tertiary hover:text-text-tertiary_hover"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div class="mt-12 flex flex-col justify-between gap-6 border-t border-border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
          <Logo />
          <p class="text-sm text-text-quaternary">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">


import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Figma',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
// Form state
const formState = reactive({ email: '' })
const newsletterState = reactive({ email: '' })

const onSubmit = (event: Event) => {
  event.preventDefault()
  console.log('Form submitted:', formState)
}

const onNewsletterSubmit = (event: Event) => {
  event.preventDefault()
  console.log('Newsletter submitted:', newsletterState)
}

// Feature tabs data
const activeFeatureTab = ref(0)
const featureTabs = [
  {
    title: 'Share team inboxes',
    subtitle: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    title: 'Deliver instant answers',
    subtitle: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
  },
  {
    title: 'Manage your team with reports',
    subtitle: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
  }
]

// Pricing features data
const pricingFeatures = [
  {
    title: 'Share team inboxes',
    subtitle: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    icon: 'i-lucide-message-square'
  },
  {
    title: 'Deliver instant answers',
    subtitle: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    icon: 'i-lucide-zap'
  },
  {
    title: 'Manage your team with reports',
    subtitle: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    icon: 'i-lucide-chart-bar'
  }
]

// Footer navigation
const footerNavList = [
  {
    label: 'Product',
    items: [
      { label: 'Overview', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Solutions', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Releases', href: '#' }
    ]
  },
  {
    label: 'Company',
    items: [
      { label: 'About us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Media kit', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blog', href: '#' },
      { label: 'Newsletter', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Help centre', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'Support', href: '#' }
    ]
  },
  {
    label: 'Use cases',
    items: [
      { label: 'Startups', href: '#' },
      { label: 'Enterprise', href: '#' },
      { label: 'Government', href: '#' },
      { label: 'SaaS centre', href: '#' },
      { label: 'Marketplaces', href: '#' },
      { label: 'Ecommerce', href: '#' }
    ]
  },
  {
    label: 'Social',
    items: [
      { label: 'X', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'AngelList', href: '#' },
      { label: 'Dribbble', href: '#' }
    ]
  },
  {
    label: 'Legal',
    items: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Licenses', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  }
]
</script>

<!-- Credit Card Component -->
<script lang="ts">
const CreditCard = defineComponent({
  props: {
    type: {
      type: String,
      default: 'brand',
      validator: (value: string) => ['brand', 'brand-dark', 'transparent', 'transparent-gradient', 'gray-dark'].includes(value)
    },
    cardHolder: {
      type: String,
      default: 'John Doe'
    }
  },
  setup(props) {
    const getCardClasses = () => {
      switch (props.type) {
        case 'brand':
          return 'bg-gradient-to-tr from-brand-900 to-brand-700 text-white'
        case 'brand-dark':
          return 'bg-gradient-to-tr from-brand-950 to-brand-800 text-white'
        case 'transparent':
          return 'bg-black/10 backdrop-blur-md border border-white/20 text-white'
        case 'transparent-gradient':
          return 'bg-black/10 bg-linear-to-br from-white/30 to-transparent backdrop-blur-md text-white'
        case 'gray-dark':
          return 'bg-gradient-to-tr from-neutral-800 to-neutral-700 text-white'
        default:
          return 'bg-gradient-to-tr from-brand-900 to-brand-700 text-white'
      }
    }

    return () => h('div', { class: `w-80 h-48 rounded-2xl p-4 shadow-lg ${getCardClasses()}` }, [
      h('div', { class: 'flex justify-between items-start' }, [
        h('span', { class: 'font-semibold' }, 'Untitled.'),
        h('svg', { viewBox: '0 0 24 24', class: 'w-6 h-6', fill: 'none', stroke: 'currentColor' }, [
          h('path', { d: 'M12 2v20M2 12h20', strokeWidth: '2', strokeLinecap: 'round' })
        ])
      ]),
      h('div', { class: 'mt-8 flex justify-between items-end' }, [
        h('div', {}, [
          h('p', { class: 'text-xs uppercase tracking-wider' }, props.cardHolder),
          h('p', { class: 'text-lg font-mono tracking-wider mt-1' }, '•••• •••• •••• 1234')
        ]),
        h('p', { class: 'text-xs' }, '06/28')
      ])
    ])
  }
})

// Pricing Card Component
const PricingCard = defineComponent({
  props: {
    title: String,
    description: String,
    price: String,
    badge: String,
    features: Array,
    class: String
  },
  setup(props) {
    return () => h('div', { class: `flex flex-col overflow-hidden rounded-2xl bg-bg-primary shadow-lg ring-1 ring-border-secondary_alt ${props.class || ''}` }, [
      // Header
      h('div', { class: 'flex flex-col-reverse gap-4 px-6 pt-6 pb-8 md:flex-row md:justify-between md:gap-8 md:px-8 md:pt-8 md:pb-6' }, [
        h('div', { class: 'flex flex-col gap-1' }, [
          h('div', { class: 'flex items-center gap-2' }, [
            h('h2', { class: 'text-xl font-semibold text-text-primary' }, props.title),
            props.badge && h('UBadge', { label: props.badge, color: 'primary', variant: 'solid', size: 'md' })
          ]),
          h('p', { class: 'text-md text-text-tertiary' }, props.description)
        ]),
        h('div', { class: 'flex items-baseline gap-1' }, [
          h('span', { class: '-translate-y-[5px] text-display-md font-semibold text-text-primary md:-translate-y-[15px]' }, '$'),
          h('span', { class: 'text-display-lg font-semibold text-text-primary md:text-display-xl' }, props.price?.replace('$', '') || '10'),
          h('span', { class: 'text-md font-medium text-text-tertiary' }, 'per month')
        ])
      ]),
      // Content
      h('div', { class: 'flex flex-col gap-6 border-t border-border-secondary px-6 py-8 md:px-8 md:pt-8 md:pb-10' }, [
        h('div', { class: 'flex flex-col gap-1' }, [
          h('p', { class: 'text-md font-semibold text-text-primary' }, 'FEATURES'),
          h('p', { class: 'text-md text-text-tertiary' }, [
            'Everything in our ',
            h('span', { class: 'font-semibold' }, 'free plan'),
            ' plus....'
          ])
        ]),
        h('ul', { class: 'grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2' },
          (props.features as string[]).map(feature =>
            h('li', { class: 'flex gap-3' }, [
              h('div', { class: 'flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-success-secondary text-icon-success' }, [
                h('svg', { width: '13', height: '11', viewBox: '0 0 13 11', fill: 'none' }, [
                  h('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z',
                    fill: 'currentColor'
                  })
                ])
              ]),
              h('span', { class: 'text-md text-text-tertiary' }, feature)
            ])
          )
        )
      ]),
      // Button
      h('div', { class: 'mt-auto flex flex-col gap-3 border-t border-border-secondary px-6 pt-6 pb-8 md:p-8' }, [
        h('UButton', { label: 'Get started', color: 'primary', size: 'xl', block: true })
      ])
    ])
  }
})

// Logo Component
const Logo = () => h('div', { class: 'flex items-center gap-1' }, [
  h('svg', { viewBox: '0 0 38 38', class: 'h-7 w-auto', fill: 'none' }, [
    h('rect', { width: '38', height: '38', rx: '8', fill: 'url(#logoGradient)' }),
    h('circle', { cx: '19', cy: '19', r: '8', fill: 'white' })
  ]),
  h('span', { class: 'text-xl font-bold text-text-primary' }, 'Untitled UI')
])
</script>

<style>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Container width */
.max-w-container {
  max-width: 1560px;
}
</style>
