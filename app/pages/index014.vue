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

const features = [
  {
    icon: 'lucide:message-circle',
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    benefits: ['Leverage automation to move fast', 'Always give customers a human to chat to', 'Automate customer support and close leads faster']
  },
  {
    icon: 'lucide:zap',
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    benefits: ['Keep your customers in the loop with live chat', 'Embed help articles right on your website', 'Customers never have to leave the page to find an answer']
  },
  {
    icon: 'lucide:bar-chart-2',
    title: 'Manage your team with reports',
    description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    benefits: ['Filter, export, and drilldown on the data quickly', 'Save, schedule, and automate reports to your inbox', 'Connect the tools you already use with 100+ integrations']
  }
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
    <!-- Hero Section -->
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
                  <!-- Additional paths -->
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
            <p class="mt-4 max-w-xl text-lg text-balance text-muted-600 dark:text-muted-400 md:mt-6 md:text-xl">The best customer service software for customer-first teams. Industry-leading email and live chat support.</p>
            
            <form class="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start" @submit.prevent="onSubmitNewsletter">
              <UInput
                v-model="email"
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
                Get started
              </UButton>
            </form>
          </div>
          
          <div class="relative lg:absolute lg:top-0 lg:right-8 lg:h-full lg:w-140">
            <svg class="absolute -bottom-2 left-4 hidden -translate-x-1/2 text-brand-500 lg:block" width="305" height="297" viewBox="0 0 305 297" fill="none">
              <path d="M15.0243 137.273C15.0243 137.273 117.788 224.619 301.934 145.676M31.6228 176.648C31.6228 176.648 10.7487 138.769 12.6572 136.157C14.5721 133.538 44.762 125.838 48.6753 125.389" stroke="currentColor" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <img class="inset-0 h-60 w-full object-cover md:h-110 lg:h-full" src="https://www.untitledui.com/images/portraits/lana-steiner" alt="Portrait"/>
          </div>
        </div>
      </section>
    </div>

    <!-- Features Section -->
    <section class="flex flex-col gap-12 overflow-hidden bg-muted pb-16 sm:gap-16 md:gap-20 md:pb-24 lg:gap-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <span class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md">Features</span>
          <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Beautiful analytics to grow smarter</h2>
          <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
      </div>
      
      <div class="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
        <!-- Feature 1 -->
        <div class="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
          <div class="max-w-xl flex-1 self-center">
            <div class="relative flex shrink-0 items-center justify-center rounded-full size-12 bg-brand-600 text-white">
              <Icon name="lucide:message-circle" class="size-6" />
            </div>
            <h2 class="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Share team inboxes</h2>
            <p class="mt-2 text-md text-muted-600 dark:text-muted-400 md:mt-4 md:text-lg">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            <ul class="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
              <li v-for="benefit in features[0].benefits" :key="benefit" class="flex gap-3">
                <Icon name="lucide:check-circle" class="shrink-0 text-brand-500 size-7" />
                <span class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg">{{ benefit }}</span>
              </li>
            </ul>
          </div>
          <div class="relative -ml-4 w-screen flex-1 bg-muted-100 dark:bg-muted-900 px-4 py-6 md:ml-0 md:min-h-128 md:w-full md:overflow-hidden md:p-0 lg:overflow-visible">
            <div class="top-0 left-0 bg-muted-100 dark:bg-muted-900 md:absolute md:h-full md:w-screen lg:overflow-hidden">
              <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp" class="top-12 left-12 w-full rounded object-contain object-left-top ring-4 ring-white/10 dark:ring-black/10 md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl dark:hidden"/>
              <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp" class="top-12 left-12 w-full rounded object-contain object-left-top ring-4 ring-white/10 dark:ring-black/10 not-dark:hidden md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl"/>
            </div>
          </div>
        </div>
        
        <!-- Feature 2 -->
        <div class="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
          <div class="max-w-xl flex-1 self-center lg:order-last">
            <div class="relative flex shrink-0 items-center justify-center rounded-full size-12 bg-brand-600 text-white">
              <Icon name="lucide:zap" class="size-6" />
            </div>
            <h2 class="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Deliver instant answers</h2>
            <p class="mt-2 text-md text-muted-600 dark:text-muted-400 md:mt-4 md:text-lg">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <ul class="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
              <li v-for="benefit in features[1].benefits" :key="benefit" class="flex gap-3">
                <Icon name="lucide:check-circle" class="shrink-0 text-brand-500 size-7" />
                <span class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg">{{ benefit }}</span>
              </li>
            </ul>
          </div>
          <div class="relative -ml-4 h-90 w-screen overflow-hidden bg-muted-100 dark:bg-muted-900 px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
            <div class="top-0 right-0 h-full bg-muted-100 dark:bg-muted-900 md:absolute md:w-screen lg:overflow-hidden">
              <svg width="314" viewBox="0 0 314 640" fill="none" preserveAspectRatio="xMidYMin slice" class="h-auto text-black dark:text-white absolute top-28 right-1/2 hidden w-full translate-x-[30%] md:block md:w-78.5 md:max-w-none lg:right-62 lg:translate-x-0">
                <!-- iPhone mockup SVG -->
              </svg>
              <svg width="314" viewBox="0 0 314 640" fill="none" preserveAspectRatio="xMidYMin slice" class="h-auto text-black dark:text-white top-12 right-1/2 mx-auto w-71 drop-shadow-iphone-mockup md:absolute md:mx-0 md:w-78.5 md:max-w-none md:translate-x-[70%] lg:right-12 lg:translate-x-0">
                <!-- iPhone mockup SVG -->
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Feature 3 -->
        <div class="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
          <div class="max-w-xl flex-1 self-center">
            <div class="relative flex shrink-0 items-center justify-center rounded-full size-12 bg-brand-600 text-white">
              <Icon name="lucide:bar-chart-2" class="size-6" />
            </div>
            <h2 class="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Manage your team with reports</h2>
            <p class="mt-2 text-md text-muted-600 dark:text-muted-400 md:mt-4 md:text-lg">Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            <ul class="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
              <li v-for="benefit in features[2].benefits" :key="benefit" class="flex gap-3">
                <Icon name="lucide:check-circle" class="shrink-0 text-brand-500 size-7" />
                <span class="text-muted-600 dark:text-muted-400 pt-0.5 text-md md:pt-0 md:text-lg">{{ benefit }}</span>
              </li>
            </ul>
          </div>
          <div class="relative -ml-4 h-90 w-screen overflow-hidden bg-muted-100 dark:bg-muted-900 px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
            <div class="top-0 left-0 bg-muted-100 dark:bg-muted-900 md:absolute md:h-full md:w-screen lg:overflow-hidden">
              <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp" class="absolute top-12 left-50 w-full rounded object-contain object-left-top ring-4 ring-white/10 dark:ring-black/10 max-md:hidden md:h-[120%] md:w-auto md:max-w-3xl md:rounded-[10px] dark:hidden"/>
              <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp" class="absolute top-12 left-50 w-full rounded object-contain object-left-top ring-4 ring-white/10 dark:ring-black/10 not-dark:hidden max-md:hidden md:h-[120%] md:w-auto md:max-w-3xl md:rounded-[10px]"/>
              <svg width="314" viewBox="0 0 314 640" fill="none" preserveAspectRatio="xMidYMin slice" class="h-auto text-black dark:text-white top-28 left-12 mx-auto w-71 object-contain shadow-2xl drop-shadow-iphone-mockup md:absolute md:mx-0 md:w-78.5 md:max-w-none">
                <!-- iPhone mockup SVG -->
              </svg>
            </div>
          </div>
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

    <!-- Candidate Experience Section -->
    <section class="overflow-hidden bg-muted pb-16 md:pb-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="flex w-full flex-col lg:max-w-3xl">
          <span class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md">Hire faster</span>
          <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">A seamless experience for candidates</h2>
          <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">Treat candidates with a rich careers site and a wonderful application process.</p>
        </div>
        
        <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
          <ul class="flex flex-col">
            <li v-for="(feature, index) in features" :key="feature.title">
              <div class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 py-4 pl-5 transition duration-100 ease-linear hover:border-brand" :class="index === 0 ? 'border-brand' : 'border-muted-200 dark:border-muted-800'">
                <div>
                  <h3 class="text-lg font-semibold text-primary">{{ feature.title }}</h3>
                  <p class="mt-1 text-md text-muted-600 dark:text-muted-400">{{ feature.description }}</p>
                </div>
                <ULink to="#" class="group inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-semibold">
                  Learn more
                  <Icon name="lucide:arrow-right" class="size-5" />
                </ULink>
              </div>
            </li>
          </ul>
          
          <div class="relative -ml-4 flex h-90 w-screen items-start justify-center sm:w-auto lg:h-128">
            <div class="absolute top-0 left-16 hidden w-max lg:block lg:h-168.5 lg:max-h-168.5">
              <div class="size-full rounded-[9.03px] bg-muted p-[0.9px] shadow-lg ring-[0.56px] ring-muted-300 dark:ring-muted-700 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px]">
                <div class="size-full rounded-[7.9px] bg-muted p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
                  <div class="relative size-full overflow-hidden rounded-[6.77px] bg-muted-50 ring-[0.56px] ring-muted-200 dark:ring-muted-800 md:rounded-[20.21px] md:ring-[1.68px]">
                    <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp" class="size-full object-cover object-left-top dark:hidden"/>
                    <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp" class="size-full object-cover object-left-top not-dark:hidden"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-max max-w-70 lg:absolute lg:top-26 lg:left-0">
              <div class="size-full rounded-[23.89px] bg-muted p-[3px] shadow-lg ring-[1.49px] ring-muted-300 dark:ring-muted-700 ring-inset">
                <div class="size-full rounded-[20.91px] bg-muted p-1 shadow-modern-mockup-inner-lg">
                  <div class="relative size-full overflow-hidden rounded-[17.92px] bg-muted-50 ring-[1.49px] ring-muted-200 dark:ring-muted-800">
                    <img alt="Mobile app interface mockup" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp" class="size-full object-cover object-left-top dark:hidden"/>
                    <img alt="Mobile app interface mockup" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp" class="size-full object-cover object-left-top not-dark:hidden"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="grid grid-cols-1 items-center overflow-hidden rounded-2xl bg-muted-100 dark:bg-muted-900 md:rounded-3xl lg:grid-cols-[auto_auto]">
          <div class="flex flex-1 flex-col gap-8 px-6 py-10 md:gap-8 md:px-8 md:py-12 lg:p-16">
            <figure class="flex flex-col gap-8">
              <div class="flex flex-col gap-4 md:gap-6">
                <div aria-hidden="true" class="flex gap-1">
                  <Icon v-for="i in 5" :key="i" name="lucide:star" class="size-5 text-yellow-400 fill-yellow-400" />
                </div>
                <blockquote class="origin-bottom-left text-display-xs font-medium text-balance text-primary will-change-transform sm:text-display-sm md:text-display-md">
                  Love the simplicity of the service and the prompt customer support. We can't imagine working without it.
                </blockquote>
              </div>
              <figcaption class="flex origin-bottom-left flex-col gap-1 will-change-transform">
                <p class="text-lg font-semibold text-primary">— Renee Wells</p>
                <cite class="text-md text-muted-500 dark:text-muted-400 not-italic">Product Designer, Quotient</cite>
              </figcaption>
            </figure>
          </div>
          <div class="relative flex h-70 w-full items-center justify-center overflow-hidden sm:h-full sm:min-h-90 lg:min-h-112 lg:w-120">
            <img alt="Annie Stanley" src="https://www.untitledui.com/images/portraits/annie-stanley" class="absolute inset-0 size-full object-cover"/>
            <span class="absolute flex size-full items-center justify-center">
              <div class="flex items-center justify-center rounded-full bg-white/30 backdrop-blur transition duration-100 ease-linear hover:bg-white/40 size-16">
                <Icon name="lucide:play" class="size-5 text-white" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="bg-muted pb-16 md:pb-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="grid grid-cols-1 overflow-hidden rounded-3xl bg-muted-100 dark:bg-muted-900 lg:grid-cols-2 lg:items-center">
          <div class="flex flex-1 flex-col px-6 pt-10 pb-12 sm:p-12 lg:p-16">
            <h2 class="text-display-sm font-semibold text-primary xl:text-display-md">Join 4,000+ startups growing with Untitled</h2>
            <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 lg:text-xl">Start your 30-day free trial today.</p>
            <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
              <UButton variant="outline" color="muted">Learn more</UButton>
              <UButton variant="solid" color="primary">Get started</UButton>
            </div>
          </div>
          <div class="h-52 w-full translate-x-6 translate-y-0 sm:h-90 sm:translate-x-12 sm:translate-y-12 md:h-120 lg:w-auto">
            <div class="w-max max-w-full rounded-[9.03px] bg-muted p-[0.9px] shadow-lg ring-[0.56px] ring-muted-300 dark:ring-muted-700 ring-inset md:rounded-[20.91px] md:p-0.5 md:ring-[1.26px] lg:max-w-3xl">
              <div class="size-full rounded-[7.9px] bg-muted p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.68px] md:p-1 md:shadow-modern-mockup-inner-lg">
                <div class="relative size-full overflow-hidden rounded-[6.77px] bg-muted-50 ring-[0.56px] ring-muted-200 dark:ring-muted-800 md:rounded-[15.16px] md:ring-[1.26px]">
                  <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp" class="size-full object-cover object-left-top dark:hidden"/>
                  <img alt="Dashboard mockup showing application interface" src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp" class="size-full object-cover object-left-top not-dark:hidden"/>
                </div>
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
        <div class="flex flex-col justify-between border-b border-muted-200 dark:border-muted-800 pb-8 md:pb-16 lg:flex-row">
          <div class="max-w-3xl">
            <h2 class="text-display-xs font-semibold text-primary md:text-display-sm">Start your 30-day free trial</h2>
            <p class="mt-2 text-md text-muted-600 dark:text-muted-400 md:mt-4 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
          </div>
          <div class="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start lg:mt-0">
            <UButton variant="outline" color="muted">Learn more</UButton>
            <UButton variant="solid" color="primary">Get started</UButton>
          </div>
        </div>
        
        <div class="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 xl:flex-row">
          <div class="flex flex-col gap-6 md:w-80 md:gap-8">
            <div class="flex items-center justify-start overflow-visible h-7 w-min shrink-0">
              <svg viewBox="0 0 38 38" fill="none" class="size-8 origin-center scale-[1.2] aspect-square h-full w-auto shrink-0">
                <!-- Footer logo SVG -->
              </svg>
              <div class="aspect-[0.3] h-full"></div>
              <svg viewBox="0 0 97 32" fill="none" class="aspect-[3] h-full shrink-0">
                <!-- Footer text logo SVG -->
              </svg>
            </div>
            <p class="text-md text-muted-600 dark:text-muted-400">Design amazing digital experiences that create more happy in the world.</p>
          </div>
          
          <nav class="flex-1">
            <ul class="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
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
        </div>
        
        <div class="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-muted-200 dark:border-muted-800 pt-8 md:mt-16 md:flex-row">
          <p class="text-sm text-muted-400 dark:text-muted-500">© 2077 Untitled UI. All rights reserved.</p>
          <ul class="flex gap-4">
            <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer" class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"><Icon name="lucide:twitter" class="size-5" /></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"><Icon name="lucide:linkedin" class="size-5" /></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"><Icon name="lucide:facebook" class="size-5" /></a></li>
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"><Icon name="lucide:github" class="size-5" /></a></li>
            <li><a href="https://angel.co/" target="_blank" rel="noopener noreferrer" class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"><Icon name="lucide:briefcase" class="size-5" /></a></li>
            <li><a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"><Icon name="lucide:dribbble" class="size-5" /></a></li>
          </ul>
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