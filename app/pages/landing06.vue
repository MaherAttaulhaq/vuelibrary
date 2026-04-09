<template>
  <div class="bg-muted relative overflow-hidden">
    <!-- Header -->
    <header class="relative flex h-16 w-full items-center justify-center md:h-18">
      <div class="flex size-full max-w-container flex-1 items-center px-4 md:px-8">
        <div class="flex w-full justify-between gap-4">
          <!-- Logo Area -->
          <div class="flex flex-1 items-center gap-5">
            <div class="flex w-max items-center justify-start overflow-visible h-7 md:max-lg:hidden">
              <UIcon name="i-heroicons-square-3-stack-3d" class="size-8 text-primary" />
              <div class="aspect-[0.3] h-full"></div>
              <svg viewBox="0 0 97 32" fill="none" class="aspect-[3] h-full shrink-0 text-primary">
                <!-- Your SVG path here - keeping original paths but using currentColor -->
                <path d="M33.9101 10.2372C34.2321 10.5355 34.6179 10.6847 35.0678 10.6847C35.5176 10.6847 35.9011 10.5355 36.2183 10.2372C36.5403 9.9342 36.7013 9.57199 36.7013 9.15058C36.7013 8.73392 36.5403 8.37644 36.2183 8.07814C35.9011 7.77511 35.5176 7.6236 35.0678 7.6236C34.6179 7.6236 34.2321 7.77511 33.9101 8.07814C33.5928 8.37644 33.4342 8.73392 33.4342 9.15058C33.4342 9.57199 33.5928 9.9342 33.9101 10.2372Z" fill="currentColor"/>
                <path d="M11.2997 20.6847C11.8063 19.8892 12.0597 18.9612 12.0597 17.9006V8.45456H8.98438V17.6378C8.98438 18.1918 8.86127 18.6842 8.61506 19.1151C8.37358 19.5459 8.0303 19.8845 7.58523 20.1307C7.14489 20.3769 6.62642 20.5 6.02983 20.5C5.43797 20.5 4.91951 20.3769 4.47443 20.1307C4.02936 19.8845 3.68371 19.5459 3.4375 19.1151C3.19602 18.6842 3.07528 18.1918 3.07528 17.6378V8.45456H0V17.9006C0 18.9612 0.250947 19.8892 0.752841 20.6847C1.25473 21.4801 1.95786 22.1004 2.86222 22.5455C3.76657 22.9858 4.82244 23.206 6.02983 23.206C7.23248 23.206 8.28599 22.9858 9.19034 22.5455C10.0947 22.1004 10.7978 21.4801 11.2997 20.6847Z" fill="currentColor"/>
                <!-- ... rest of the SVG paths ... -->
              </svg>
            </div>
            <nav class="max-md:hidden">
              <ul class="flex items-center gap-0.5">
                <li><UButton variant="link" class="text-secondary">Products</UButton></li>
                <li><UButton variant="link" class="text-secondary">Services</UButton></li>
                <li><UButton variant="link" class="text-secondary">Pricing</UButton></li>
                <li><UButton variant="link" class="text-secondary">Resources</UButton></li>
                <li><UButton variant="link" class="text-secondary">About</UButton></li>
              </ul>
            </nav>
          </div>
          <!-- Actions -->
          <div class="hidden items-center gap-3 md:flex">
            <UButton variant="ghost" color="primary">Log in</UButton>
            <UButton color="primary">Sign up</UButton>
          </div>
          <UButton variant="ghost" icon="i-heroicons-bars-3" class="md:hidden" />
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden py-16 lg:flex lg:min-h-180 lg:py-0">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pt-32 lg:pr-8 lg:pb-24">
          <UBadge variant="subtle" class="hidden md:flex">We're hiring! <span class="ml-2">Join our remote team</span></UBadge>
          <h1 class="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Smart business credit cards</h1>
          <p class="mt-4 text-lg text-tertiary md:mt-6 md:max-w-lg md:text-xl">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</p>
          <form class="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start">
            <UInput type="email" placeholder="Enter your email" size="lg" class="w-full" />
            <UButton type="submit" color="primary" size="lg" class="justify-center">Get started</UButton>
          </form>
        </div>
      </div>
      <!-- Hero Image/Illustration Area -->
      <div class="relative mt-16 h-80 w-full bg-secondary px-4 md:h-95 md:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
        <!-- Cards Carousel Mockup -->
        <div class="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden sm:pl-[30vw] lg:overflow-visible lg:pl-0">
          <div class="flex w-max flex-col gap-4 [transform:var(--transform-mobile)] lg:[transform:var(--transform-desktop)]" style="--transform-mobile:scale(0.585) rotate(30deg) translate(-87px, 799px);--transform-desktop:rotate(30deg) translate(186px, 291px)">
            <div class="flex gap-4 pl-40">
              <UCard class="w-80 h-48 bg-gradient-to-tr from-primary-900 to-primary-700 text-white shadow-xl">
                <template #header>
                  <div class="flex justify-between">
                    <span class="font-semibold">Untitled.</span>
                    <UIcon name="i-heroicons-wifi" class="w-5 h-5" />
                  </div>
                </template>
                <div class="flex justify-between items-end">
                  <div>
                    <div class="text-xs uppercase">Phoenix baker</div>
                    <div class="font-mono tracking-wider">1234 1234 1234 1234</div>
                  </div>
                  <UBadge>VISA</UBadge>
                </div>
              </UCard>
              <!-- Repeat cards for effect -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Logo Cloud Section -->
    <USection class="py-16 md:py-24">
      <div class="text-center">
        <p class="text-md font-medium text-tertiary">Join 4,000+ companies already growing</p>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-8">
          <!-- Logo images -->
          <img v-for="logo in logos" :key="logo" :src="logo" class="h-9 md:h-10 opacity-60" />
        </div>
      </div>
    </USection>

    <!-- Features Section -->
    <USection class="overflow-hidden bg-primary py-16 md:py-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="flex w-full flex-col lg:max-w-3xl">
          <span class="text-sm font-semibold text-primary-600 md:text-md">Features</span>
          <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Stop leaving money on the table</h2>
          <p class="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.</p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
          <ul class="grid grid-cols-1 gap-x-8 gap-y-10 md:gap-y-12">
            <li v-for="feature in features" :key="feature.title">
              <div class="flex max-w-140 gap-4">
                <div class="relative shrink-0 items-center justify-center bg-primary shadow-sm ring-1 ring-primary size-12 rounded-[10px] text-primary-600 hidden md:inline-flex">
                  <UIcon :name="feature.icon" class="size-6" />
                </div>
                <div>
                  <h3 class="mt-1.5 text-lg font-semibold text-primary md:mt-2.5">{{ feature.title }}</h3>
                  <p class="mt-1 text-md text-tertiary">{{ feature.description }}</p>
                  <UButton variant="link" color="primary" class="mt-4 p-0">Learn more <UIcon name="i-heroicons-arrow-right" /></UButton>
                </div>
              </div>
            </li>
          </ul>
          <div class="relative -mx-4 flex h-80 items-center justify-center bg-tertiary md:mr-0 md:h-120 md:rounded-2xl lg:h-140">
            <!-- Feature image placeholder -->
          </div>
        </div>
      </div>
    </USection>

    <!-- Pricing Section -->
    <USection class="bg-secondary py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col gap-12 md:gap-16 xl:flex-row">
          <div class="w-full max-w-3xl xl:max-w-md">
            <span class="block text-sm font-semibold text-primary-600 md:text-md">Upgrade</span>
            <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Pricing plans that scale with you</h2>
            <p class="mt-4 text-lg text-tertiary md:mt-5">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
          </div>
          <div class="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-8">
            <UCard v-for="plan in plans" :key="plan.name" class="flex flex-col">
              <div class="text-center">
                <div class="mx-auto w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700">
                  <UIcon :name="plan.icon" class="size-6" />
                </div>
                <h3 class="mt-4 text-xl font-semibold text-primary-600">{{ plan.name }}</h3>
                <div class="mt-2 text-display-md font-semibold text-primary">{{ plan.price }}/mth</div>
                <p class="mt-2 text-md text-tertiary">Billed annually.</p>
              </div>
              <UDivider class="my-6" />
              <ul class="space-y-4 flex-grow">
                <li v-for="feature in plan.features" :key="feature" class="flex gap-3">
                  <UIcon name="i-heroicons-check-circle" class="size-5 text-primary-500 shrink-0" />
                  <span class="text-tertiary text-md">{{ feature }}</span>
                </li>
              </ul>
              <UButton color="primary" block class="mt-8">Get started</UButton>
            </UCard>
          </div>
        </div>
      </div>
    </USection>

    <!-- CTA Section -->
    <USection class="bg-primary pb-16 md:pb-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <UCard class="text-center bg-primary-50 dark:bg-primary-900/20">
          <h2 class="text-display-sm font-semibold text-primary">Start your 30-day free trial</h2>
          <p class="mt-4 text-lg text-tertiary">Join over 4,000+ startups already growing with Untitled.</p>
          <div class="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
            <UButton variant="outline">Learn more</UButton>
            <UButton color="primary">Get started</UButton>
          </div>
        </UCard>
      </div>
    </USection>

    <!-- Footer -->
    <UFooter class="bg-primary pt-12 pb-8">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
          <div class="flex flex-col gap-8 md:items-start">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-square-3-stack-3d" class="size-8 text-primary" />
              <span class="text-xl font-bold text-primary">Untitled</span>
            </div>
            <p class="text-md text-tertiary max-w-xs">Banking technology that has your back.</p>
          </div>
          <div class="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-6">
            <UButton v-for="link in footerLinks" :key="link" variant="link" class="text-tertiary">{{ link }}</UButton>
          </div>
        </div>
        <UDivider class="my-8" />
        <div class="flex flex-col-reverse justify-between gap-6 md:flex-row">
          <p class="text-sm text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
          <div class="flex gap-4">
            <UButton v-for="social in socialLinks" :key="social.name" :icon="social.icon" variant="ghost" size="sm" class="text-quaternary" />
          </div>
        </div>
      </div>
    </UFooter>
  </div>
