<script setup lang="ts">
const { isOpen, toggle, close } = useMobileMenu()

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
</script>

<template>
  <header class="relative flex h-16 w-full items-center justify-center md:h-18">
    <div class="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8">
      <div class="flex w-full justify-between gap-4">
        <div class="flex flex-1 items-center gap-5">
          <!-- Logo Desktop -->
          <NuxtLink to="/" class="flex w-max items-center justify-start overflow-visible h-7 md:max-lg:hidden">
            <LogoIcon class="size-8 origin-center scale-[1.2]" />
            <div class="aspect-[0.3] h-full" />
            <LogoText class="aspect-[3] h-full shrink-0" />
          </NuxtLink>
          
          <!-- Logo Mobile -->
          <NuxtLink to="/" class="md:hidden">
            <LogoIcon class="size-8" />
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="max-md:hidden">
            <ul class="flex items-center gap-0.5">
              <li v-for="item in navigationItems" :key="item.label">
                <UDropdownMenu v-if="item.type === 'dropdown'" :items="item.items">
                  <UButton variant="link" color="secondary" class="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold hover:text-secondary_hover">
                    {{ item.label }}
                    <Icon name="lucide:chevron-down" class="size-4" />
                  </UButton>
                </UDropdownMenu>
                <ULink v-else :to="item.to" class="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold text-secondary hover:text-secondary_hover">
                  {{ item.label }}
                </ULink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Auth Buttons -->
        <div class="hidden items-center gap-3 md:flex">
          <UButton variant="ghost" color="secondary" size="md">Log in</UButton>
          <UButton variant="solid" color="primary" size="md">Sign up</UButton>
        </div>

        <!-- Mobile Menu Button -->
        <UButton
          variant="ghost"
          color="secondary"
          class="ml-auto cursor-pointer rounded-lg p-2 md:hidden"
          @click="toggle"
        >
          <Icon v-if="!isOpen" name="lucide:menu" class="size-6 text-secondary" />
          <Icon v-else name="lucide:x" class="size-6 text-secondary" />
        </UButton>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isOpen" class="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm md:hidden">
      <div class="flex flex-col p-6 gap-6">
        <div class="flex justify-end">
          <UButton variant="ghost" color="secondary" @click="close">
            <Icon name="lucide:x" class="size-6" />
          </UButton>
        </div>
        <nav class="flex flex-col gap-4">
          <div v-for="item in navigationItems" :key="item.label">
            <UDropdownMenu v-if="item.type === 'dropdown'" :items="item.items" :ui="{ content: 'static w-full' }">
              <UButton variant="link" color="secondary" class="w-full justify-between text-lg font-semibold">
                {{ item.label }}
                <Icon name="lucide:chevron-down" class="size-4" />
              </UButton>
            </UDropdownMenu>
            <ULink v-else :to="item.to" class="py-2 text-lg font-semibold text-secondary" @click="close">
              {{ item.label }}
            </ULink>
          </div>
          <div class="mt-4 flex flex-col gap-3 pt-4 border-t border-border-secondary">
            <UButton variant="ghost" color="secondary" block class="justify-center">Log in</UButton>
            <UButton variant="solid" color="primary" block class="justify-center">Sign up</UButton>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>