<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const navigationItems = computed<NavigationMenuItem[]>(() => [
  { label: 'Product', to: '#product' },
  { label: 'Features', to: '#features' },
  { label: 'Pricing', to: '#pricing' },
  { label: 'Resources', to: '#resources' }
])

const integrations = [
  { name: 'Notion', icon: 'https://www.untitledui.com/logos/integrations/notion.svg', description: 'Work faster and smarter by integrating directly with Notion.' },
  { name: 'Slack', icon: 'https://www.untitledui.com/logos/integrations/slack.svg', description: 'Work faster and smarter by integrating directly with Slack.' },
  { name: 'Google Drive', icon: 'https://www.untitledui.com/logos/integrations/google_drive.svg', description: 'Work faster and smarter by integrating directly with Google.' },
  { name: 'Intercom', icon: 'https://www.untitledui.com/logos/integrations/intercom.svg', description: 'Work faster and smarter by integrating directly with Intercom.' },
  { name: 'Jira', icon: 'https://www.untitledui.com/logos/integrations/jira.svg', description: 'Work faster and smarter by integrating directly with Jira.' },
  { name: 'Dropbox', icon: 'https://www.untitledui.com/logos/integrations/dropbox.svg', description: 'Work faster and smarter by integrating directly with Dropbox.' }
]

const features = [
  { icon: 'i-lucide-messages-square', title: 'Share team inboxes', description: 'Shared team inboxes keep everyone on the same page.' },
  { icon: 'i-lucide-zap', title: 'Deliver instant answers', description: 'All-in-one customer service platform.' },
  { icon: 'i-lucide-chart-line', title: 'Manage your team with reports', description: 'Easy-to-use reports with filtering & export.' }
]

const pricingPlans = [
  {
    title: 'Basic plan',
    description: 'Our most popular plan for small teams.',
    price: '$10',
    period: '/month',
    features: [
      'Access to basic features',
      'Basic reporting + analytics',
      'Up to 10 individual users',
      '20 GB individual data'
    ],
    button: { label: 'Get started' },
    variant: 'subtle' as const
  },
  {
    title: 'Business plan',
    description: 'Advanced features and reporting.',
    price: '$20',
    period: '/month',
    features: [
      '200+ integrations',
      'Advanced reporting',
      'Up to 20 individual users',
      'Priority chat support'
    ],
    button: { label: 'Get started' },
    variant: 'solid' as const,
    badge: 'Popular'
  }
]

const faqs = [
  {
    label: 'What is Nuxt UI?',
    content: 'Nuxt UI is a comprehensive Vue UI component library offering 125+ accessible components.'
  },
  {
    label: 'Is it free to use?',
    content: 'Yes, Nuxt UI is open source and free to use.'
  },
  {
    label: 'Does it support dark mode?',
    content: 'Yes, Nuxt UI has built-in light and dark mode support.'
  }
]

const trustedCompanies = [
  'catalog', 'pictel-ai', 'leapyear', 'peregrin', 'easy-tax'
]
</script>

