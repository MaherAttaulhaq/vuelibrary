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

const companies = [
  { name: 'Ephemeral', color: 'https://www.untitledui.com/logos/logotype/color/ephemeral.svg', white: 'https://www.untitledui.com/logos/logotype/white/ephemeral.svg' },
  { name: 'Wildcrafted', color: 'https://www.untitledui.com/logos/logotype/color/wildcrafted.svg', white: 'https://www.untitledui.com/logos/logotype/white/wildcrafted.svg' },
  { name: 'Codecraft', color: 'https://www.untitledui.com/logos/logotype/color/codecraft.svg', white: 'https://www.untitledui.com/logos/logotype/white/codecraft.svg' },
  { name: 'Convergence', color: 'https://www.untitledui.com/logos/logotype/color/convergence.svg', white: 'https://www.untitledui.com/logos/logotype/white/convergence.svg' },
  { name: 'Imgcompress', color: 'https://www.untitledui.com/logos/logotype/color/img-compress.svg', white: 'https://www.untitledui.com/logos/logotype/white/img-compress.svg' },
  { name: 'Epicurious', color: 'https://www.untitledui.com/logos/logotype/color/epicurious.svg', white: 'https://www.untitledui.com/logos/logotype/white/epicurious.svg' },
  { name: 'Watchtower', color: 'https://www.untitledui.com/logos/logotype/color/watchtower.svg', white: 'https://www.untitledui.com/logos/logotype/white/watchtower.svg' },
  { name: 'Renaissance', color: 'https://www.untitledui.com/logos/logotype/color/renaissance.svg', white: 'https://www.untitledui.com/logos/logotype/white/renaissance.svg' },
  { name: 'Contrastai', color: 'https://www.untitledui.com/logos/logotype/color/contrast-ai.svg', white: 'https://www.untitledui.com/logos/logotype/white/contrast-ai.svg' },
  { name: 'Nietzsche', color: 'https://www.untitledui.com/logos/logotype/color/nietzsche.svg', white: 'https://www.untitledui.com/logos/logotype/white/nietzsche.svg' },
]

const capabilities = [
  {
    icon: 'lucide:message-circle',
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    icon: 'lucide:zap',
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
  },
  {
    icon: 'lucide:bar-chart-2',
    title: 'Manage your team with reports',
    description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
  },
  {
    icon: 'lucide:smile',
    title: 'Connect with customers',
    description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.'
  },
  {
    icon: 'lucide:grid',
    title: 'Connect the tools you already use',
    description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.'
  },
  {
    icon: 'lucide:heart',
    title: 'Our people make the difference',
    description: 'We\'re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.'
  }
]

