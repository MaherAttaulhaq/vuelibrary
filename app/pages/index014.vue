<script setup lang="ts">
const mobileMenuOpen = ref(false)
const email = ref('')
const newsletterEmail = ref('')
const isLoading = ref(false)

const navigationItems = [
  { label: 'Products', type: 'dropdown', items: [
    { label: 'Overview', to: '/products' },
    { label: 'Features', to: '/products/features' },
    { label: 'Integrations', to: '/products/integrations' },
  ]},
  { label: 'Services', type: 'dropdown', items: [
    { label: 'Consulting', to: '/services/consulting' },
    { label: 'Support', to: '/services/support' },
    { label: 'Training', to: '/services/training' },
  ]},
  { label: 'Pricing', type: 'link', to: '/pricing' },
  { label: 'Resources', type: 'dropdown', items: [
    { label: 'Blog', to: '/resources/blog' },
    { label: 'Documentation', to: '/resources/docs' },
    { label: 'Help Center', to: '/resources/help' },
  ]},
  { label: 'About', type: 'link', to: '/about' },
]

const trustedCompanies = [
  { name: 'Odeaolabs', color: 'https://www.untitledui.com/logos/logotype/color/odeao-labs.svg', white: 'https://www.untitledui.com/logos/logotype/white/odeao-labs.svg' },
  { name: 'Kintsugi', color: 'https://www.untitledui.com/logos/logotype/color/kintsugi.svg', white: 'https://www.untitledui.com/logos/logotype/white/kintsugi.svg' },
  { name: 'Stackedlab', color: 'https://www.untitledui.com/logos/logotype/color/stacked-lab.svg', white: 'https://www.untitledui.com/logos/logotype/white/stacked-lab.svg' },
  { name: 'Magnolia', color: 'https://www.untitledui.com/logos/logotype/color/magnolia.svg', white: 'https://www.untitledui.com/logos/logotype/white/magnolia.svg' },
  { name: 'Warpspeed', color: 'https://www.untitledui.com/logos/logotype/color/warpspeed.svg', white: 'https://www.untitledui.com/logos/logotype/white/warpspeed.svg' },
  { name: 'Sisyphus', color: 'https://www.untitledui.com/logos/logotype/color/sisyphus.svg', white: 'https://www.untitledui.com/logos/logotype/white/sisyphus.svg' },
]

const integrations = [
  { name: 'Notion', logo: 'notion', description: 'Work faster and smarter by integrating directly with Notion, right in the app.' },
  { name: 'Slack', logo: 'slack', description: 'Work faster and smarter by integrating directly with Slack, right in the app.' },
  { name: 'Google Drive', logo: 'google_drive', description: 'Work faster and smarter by integrating directly with Google Drive, right in the app.' },
  { name: 'Intercom', logo: 'intercom', description: 'Work faster and smarter by integrating directly with Intercom, right in the app.' },
  { name: 'Jira', logo: 'jira', description: 'Work faster and smarter by integrating directly with Jira, right in the app.' },
  { name: 'Dropbox', logo: 'dropbox', description: 'Work faster and smarter by integrating directly with Dropbox, right in the app.' },
]

const stats = [
  { label: 'Projects completed', value: '400+' },
  { label: 'Return on investment', value: '600%' },
  { label: 'Global downloads', value: '10k' },
]

async function onSubmitNewsletter() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('Subscribed:', newsletterEmail.value)
  newsletterEmail.value = ''
  isLoading.value = false
}
</script>