<template>
  <UApp>
    <div class="min-h-screen bg-default text-default">
      <!-- Header -->
      <UHeader class="sticky top-0 z-50 bg-default/80 backdrop-blur-md border-b border-default">
        <template #title>
          <a href="#" class="flex items-center gap-2 text-xl font-bold text-highlighted">
            <UIcon name="i-lucide-layers" class="w-8 h-8 text-primary" />
            <span>Untitled UI</span>
          </a>
        </template>

        <UNavigationMenu :items="navigationItems" class="hidden md:flex" />

        <template #right>
          <UButton color="neutral" variant="ghost" class="hidden md:inline-flex">
            Sign in
          </UButton>
          <UButton color="primary">
            Get PRO
          </UButton>
        </template>

        <template #body>
          <UNavigationMenu :items="navigationItems" orientation="vertical" class="-mx-2.5" />
        </template>
      </UHeader>

      <!-- Hero Section -->
      <section class="relative overflow-hidden pb-16 md:pt-8 md:pb-24">
        <UContainer class="container-custom">
          <UCard class="w-full bg-muted rounded-3xl px-6 py-16 md:py-24 text-center border-0">
            <h1 class="max-w-3xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold text-highlighted">
              Grow your users.
              <span class="text-primary">Smarter.</span>
            </h1>
            <p class="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-toned">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
            </p>
            <div class="mt-10 flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto">
              <UInput type="email" placeholder="Enter your email" class="flex-1" />
              <UButton color="primary" size="lg">
                Get started
              </UButton>
            </div>
            <p class="text-xs text-muted mt-4">
              We care about your data in our <a href="#" class="underline text-primary">privacy policy</a>.
            </p>
          </UCard>

          <!-- Chart Mockup -->
          <div class="relative mx-auto -mt-10 md:-mt-24 max-w-5xl px-4">
            <UCard class="rounded-2xl shadow-2xl ring-1 ring-default p-6 md:p-8">
              <div class="text-sm font-semibold text-highlighted">Users over time</div>
              <div class="relative h-64 mt-4 flex items-end justify-between gap-2">
                <div class="w-full h-48 bg-gradient-to-t from-secondary/20 to-primary/10 rounded-t-2xl relative">
                  <svg class="w-full h-full" viewBox="0 0 736 160" preserveAspectRatio="none">
                    <polyline points="0,140 80,110 160,120 240,80 320,90 400,40 480,60 560,30 640,50 736,20" class="text-primary" stroke="currentColor" stroke-width="3" fill="none"/>
                    <polyline points="0,150 80,130 160,140 240,100 320,110 400,70 480,90 560,50 640,70 736,40" class="text-secondary" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
                  </svg>
                </div>
              </div>
              <div class="flex justify-between text-xs text-muted mt-4 px-2">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
              </div>
            </UCard>

            <!-- Floating circular mini chart -->
            <div class="absolute -right-8 -bottom-8 md:right-[-40px] md:bottom-0">
              <UCard class="rounded-full shadow-lg p-4 w-36 h-36 flex items-center justify-center ring-1 ring-default">
                <div class="text-center">
                  <p class="text-xs text-muted">Active users</p>
                  <p class="text-2xl font-bold">1,000</p>
                </div>
              </UCard>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Integrations Section -->
      <section class="py-16 md:py-24">
        <UContainer class="text-center">
          <UBadge color="secondary" variant="subtle">
            Integrations
          </UBadge>
          <h2 class="mt-4 text-3xl md:text-4xl font-bold text-highlighted">Get more value from your tools</h2>
          <p class="mt-4 text-lg text-toned max-w-2xl mx-auto">
            Connect your tools, connect your teams. With over 100 apps already available in our directory.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <UCard v-for="integration in integrations" :key="integration.name" class="text-center feature-card">
              <img :src="integration.icon" class="h-14 mx-auto mb-4" :alt="integration.name">
              <h3 class="text-lg font-semibold">{{ integration.name }} integration</h3>
              <p class="text-muted mt-2">{{ integration.description }}</p>
              <UButton color="primary" variant="link" class="mt-4">
                View integration →
              </UButton>
            </UCard>
          </div>
        </UContainer>
      </section>

      <!-- Metrics Section -->
      <section class="py-16 md:py-24 bg-muted">
        <UContainer class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-highlighted">Unleash the full power of data</h2>
          <p class="text-lg text-toned mt-4">Everything you need to build modern UI and great products.</p>
          <div class="flex flex-col md:flex-row justify-center gap-12 mt-12">
            <div><div class="text-4xl font-bold text-primary">400+</div><div class="text-toned">Projects completed</div></div>
            <div><div class="text-4xl font-bold text-secondary">600%</div><div class="text-toned">Return on investment</div></div>
            <div><div class="text-4xl font-bold text-primary">10k</div><div class="text-toned">Global downloads</div></div>
          </div>
        </UContainer>
      </section>

      <!-- Features Section -->
      <section class="py-16 md:py-24">
        <UContainer>
          <div class="text-center max-w-3xl mx-auto">
            <UBadge color="secondary" variant="subtle">
              Features
            </UBadge>
            <h2 class="text-3xl md:text-4xl font-bold mt-4 text-highlighted">Cutting-edge features for advanced analytics</h2>
            <p class="text-toned mt-4">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
            </p>
          </div>
          
          <div class="flex flex-col lg:flex-row items-center gap-12 mt-16">
            <div class="flex-1 hidden md:block">
              <img src="https://www.untitledui.com/marketing/screen-mockups/iphone-and-screen-mockup-light-01.webp" alt="Dashboard preview" class="w-full rounded-2xl shadow-2xl">
            </div>
            <div class="flex-1 grid grid-cols-1 gap-8">
              <div v-for="feature in features" :key="feature.title" class="flex flex-col items-start gap-3">
                <UIcon :name="feature.icon" class="text-3xl text-primary" />
                <h3 class="text-xl font-semibold text-highlighted">{{ feature.title }}</h3>
                <p class="text-toned">{{ feature.description }}</p>
                <UButton color="primary" variant="link">Learn more →</UButton>
              </div>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Pricing Section -->
      <section class="py-16 md:py-24 bg-muted">
        <UContainer>
          <div class="text-center max-w-2xl mx-auto">
            <UBadge color="primary" variant="subtle">
              Pricing
            </UBadge>
            <h2 class="text-3xl md:text-4xl font-bold mt-2 text-highlighted">Plans that fit your scale</h2>
            <p class="text-toned mt-4">Simple, transparent pricing. Try any plan free for 30 days.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <UPricingPlan
              v-for="plan in pricingPlans"
              :key="plan.title"
              :title="plan.title"
              :description="plan.description"
              :price="plan.price"
              :period="plan.period"
              :features="plan.features"
              :button="plan.button"
              :variant="plan.variant"
            />
          </div>
        </UContainer>
      </section>

      <!-- FAQ Section -->
      <section class="py-16 md:py-24">
        <UContainer class="max-w-3xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-highlighted">Frequently asked questions</h2>
            <p class="text-toned mt-3">Everything you need to know about the product and billing.</p>
          </div>
          
         <UAccordion :items="faqs" />

          <!-- Still have questions? -->
          <UCard class="mt-16 bg-muted rounded-2xl p-8 text-center">
            <div class="flex justify-center -space-x-2 mb-4">
              <img class="w-10 h-10 rounded-full ring-2 ring-default" src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar">
              <img class="w-12 h-12 rounded-full ring-2 ring-default" src="https://randomuser.me/api/portraits/women/68.jpg" alt="avatar">
              <img class="w-10 h-10 rounded-full ring-2 ring-default" src="https://randomuser.me/api/portraits/men/45.jpg" alt="avatar">
            </div>
            <h4 class="text-xl font-semibold text-highlighted">Still have questions?</h4>
            <p class="text-toned mt-2">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <UButton color="primary" class="mt-6">
              Get in touch
            </UButton>
          </UCard>
        </UContainer>
      </section>

      <!-- Social Proof Section -->
      <section class="py-16 md:py-20 bg-muted">
        <UContainer class="text-center">
          <p class="text-muted font-medium">Trusted by 4,000+ companies</p>
          <div class="flex flex-wrap justify-center gap-8 mt-8 opacity-70 grayscale">
            <img v-for="company in trustedCompanies" :key="company" :src="`https://www.untitledui.com/logos/logotype/color/${company}.svg`" class="h-8" :alt="company">
          </div>
        </UContainer>
      </section>

      <!-- Footer -->
      <footer class="bg-default border-t border-default py-12">
        <UContainer>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 class="font-semibold mb-4 text-highlighted">Product</h4>
              <ul class="space-y-2 text-sm text-toned">
                <li><a href="#">Overview</a></li><li><a href="#">Features</a></li><li><a href="#">Solutions</a></li><li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-highlighted">Company</h4>
              <ul class="space-y-2 text-sm text-toned">
                <li><a href="#">About us</a></li><li><a href="#">Careers</a></li><li><a href="#">Press</a></li><li><a href="#">News</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-highlighted">Resources</h4>
              <ul class="space-y-2 text-sm text-toned">
                <li><a href="#">Blog</a></li><li><a href="#">Newsletter</a></li><li><a href="#">Events</a></li><li><a href="#">Help centre</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-highlighted">Social</h4>
              <ul class="space-y-2 text-sm text-toned">
                <li><a href="#">X (Twitter)</a></li><li><a href="#">LinkedIn</a></li><li><a href="#">GitHub</a></li><li><a href="#">Dribbble</a></li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-default text-sm text-muted">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-layers" class="w-6 h-6 text-primary" />
              <span>Untitled UI</span>
            </div>
            <p>© 2077 Untitled UI. All rights reserved.</p>
          </div>
        </UContainer>
      </footer>
    </div>
  </UApp>
</template>

<style>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .container-custom {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.feature-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}
</style>
