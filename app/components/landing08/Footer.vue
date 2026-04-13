<template>
  <footer class="bg-muted py-12 md:pt-16">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col justify-center text-center">
        <h2 class="text-display-xs font-semibold text-primary md:text-display-sm">
          Start growing with Untitled
        </h2>
        <p class="mt-2 text-md md:mt-4 md:text-xl">
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
            <h4 class="text-sm font-semibold text-muted-foreground">
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
                  class="hover:text-primary"
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="mt-12 flex flex-col justify-between gap-6 border-t border-border pt-8 md:mt-16 md:flex-row md:items-center">
        <Logo />
        <p class="text-sm text-muted-foreground">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
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

<!-- Logo Component -->
<script lang="ts">
const Logo = () => h('div', { class: 'flex items-center gap-1' }, [
  h('svg', { viewBox: '0 0 38 38', class: 'h-7 w-auto', fill: 'none' }, [
    h('rect', { width: '38', height: '38', rx: '8', fill: 'url(#logoGradient)' }),
    h('circle', { cx: '19', cy: '19', r: '8', fill: 'white' })
  ]),
  h('span', { class: 'text-xl font-bold text-primary' }, 'Untitled UI')
])
</script>
