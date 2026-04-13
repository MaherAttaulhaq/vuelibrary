<!-- components/FooterLarge.vue -->
<template>
  <footer class="bg-muted py-12 md:pt-16">
    <UContainer>
      <div class="flex flex-col gap-12 md:gap-16 xl:flex-row">
        <!-- Logo and Description -->
        <div class="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
          <div class="flex items-center">
            <svg viewBox="0 0 38 38" fill="none" class="h-8 w-8">
              <rect x="3" y="2" width="32" height="32" rx="8" fill="url(#footer-logo-gradient)" />
              <path d="M19 10L23 18H15L19 10Z" fill="white" />
              <defs>
                <linearGradient id="footer-logo-gradient" x1="3" y1="2" x2="35" y2="34" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#53389E" />
                  <stop offset="1" stop-color="#6941C6" />
                </linearGradient>
              </defs>
            </svg>
            <span class="ml-2 text-xl font-semibold text-primary">Untitled</span>
          </div>
          <p class="text-md">Design amazing digital experiences that create more happy in the world.</p>
        </div>

        <!-- Navigation and Newsletter -->
        <div class="flex flex-1 flex-col-reverse gap-12 md:flex-row md:gap-8 xl:justify-end">
          <!-- Footer Links -->
          <div class="grid w-full grid-cols-2 gap-8 md:max-w-xs">
            <div v-for="category in footerLinks" :key="category.title">
              <h4 class="text-sm font-semibold text-primary">{{ category.title }}</h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li v-for="item in category.items" :key="item.label">
                  <a :href="item.href" class="text-md hover:text-primary transition duration-100 ease-linear">
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Newsletter Form -->
          <UForm class="flex w-full flex-col gap-4 md:max-w-90" @submit="handleNewsletterSubmit">
            <label for="newsletter-email" class="text-sm font-semibold text-primary">Stay up to date</label>
            <div class="flex flex-col gap-4 sm:flex-row">
              <UInput
                id="newsletter-email"
                v-model="newsletterEmail"
                type="email"
                placeholder="Enter your email"
                size="lg"
                class="flex-1"
                required
              />
              <UButton type="submit" size="lg" color="primary">Subscribe</UButton>
            </div>
          </UForm>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-border pt-8 md:mt-16 md:flex-row md:gap-6">
        <p class="text-sm text-muted-foreground">© 2077 Untitled UI. All rights reserved.</p>
        <ul class="flex gap-4">
          <li v-for="link in legalLinks" :key="link.title">
            <a :href="link.href" class="text-md text-muted-foreground hover:text-primary transition duration-100 ease-linear">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  {
    title: 'Product',
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
    title: 'Resources',
    items: [
      { label: 'Blog', href: '#' },
      { label: 'Newsletter', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Help centre', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'Support', href: '#' }
    ]
  }
]

const legalLinks = [
  { title: 'Terms', href: '#' },
  { title: 'Privacy', href: '#' },
  { title: 'Cookies', href: '#' }
]

const newsletterEmail = ref('')

const handleNewsletterSubmit = () => {
  if (newsletterEmail.value) {
    console.log('Newsletter signup:', newsletterEmail.value)
    newsletterEmail.value = ''
  }
}
</script>