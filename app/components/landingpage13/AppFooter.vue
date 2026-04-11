<script setup lang="ts">
const footerLinks = [
  { label: 'Overview', to: '#' },
  { label: 'Features', to: '#' },
  { label: 'Pricing', to: '#' },
  { label: 'Careers', to: '#' },
  { label: 'Help', to: '#' },
  { label: 'Privacy', to: '#' },
]

const socialLinks = [
  { name: 'X', icon: 'lucide:twitter', url: 'https://x.com/' },
  { name: 'LinkedIn', icon: 'lucide:linkedin', url: 'https://www.linkedin.com/' },
  { name: 'Facebook', icon: 'lucide:facebook', url: 'https://www.facebook.com/' },
  { name: 'GitHub', icon: 'lucide:github', url: 'https://github.com/' },
]
</script>

<template>
  <footer class="bg-brand-section py-12 md:pt-16">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col items-center border-b border-brand_alt pb-8 text-center md:pb-16">
        <h2 class="text-display-xs font-semibold text-primary_on-brand md:text-display-sm">
          No long-term contracts. No catches. Simple.
        </h2>
        <p class="mt-2 text-md text-tertiary_on-brand md:mt-4 md:text-xl">
          Start your 30-day free trial. Cancel anytime.
        </p>
        <div class="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-12 md:flex-row md:self-center">
          <UButton variant="outline" color="neutral" size="lg">
            <Icon name="lucide:play" class="size-5" />
            View demo
          </UButton>
          <UButton variant="solid" color="primary" size="lg">Get started</UButton>
        </div>
      </div>
      
      <div class="mt-12 flex flex-col justify-between gap-x-8 gap-y-12 md:mt-16 lg:flex-row">
        <div class="flex flex-col gap-8 md:items-start">
          <div class="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
            <LogoIcon class="size-8 dark-mode" />
            <p class="text-md text-tertiary_on-brand">
              Design amazing digital experiences that create more happy in the world.
            </p>
          </div>
        </div>
        
        <nav>
          <ul class="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
            <li v-for="link in footerLinks" :key="link.label">
              <ULink :to="link.to" class="text-footer-button-fg hover:text-footer-button-fg_hover text-sm font-semibold">
                {{ link.label }}
              </ULink>
            </li>
          </ul>
        </nav>
        
        <div>
          <h4 class="text-sm font-medium text-primary_on-brand">Get the app</h4>
          <div class="mt-4 flex w-max flex-row gap-4 lg:flex-col">
            <AppStoreButton class="w-[135px]" />
            <GooglePlayButton class="w-[135px]" />
          </div>
        </div>
      </div>
      
      <div class="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-brand_alt pt-8 md:mt-16 md:flex-row">
        <p class="text-sm text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>
        <ul class="flex gap-6">
          <li v-for="social in socialLinks" :key="social.name">
            <a :href="social.url" target="_blank" rel="noopener noreferrer" class="flex rounded-xs text-icon-fg-brand_on-brand hover:text-fg-quaternary_hover">
              <Icon :name="social.icon" class="size-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>