const contactItems = [
  {
    icon: 'lucide:smile',
    title: 'Chat to sales',
    description: 'Speak to our friendly team.',
    link: 'mailto:sales@untitledui.com',
    linkText: 'sales@untitledui.com'
  },
  {
    icon: 'lucide:message-circle',
    title: 'Chat to support',
    description: 'We\'re here to help.',
    link: 'mailto:support@untitledui.com',
    linkText: 'support@untitledui.com'
  },
  {
    icon: 'lucide:map-pin',
    title: 'Visit us',
    description: 'Visit our office HQ.',
    link: 'https://goo.gl/maps/zTXmPKVdUvCQH9Wd6',
    linkText: '100 Smith Street\nCollingwood VIC 3066 AU'
  },
  {
    icon: 'lucide:phone',
    title: 'Call us',
    description: 'Mon-Fri from 8am to 5pm.',
    link: 'tel:+1 (555) 000-0000',
    linkText: '+1 (555) 000-0000'
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
        alt="Grid background pattern"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
      />
      <img
        alt="Grid background pattern"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
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
                  <path d="M18.3589 12.51C17.7907 12.8793 17.3859 13.3812 17.1444 14.0156H17.0165V12.0909H14.133V23H17.1586V16.6932C17.1633 16.2244 17.2509 15.8244 17.4214 15.4929C17.5966 15.1567 17.838 14.9011 18.1458 14.7259C18.4583 14.5507 18.8182 14.4631 19.2254 14.4631C19.8314 14.4631 20.3073 14.6525 20.6529 15.0313C20.9986 15.4053 21.169 15.9262 21.1643 16.5938V23H24.1898V16.054C24.1898 15.2065 24.0336 14.4773 23.7211 13.8665C23.4086 13.251 22.9706 12.7775 22.4072 12.446C21.8437 12.1146 21.1832 11.9489 20.4256 11.9489C19.616 11.9489 18.9271 12.1359 18.3589 12.51Z" class="fill-fg-primary"/>
                  <path d="M27.3463 21.821C27.0433 21.3523 26.8941 20.7604 26.8989 20.0455V14.3637H25.4074V12.0909H26.8989V9.47729H29.9244V12.0909H31.977V14.3637H29.9244V19.6477C29.9244 19.9271 29.967 20.1449 30.0523 20.3012C30.1375 20.4527 30.2559 20.5592 30.4074 20.6208C30.5636 20.6823 30.7436 20.7131 30.9472 20.7131C31.0892 20.7131 31.2313 20.7012 31.3733 20.6776C31.5153 20.6492 31.6242 20.6279 31.7 20.6137L32.1759 22.8651C32.0243 22.9124 31.8113 22.9669 31.5366 23.0284C31.262 23.0947 30.9282 23.135 30.5352 23.1492C29.8061 23.1776 29.1669 23.0805 28.6176 22.858C28.0731 22.6354 27.6493 22.2898 27.3463 21.821Z" class="fill-fg-primary"/>
                  <path d="M39.769 21.821C39.4659 21.3523 39.3168 20.7604 39.3215 20.0455V14.3637H37.83V12.0909H39.3215V9.47729H42.3471V12.0909H44.3996V14.3637H42.3471V19.6477C42.3471 19.9271 42.3897 20.1449 42.4749 20.3012C42.5602 20.4527 42.6785 20.5592 42.83 20.6208C42.9863 20.6823 43.1662 20.7131 43.3698 20.7131C43.5119 20.7131 43.6539 20.7012 43.796 20.6776C43.938 20.6492 44.0469 20.6279 44.1227 20.6137L44.5985 22.8651C44.447 22.9124 44.2339 22.9669 43.9593 23.0284C43.6847 23.0947 43.3509 23.135 42.9579 23.1492C42.2287 23.1776 41.5895 23.0805 41.0403 22.858C40.4958 22.6354 40.072 22.2898 39.769 21.821Z" class="fill-fg-primary"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M56.2257 23.2131C55.1035 23.2131 54.1376 22.9858 53.328 22.5313C52.5231 22.072 51.9028 21.4233 51.4672 20.5852C51.0316 19.7424 50.8138 18.7458 50.8138 17.5952C50.8138 16.473 51.0316 15.4882 51.4672 14.6406C51.9028 13.7931 52.516 13.1326 53.3067 12.6591C54.1021 12.1856 55.0349 11.9489 56.105 11.9489C56.8247 11.9489 57.4946 12.0649 58.1149 12.2969C58.7399 12.5242 59.2844 12.8674 59.7484 13.3267C60.2172 13.786 60.5818 14.3637 60.8422 15.0597C61.1026 15.751 61.2328 16.5606 61.2328 17.4887V18.3196H53.8038V18.3267C53.8038 18.8665 53.9033 19.3329 54.1021 19.7259C54.3057 20.1189 54.5922 20.4219 54.9615 20.635C55.3308 20.848 55.7688 20.9546 56.2754 20.9546C56.6116 20.9546 56.9194 20.9072 57.1987 20.8125C57.4781 20.7178 57.7172 20.5758 57.916 20.3864C58.1149 20.197 58.2664 19.965 58.3706 19.6904L61.1689 19.875C61.0268 20.5474 60.7357 21.1345 60.2953 21.6364C59.8597 22.1335 59.2963 22.5218 58.605 22.8012C57.9184 23.0758 57.1253 23.2131 56.2257 23.2131ZM54.1092 15.3722C53.9258 15.6954 53.8249 16.0529 53.8067 16.4446H58.3848C58.3848 16.009 58.2901 15.6231 58.1007 15.2869C57.9113 14.9508 57.6485 14.688 57.3124 14.4986C56.9809 14.3045 56.595 14.2074 56.1547 14.2074C55.6954 14.2074 55.2882 14.3139 54.9331 14.527C54.5827 14.7353 54.3081 15.0171 54.1092 15.3722Z" class="fill-fg-primary"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M64.5757 22.5384C65.2481 22.9645 65.9985 23.1776 66.8271 23.1776C67.4143 23.1776 67.9114 23.0805 68.3186 22.8864C68.7305 22.6923 69.0643 22.4484 69.32 22.1548C69.5804 21.8566 69.7817 21.5559 69.9237 21.2529H70.0516V23H73.0345V8.45456H70.0161V13.9233H69.9237C69.7911 13.6298 69.597 13.3315 69.3413 13.0284C69.0904 12.7207 68.7589 12.465 68.347 12.2614C67.9398 12.053 67.4308 11.9489 66.82 11.9489C66.0198 11.9489 65.2836 12.1572 64.6112 12.5739C63.9436 12.9858 63.4086 13.6084 63.0061 14.4418C62.6036 15.2704 62.4024 16.3097 62.4024 17.5597C62.4024 18.7765 62.5965 19.804 62.9848 20.6421C63.3778 21.4754 63.9081 22.1075 64.5757 22.5384ZM69.0217 20.3722C68.6856 20.6373 68.2736 20.7699 67.7859 20.7699C67.2888 20.7699 66.8698 20.635 66.5288 20.3651C66.1927 20.0905 65.9346 19.7117 65.7547 19.2287C65.5795 18.741 65.4919 18.1799 65.4919 17.5455C65.4919 16.9157 65.5795 16.3618 65.7547 15.8835C65.9299 15.4053 66.1879 15.0313 66.5288 14.7614C66.8698 14.4915 67.2888 14.3566 67.7859 14.3566C68.2736 14.3566 68.6879 14.4868 69.0288 14.7472C69.3698 15.0076 69.6302 15.3769 69.8101 15.8551C69.99 16.3334 70.08 16.8968 70.08 17.5455C70.08 18.1941 69.9876 18.76 69.803 19.2429C69.6231 19.7259 69.3626 20.1023 69.0217 20.3722Z" class="fill-fg-primary"/>
                  <path d="M88.0229 19.1151C88.2691 18.6842 88.3922 18.1918 88.3922 17.6378V8.45456H91.4675V17.9006C91.4675 18.9612 91.2142 19.8892 90.7075 20.6847C90.2056 21.4801 89.5025 22.1004 88.5982 22.5455C87.6938 22.9858 86.6403 23.206 85.4376 23.206C84.2303 23.206 83.1744 22.9858 82.27 22.5455C81.3657 22.1004 80.6625 21.4801 80.1607 20.6847C79.6588 19.8892 79.4078 18.9612 79.4078 17.9006V8.45456H82.4831V17.6378C82.4831 18.1918 82.6038 18.6842 82.8453 19.1151C83.0915 19.5459 83.4372 19.8845 83.8822 20.1307C84.3273 20.3769 84.8458 20.5 85.4376 20.5C86.0342 20.5 86.5527 20.3769 86.993 20.1307C87.4381 19.8845 87.7814 19.5459 88.0229 19.1151Z" class="fill-fg-primary"/>
                  <path d="M33.5479 12.0909V23H36.5734V12.0909H33.5479Z" class="fill-fg-primary"/>
                  <path d="M49.2305 23V8.45456H46.2049V23H49.2305Z" class="fill-fg-primary"/>
                  <path d="M96.6729 23V8.45456H93.5977V23H96.6729Z" class="fill-fg-primary"/>
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
      <section class="relative py-16 md:py-24">
        <div class="mx-auto w-full max-w-container px-4 md:px-8">
          <div class="flex max-w-5xl flex-col">
            <h1 class="text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
              We design physical <span class="relative underline decoration-[3px] underline-offset-[0.218em] md:decoration-4 lg:decoration-4">experiences</span> that create more happy in the world
            </h1>
            <p class="mt-4 max-w-sm text-lg text-muted-600 dark:text-muted-400 md:mt-6 md:text-xl">
              — We're a full-service interior design agency who specialize in simple, useful and beautiful solutions for any space.
            </p>
            <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
              <UButton variant="outline" color="muted" size="lg">
                <Icon name="lucide:play" class="size-5" />
                Showreel
              </UButton>
              <UButton variant="solid" color="primary" size="lg">Get in touch</UButton>
            </div>
          </div>
        </div>
        
        <div class="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
          <img 
            alt="Smiling Girl" 
            src="https://www.untitledui.com/marketing/smiling-girl-3.webp" 
            class="h-60 w-full object-cover lg:h-129"
          />
        </div>
      </section>
    </div>

    <!-- Trusted By Section -->
    <section class="bg-muted pb-16 md:pb-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col gap-8">
          <p class="text-center text-md font-medium text-muted-500 dark:text-muted-400">We've worked with some great startups</p>
          <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-y-6">
            <img
              v-for="company in companies.slice(0, 8)"
              :key="company.name"
              :alt="company.name"
              :src="company.color"
              class="h-9 md:h-10 dark:hidden"
            />
            <img
              v-for="company in companies.slice(8)"
              :key="company.name"
              :alt="company.name"
              :src="company.color"
              class="hidden h-9 md:inline-flex md:h-10 dark:hidden"
            />
            <!-- Dark mode versions -->
            <img
              v-for="company in companies"
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

    <!-- About Section -->
    <section class="overflow-hidden bg-muted py-16 md:py-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="flex w-full flex-col lg:max-w-3xl">
          <h2 class="text-display-sm font-semibold text-primary md:text-display-md">Untitled is a full-service creative agency crafting human-centric digital experiences.</h2>
          <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">We've been designing and building beautiful digital products since 2018.</p>
        </div>
        
        <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
          <ul class="flex flex-col">
            <li>
              <div class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 py-4 pl-5 transition duration-100 ease-linear hover:border-brand border-brand">
                <div>
                  <h3 class="text-lg font-semibold text-primary">Share team inboxes</h3>
                  <p class="mt-1 text-md text-muted-600 dark:text-muted-400">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
                <ULink to="#" class="group inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-semibold">
                  Learn more
                  <Icon name="lucide:arrow-right" class="size-5" />
                </ULink>
              </div>
            </li>
            <li>
              <div class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-muted-200 dark:border-muted-800 py-4 pl-5 transition duration-100 ease-linear hover:border-brand">
                <div>
                  <h3 class="text-lg font-semibold text-primary">Deliver instant answers</h3>
                  <p class="mt-1 text-md text-muted-600 dark:text-muted-400">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                </div>
                <ULink to="#" class="group inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-semibold">
                  Learn more
                  <Icon name="lucide:arrow-right" class="size-5" />
                </ULink>
              </div>
            </li>
            <li>
              <div class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-muted-200 dark:border-muted-800 py-4 pl-5 transition duration-100 ease-linear hover:border-brand">
                <div>
                  <h3 class="text-lg font-semibold text-primary">Manage your team with reports</h3>
                  <p class="mt-1 text-md text-muted-600 dark:text-muted-400">Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
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
                    <img src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp" alt="Desktop application dashboard" class="size-full object-cover object-left-top dark:hidden"/>
                    <img src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp" alt="Desktop application dashboard" class="size-full object-cover object-left-top not-dark:hidden"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-max max-w-70 lg:absolute lg:top-26 lg:left-0">
              <div class="size-full rounded-[23.89px] bg-muted p-[3px] shadow-lg ring-[1.49px] ring-muted-300 dark:ring-muted-700 ring-inset">
                <div class="size-full rounded-[20.91px] bg-muted p-1 shadow-modern-mockup-inner-lg">
                  <div class="relative size-full overflow-hidden rounded-[17.92px] bg-muted-50 ring-[1.49px] ring-muted-200 dark:ring-muted-800">
                    <img src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp" alt="Mobile application interface" class="size-full object-cover object-left-top dark:hidden"/>
                    <img src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp" alt="Mobile application interface" class="size-full object-cover object-left-top not-dark:hidden"/>
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
        <figure class="flex w-full shrink-0 snap-start flex-col gap-8 text-center">
          <img alt="Wildcrafted" src="https://www.untitledui.com/logos/logotype/color/wildcrafted.svg" class="h-10 dark:hidden" aria-hidden="true"/>
          <img alt="Wildcrafted" src="https://www.untitledui.com/logos/logotype/white/wildcrafted.svg" class="h-10 opacity-85 not-dark:hidden" aria-hidden="true"/>
          <blockquote class="text-display-sm font-medium text-primary md:text-display-lg">
            We'll no doubt be working with Untitled on future projects. Finding the right agency to work with is a daunting task, but we absolutely found the right team and haven't looked back.
          </blockquote>
          <figcaption class="flex justify-center">
            <div class="flex flex-col items-center gap-4">
              <UAvatar src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80" alt="Amelie Laurent" size="lg" />
              <div class="flex flex-col gap-1">
                <p class="text-lg font-semibold text-primary">Amélie Laurent</p>
                <cite class="text-md text-muted-500 dark:text-muted-400 not-italic">Product Manager, Wildcrafted</cite>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <div class="mx-auto max-w-container px-4 md:px-8">
      <hr class="h-px w-full border-none bg-muted-200 dark:bg-muted-800"/>
    </div>

    <!-- Capabilities Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <span class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md">Our capabilities</span>
          <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We're here every step of the way</h2>
          <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">We pride ourselves on our ability to challenge core assumptions, unpick legacy behaviors, streamline complex processes, and strike a balance between great design and functional development.</p>
        </div>
        
        <div class="mt-12 md:mt-16">
          <ul class="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            <li v-for="capability in capabilities" :key="capability.title">
              <div class="flex max-w-sm flex-col items-center gap-4 text-center">
                <div class="relative shrink-0 items-center justify-center bg-muted shadow-xs ring-1 ring-muted-200 dark:ring-muted-800 size-12 rounded-[10px] text-muted-600 dark:text-muted-400 hidden md:inline-flex">
                  <Icon :name="capability.icon" class="size-6" />
                </div>
                <div class="relative shrink-0 items-center justify-center bg-muted shadow-xs ring-1 ring-muted-200 dark:ring-muted-800 size-10 rounded-lg text-muted-600 dark:text-muted-400 inline-flex md:hidden">
                  <Icon :name="capability.icon" class="size-5" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-primary">{{ capability.title }}</h3>
                  <p class="mt-1 text-md text-muted-600 dark:text-muted-400">{{ capability.description }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-container px-4 md:px-8">
      <hr class="h-px w-full border-none bg-muted-200 dark:bg-muted-800"/>
    </div>

    <!-- Contact Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex w-full max-w-3xl flex-col">
          <span class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md">Contact us</span>
          <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We'd love to hear from you</h2>
          <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">Our friendly team is always here to chat.</p>
        </div>
        
        <div class="mt-12 md:mt-16">
          <ul class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li v-for="item in contactItems" :key="item.title" class="flex h-full flex-col items-start bg-muted-100 dark:bg-muted-900 p-6">
              <div class="relative flex shrink-0 items-center justify-center size-12 rounded-[10px] bg-brand-600 text-white">
                <Icon :name="item.icon" class="size-6" />
              </div>
              <h3 class="mt-12 text-lg font-semibold text-primary md:mt-16">{{ item.title }}</h3>
              <p class="mt-1 text-md text-muted-600 dark:text-muted-400">{{ item.description }}</p>
              <ULink :to="item.link" class="mt-4 text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-semibold whitespace-pre md:mt-5">
                {{ item.linkText }}
              </ULink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-muted-100 dark:bg-muted-900 py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <h1 class="text-display-sm font-semibold text-primary md:text-display-md">We'll send you a nice letter once per week</h1>
          <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">No spam. Just the latest releases and tips, interesting articles, and exclusive interviews with great people.</p>
          
          <form class="mt-8 flex w-full flex-col gap-4 md:max-w-120 md:flex-row" @submit.prevent="onSubmitNewsletter">
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
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-muted py-12 md:pt-16">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col md:items-center md:text-center">
          <svg viewBox="0 0 38 38" fill="none" class="size-8 origin-center scale-[1.2] drop-shadow">
            <!-- Footer logo SVG -->
          </svg>
          <h2 class="mt-8 text-display-xs font-semibold text-primary md:mt-12 md:text-display-sm">Let's get started on something great</h2>
          <p class="mt-2 text-md text-muted-600 dark:text-muted-400 md:mt-4 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
          <div class="mt-8 flex flex-col-reverse gap-3 md:mt-12 md:flex-row">
            <UButton variant="outline" color="muted" size="lg">
              <Icon name="lucide:play" class="size-5" />
              View demo
            </UButton>
            <UButton variant="solid" color="primary" size="lg">Get started</UButton>
          </div>
        </div>
        
        <div class="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-muted-200 dark:border-muted-800 pt-8 md:mt-16 md:flex-row md:gap-6">
          <p class="text-sm text-muted-400 dark:text-muted-500">© 2077 Untitled UI. All rights reserved.</p>
          <ul class="flex gap-3">
            <li><ULink to="#" class="rounded-xs text-sm text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300">Terms</ULink></li>
            <li><ULink to="#" class="rounded-xs text-sm text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300">Privacy</ULink></li>
            <li><ULink to="#" class="rounded-xs text-sm text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300">Cookies</ULink></li>
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