</template>

<script setup>
// Data for dynamic rendering
const logos = [
  'https://www.untitledui.com/logos/logotype/color/odeao-labs.svg',
  'https://www.untitledui.com/logos/logotype/color/kintsugi.svg',
  'https://www.untitledui.com/logos/logotype/color/stacked-lab.svg',
  'https://www.untitledui.com/logos/logotype/color/magnolia.svg',
  'https://www.untitledui.com/logos/logotype/color/warpspeed.svg',
  'https://www.untitledui.com/logos/logotype/color/sisyphus.svg'
]

const features = [
  {
    icon: 'i-heroicons-chat-bubble-left-right',
    title: 'Unlimited cards',
    description: 'Give your team the autonomy they need with access to as many cards as they need.'
  },
  {
    icon: 'i-heroicons-bolt',
    title: 'Easy expense policies',
    description: 'Every card comes with configurable spending limits, purchase restrictions, and cancellations.'
  },
  {
    icon: 'i-heroicons-chart-bar',
    title: 'Advanced analytics',
    description: 'An all-in-one platform that helps you balance everything your team need to be happy.'
  }
]

const plans = [
  {
    name: 'Basic plan',
    price: '$10',
    icon: 'i-heroicons-sparkles',
    features: ['Access to all basic features', 'Basic reporting and analytics', 'Up to 10 individual users', '20 GB individual data', 'Basic chat and email support']
  },
  {
    name: 'Business plan',
    price: '$20',
    icon: 'i-heroicons-cube',
    features: ['200+ integrations', 'Advanced reporting', 'Up to 20 individual users', '40 GB individual data', 'Priority chat and email support']
  }
]

const footerLinks = ['Overview', 'Features', 'Pricing', 'Careers', 'Help', 'Privacy']
const socialLinks = [
  { name: 'X', icon: 'i-heroicons-x-mark' },
  { name: 'LinkedIn', icon: 'i-heroicons-linkedin' },
  { name: 'Facebook', icon: 'i-heroicons-facebook' },
  { name: 'GitHub', icon: 'i-heroicons-github' }
]
</script>

<style scoped>
/* Any custom styles if needed, though Nuxt UI handles most */
</style>