<template>
  <div class="bg-muted">
    <!-- Hero Section with Secondary Background -->
    <div class="relative overflow-hidden bg-muted-100 dark:bg-muted-900">
      <img
        alt="Grid background pattern"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
      />
      <img
        alt="Grid background pattern"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-md-mobile.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2] md:hidden"
      />

      <!-- Header -->
      <header class="relative flex h-16 w-full items-center justify-center md:h-18">
        <div class="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8">
          <div class="flex w-full justify-between gap-4">
            <div class="flex flex-1 items-center gap-5">
              <!-- Logo Desktop -->
              <NuxtLink to="/" class="flex w-max items-center justify-start overflow-visible h-7 md:max-lg:hidden">
                <svg viewBox="0 0 38 38" fill="none" class="size-8 origin-center scale-[1.2] aspect-square h-full w-auto shrink-0">
                  <g filter="url(#filter0_logo)">
                    <g clip-path="url(#clip0_logo)">
                      <path d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z" fill="currentColor"/>
                      <path d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z" fill="url(#paint0_logo)" fill-opacity="0.2"/>
                    </g>
                  </g>
                </svg>
                <div class="aspect-[0.3] h-full" />
                <svg viewBox="0 0 97 32" fill="none" class="aspect-[3] h-full shrink-0">
                  <path d="M33.9101 10.2372C34.2321 10.5355 34.6179 10.6847 35.0678 10.6847C35.5176 10.6847 35.9011 10.5355 36.2183 10.2372C36.5403 9.9342 36.7013 9.57199 36.7013 9.15058C36.7013 8.73392 36.5403 8.37644 36.2183 8.07814C35.9011 7.77511 35.5176 7.6236 35.0678 7.6236C34.6179 7.6236 34.2321 7.77511 33.9101 8.07814C33.5928 8.37644 33.4342 8.73392 33.4342 9.15058C33.4342 9.57199 33.5928 9.9342 33.9101 10.2372Z" class="fill-fg-primary"/>
                  <path d="M11.2997 20.6847C11.8063 19.8892 12.0597 18.9612 12.0597 17.9006V8.45456H8.98438V17.6378C8.98438 18.1918 8.86127 18.6842 8.61506 19.1151C8.37358 19.5459 8.0303 19.8845 7.58523 20.1307C7.14489 20.3769 6.62642 20.5 6.02983 20.5C5.43797 20.5 4.91951 20.3769 4.47443 20.1307C4.02936 19.8845 3.68371 19.5459 3.4375 19.1151C3.19602 18.6842 3.07528 18.1918 3.07528 17.6378V8.45456H0V17.9006C0 18.9612 0.250947 19.8892 0.752841 20.6847C1.25473 21.4801 1.95786 22.1004 2.86222 22.5455C3.76657 22.9858 4.82244 23.206 6.02983 23.206C7.23248 23.206 8.28599 22.9858 9.19034 22.5455C10.0947 22.1004 10.7978 21.4801 11.2997 20.6847Z" class="fill-fg-primary"/>
                </svg>
              </NuxtLink>
              
              <!-- Logo Mobile -->
              <NuxtLink to="/" class="md:hidden">
                <svg viewBox="0 0 38 38" fill="none" class="size-8">
                  <!-- Mobile logo SVG -->
                </svg>
              </NuxtLink>

              <!-- Desktop Navigation -->
              <nav class="max-md:hidden">
                <ul class="flex items-center gap-0.5">
                  <li v-for="item in navigationItems" :key="item.label">
                    <UDropdownMenu v-if="item.type === 'dropdown'" :items="item.items">
                      <UButton variant="link" color="muted" class="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold hover:text-muted-700 dark:hover:text-muted-300">
                        {{ item.label }}
                        <Icon name="lucide:chevron-down" class="size-4" />
                      </UButton>
                    </UDropdownMenu>
                    <ULink v-else :to="item.to" class="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold text-muted-600 hover:text-muted-900 dark:text-muted-400 dark:hover:text-muted-100">
                      {{ item.label }}
                    </ULink>
                  </li>
                </ul>
              </nav>
            </div>

            <!-- Auth Buttons -->
            <div class="hidden items-center gap-3 md:flex">
              <UButton variant="ghost" color="muted" size="md">Log in</UButton>
              <UButton variant="solid" color="primary" size="md">Sign up</UButton>
            </div>

            <!-- Mobile Menu Button -->
            <UButton
              variant="ghost"
              color="muted"
              class="ml-auto cursor-pointer rounded-lg p-2 md:hidden"
              @click="mobileMenuOpen = !mobileMenuOpen"
            >
              <Icon v-if="!mobileMenuOpen" name="lucide:menu" class="size-6" />
              <Icon v-else name="lucide:x" class="size-6" />
            </UButton>
          </div>
        </div>
      </header>

      <!-- Mobile Menu Overlay -->
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-50 bg-muted/95 backdrop-blur-sm md:hidden">
        <div class="flex flex-col p-6 gap-6">
          <div class="flex justify-end">
            <UButton variant="ghost" color="muted" @click="mobileMenuOpen = false">
              <Icon name="lucide:x" class="size-6" />
            </UButton>
          </div>
          <nav class="flex flex-col gap-4">
            <div v-for="item in navigationItems" :key="item.label">
              <UDropdownMenu v-if="item.type === 'dropdown'" :items="item.items" :ui="{ content: 'static w-full' }">
                <UButton variant="link" color="muted" class="w-full justify-between text-lg font-semibold">
                  {{ item.label }}
                  <Icon name="lucide:chevron-down" class="size-4" />
                </UButton>
              </UDropdownMenu>
              <ULink v-else :to="item.to" class="py-2 text-lg font-semibold text-muted-600 dark:text-muted-400" @click="mobileMenuOpen = false">
                {{ item.label }}
              </ULink>
            </div>
            <div class="mt-4 flex flex-col gap-3 pt-4 border-t border-muted-200 dark:border-muted-800">
              <UButton variant="ghost" color="muted" block class="justify-center">Log in</UButton>
              <UButton variant="solid" color="primary" block class="justify-center">Sign up</UButton>
            </div>
          </nav>
        </div>
      </div>

      <!-- Hero Content -->
      <section class="py-16 md:pb-24">
        <div class="relative mx-auto grid max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:min-h-160 lg:items-center">
          <div class="z-10 flex max-w-200 flex-col items-start">
            <h1 class="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Customer service software for customer-first teams</h1>
            <p class="mt-4 max-w-xl text-lg text-muted-600 dark:text-muted-400 md:mt-6 md:text-xl">The best customer service software for customer-first teams. Industry-leading email and live chat support.</p>
            <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
              <UButton variant="outline" color="muted" size="lg">
                <Icon name="lucide:play" class="size-5" />
                Demo
              </UButton>
              <UButton variant="solid" color="primary" size="lg">Sign up</UButton>
            </div>
          </div>
          <div class="relative lg:absolute lg:top-0 lg:right-8 lg:h-full lg:w-140">
            <img class="inset-0 h-60 w-full rounded-tr-[32px] rounded-bl-[32px] object-cover md:h-110 md:rounded-tr-[64px] md:rounded-bl-[64px] lg:h-full" src="https://www.untitledui.com/marketing/workspace.webp" alt="Workspace"/>
          </div>
        </div>
      </section>
    </div>

    <!-- Trusted By Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col gap-8">
          <p class="text-center text-md font-medium text-muted-500 dark:text-muted-400">Join 4,000+ companies already growing</p>
          <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
            <img
              v-for="company in trustedCompanies"
              :key="company.name"
              :alt="company.name"
              :src="company.color"
              class="h-9 md:h-10 dark:hidden"
            />
            <img
              v-for="company in trustedCompanies"
              :key="`${company.name}-dark`"
              :alt="company.name"
              :src="company.white"
              class="h-9 opacity-85 not-dark:hidden md:h-10"
            />
          </div>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-container px-4 md:px-8">
      <hr class="h-px w-full border-none bg-muted-200 dark:bg-muted-800"/>
    </div>

    <!-- Integrations Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <span class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md">Integrations</span>
          <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Get more value from your tools</h2>
          <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favorite tools are just a click away.</p>
        </div>
        
        <div class="mt-12 md:mt-16">
          <ul class="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            <li v-for="integration in integrations" :key="integration.name">
              <div class="mt-6 flex max-w-sm flex-col items-center gap-4 rounded-2xl bg-muted-100 dark:bg-muted-900 px-6 pb-8 text-center">
                <span class="-mt-[26px] flex size-13 shrink-0 items-center justify-center rounded-lg bg-muted shadow-xs ring-1 ring-muted-200 dark:ring-muted-800 md:-mt-8 md:size-16 md:rounded-xl">
                  <div class="size-12 flex items-center justify-center md:size-14">
                    <span class="text-2xl font-bold text-brand-600">{{ integration.name.charAt(0) }}</span>
                  </div>
                </span>
                <div>
                  <h3 class="text-lg font-semibold text-primary">{{ integration.name }} integration</h3>
                  <p class="mt-1 text-md text-muted-600 dark:text-muted-400">{{ integration.description }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Features Dashboard Section -->
    <section class="bg-muted pb-16 md:pb-0">
      <div class="bg-muted-100 dark:bg-muted-900 pt-16 pb-28 md:pt-24 md:pb-40">
        <div class="mx-auto w-full max-w-container px-4 md:px-8">
          <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <span class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md">Features</span>
            <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Cutting-edge features for advanced analytics</h2>
            <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
          </div>
        </div>
      </div>
      <div class="mx-auto -mt-17 w-full max-w-container px-4 pt-1 md:-mt-26 md:overflow-hidden md:px-8 md:pt-2">
        <div class="flex flex-col md:items-start">
          <div class="flex h-full w-full items-center justify-center md:max-h-105 md:w-full md:items-start lg:max-h-140">
            <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp" class="size-full rounded object-cover ring-4 ring-white/10 dark:ring-black/10 md:rounded-xl md:ring-8 dark:hidden"/>
            <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp" class="size-full rounded object-cover ring-4 ring-white/10 dark:ring-black/10 not-dark:hidden md:rounded-xl md:ring-8"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col gap-12 md:gap-16">
          <div class="flex w-full flex-col items-center self-center text-center md:max-w-3xl">
            <div class="relative flex shrink-0 items-center justify-center rounded-full size-14 bg-brand-600 text-white">
              <Icon name="lucide:zap" class="size-7" />
            </div>
            <h2 class="mt-4 text-display-sm font-semibold text-primary md:mt-6 md:text-display-md">Unleash the full power of data</h2>
            <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">Everything you need to convert, engage, and retain more users.</p>
          </div>
          <dl class="flex w-full flex-col justify-center gap-8 md:max-w-3xl md:flex-row md:gap-4 md:self-center">
            <div v-for="(stat, index) in stats" :key="stat.label" class="flex flex-1 flex-col-reverse gap-3 text-center">
              <dt class="text-lg font-semibold text-primary">{{ stat.label }}</dt>
              <dd class="text-display-lg font-semibold text-brand-700 dark:text-brand-300 md:text-display-xl">{{ stat.value }}</dd>
            </div>
            <div v-if="index < stats.length - 1" class="hidden border-l border-muted-200 dark:border-muted-800 md:block"></div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Free Trial Banner -->
    <section class="bg-muted pb-16 md:pb-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-muted-100 dark:bg-muted-900 px-6 py-10 lg:flex-row lg:p-16">
          <div class="flex max-w-3xl flex-1 flex-col">
            <h2 class="text-display-sm font-semibold text-primary">
              <span class="hidden md:inline">Start your 30-day free trial</span>
              <span class="md:hidden">Start your free trial</span>
            </h2>
            <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 lg:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
          </div>
          <div class="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
            <UButton variant="outline" color="muted">Learn more</UButton>
            <UButton variant="solid" color="primary">Get started</UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-muted-100 dark:bg-muted-900 py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <figure class="flex w-full shrink-0 snap-start flex-col gap-8 text-center">
          <img alt="Wildcrafted" src="https://www.untitledui.com/logos/logotype/color/wildcrafted.svg" class="h-10 dark:hidden" aria-hidden="true"/>
          <img alt="Wildcrafted" src="https://www.untitledui.com/logos/logotype/white/wildcrafted.svg" class="h-10 opacity-85 not-dark:hidden" aria-hidden="true"/>
          <blockquote class="text-display-sm font-medium text-primary md:text-display-lg">Love the simplicity of the service and the prompt customer support. We can't imagine working without it.</blockquote>
          <figcaption class="flex justify-center">
            <div class="flex flex-col items-center gap-4">
              <UAvatar src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80" alt="Amelie Laurent" size="lg" />
              <div class="flex flex-col gap-1">
                <p class="text-lg font-semibold text-primary">Amélie Laurent</p>
                <cite class="text-md text-muted-500 dark:text-muted-400 not-italic">CX Manager, Sisyphus</cite>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="overflow-hidden bg-muted py-16 md:py-24">
      <div class="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
        <div class="flex w-full max-w-3xl flex-col">
          <h1 class="text-display-sm font-semibold text-primary md:text-display-lg">Join 4,000+ startups growing with Untitled</h1>
          <ul class="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
            <li class="flex gap-3">
              <Icon name="lucide:check-circle" class="shrink-0 text-brand-500 size-7" />
              <span class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg">30-day free trial</span>
            </li>
            <li class="flex gap-3">
              <Icon name="lucide:check-circle" class="shrink-0 text-brand-500 size-7" />
              <span class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg">Personalized onboarding</span>
            </li>
            <li class="flex gap-3">
              <Icon name="lucide:check-circle" class="shrink-0 text-brand-500 size-7" />
              <span class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg">Access to all features</span>
            </li>
          </ul>
          <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
            <UButton variant="outline" color="muted">Learn more</UButton>
            <UButton variant="solid" color="primary">Get started</UButton>
          </div>
        </div>
        <div class="relative mx-auto w-full lg:h-128">
          <div class="top-0 left-0 w-full max-w-5xl rounded-[9.03px] bg-muted p-[0.9px] shadow-lg ring-[0.56px] ring-muted-300 dark:ring-muted-700 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px] lg:absolute lg:w-max">
            <div class="rounded-[7.9px] bg-muted p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
              <div class="relative overflow-hidden rounded-[6.77px] bg-muted-50 ring-[0.56px] ring-muted-200 dark:ring-muted-800 md:rounded-[20.21px] md:ring-[1.68px]">
                <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp" class="object-cover object-left-top dark:hidden"/>
                <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp" class="object-cover object-left-top not-dark:hidden"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-muted-100 dark:bg-muted-900 py-16 md:py-24">
      <div class="mx-auto flex w-full max-w-container flex-col items-start justify-between gap-8 px-4 md:px-8 lg:flex-row">
        <div>
          <h1 class="text-display-sm font-semibold text-primary md:text-display-md">Sign up for our newsletter</h1>
          <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">Be the first to know about releases and industry news and insights.</p>
        </div>
        <form class="flex w-full flex-col gap-4 md:max-w-120 md:flex-row" @submit.prevent="onSubmitNewsletter">
          <UInput
            v-model="newsletterEmail"
            type="email"
            placeholder="Enter your email"
            required
            size="lg"
            class="flex-1"
          >
            <template #description>
              <span>We care about your data in our <ULink href="#" class="rounded-xs underline underline-offset-3">privacy policy</ULink>.</span>
            </template>
          </UInput>
          <UButton type="submit" variant="solid" color="primary" size="lg" :loading="isLoading">
            Subscribe
          </UButton>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-muted py-12 md:pt-16">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <nav>
          <ul class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            <li>
              <h4 class="text-sm font-semibold text-muted-400">Product</h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Overview</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Features</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Solutions <UBadge size="xs" class="ml-1">New</UBadge></ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Tutorials</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Pricing</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Releases</ULink></li>
              </ul>
            </li>
            <li>
              <h4 class="text-sm font-semibold text-muted-400">Company</h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">About us</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Careers</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Press</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">News</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Media kit</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Contact</ULink></li>
              </ul>
            </li>
            <li>
              <h4 class="text-sm font-semibold text-muted-400">Resources</h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Blog</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Newsletter</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Events</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Help centre</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Tutorials</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Support</ULink></li>
              </ul>
            </li>
            <li>
              <h4 class="text-sm font-semibold text-muted-400">Use cases</h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Startups</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Enterprise</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Government</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">SaaS centre</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Marketplaces</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Ecommerce</ULink></li>
              </ul>
            </li>
            <li>
              <h4 class="text-sm font-semibold text-muted-400">Social</h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">X</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">LinkedIn</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Facebook</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">GitHub</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">AngelList</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Dribbble</ULink></li>
              </ul>
            </li>
            <li>
              <h4 class="text-sm font-semibold text-muted-400">Legal</h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Terms</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Privacy</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Cookies</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Licenses</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Settings</ULink></li>
                <li><ULink to="#" class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm">Contact</ULink></li>
              </ul>
            </li>
          </ul>
        </nav>   
        <div class="mt-12 flex flex-col justify-between gap-6 border-t border-muted-200 dark:border-muted-800 pt-8 md:mt-16 md:flex-row md:items-center">
          <div class="flex items-center justify-start overflow-visible h-7 w-min">
            <svg viewBox="0 0 38 38" fill="none" class="size-8 origin-center scale-[1.2] aspect-square h-full w-auto shrink-0">
              <!-- Footer logo SVG -->
            </svg>
            <div class="aspect-[0.3] h-full"></div>
            <svg viewBox="0 0 97 32" fill="none" class="aspect-[3] h-full shrink-0">
              <!-- Footer text logo SVG -->
            </svg>
          </div>
          <p class="text-sm text-muted-400 dark:text-muted-500">© 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Filter definitions for logos */
.filter0_logo {
  /* Filter styles from original */
}
</style>