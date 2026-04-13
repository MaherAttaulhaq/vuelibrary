<script setup lang="ts">
import { useMobileMenu } from './useMobileMenu'

const { isOpen, toggle, close } = useMobileMenu()

const navigationItems = [
  {
    label: 'Products',
    type: 'dropdown',
    items: [
      { label: 'Overview', to: '/products' },
      { label: 'Features', to: '/products/features' },
      { label: 'Integrations', to: '/products/integrations' }
    ]
  },
  {
    label: 'Services',
    type: 'dropdown',
    items: [
      { label: 'Consulting', to: '/services/consulting' },
      { label: 'Support', to: '/services/support' },
      { label: 'Training', to: '/services/training' }
    ]
  },
  { label: 'Pricing', type: 'link', to: '/pricing' },
  {
    label: 'Resources',
    type: 'dropdown',
    items: [
      { label: 'Blog', to: '/resources/blog' },
      { label: 'Documentation', to: '/resources/docs' },
      { label: 'Help Center', to: '/resources/help' }
    ]
  },
  { label: 'About', type: 'link', to: '/about' }
]
</script>

<template>
  <header class="relative flex h-16 w-full items-center justify-center md:h-18">
    <div
      class="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8"
    >
      <div class="flex w-full justify-between gap-4">
        <div class="flex flex-1 items-center gap-5">
          <NuxtLink
            to="/"
            class="flex w-max items-center justify-start overflow-visible h-7 md:max-lg:hidden"
          >
            <svg
              viewBox="0 0 38 38"
              fill="none"
              class="size-8 origin-center scale-[1.2] aspect-square h-full w-auto shrink-0"
            >
              <path
                d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z"
                fill="currentColor"
              />
            </svg>
            <div class="aspect-[0.3] h-full" />
            <span class="text-xl font-bold text-primary">Untitled UI</span>
          </NuxtLink>

          <nav class="max-md:hidden">
            <ul class="flex items-center gap-0.5">
              <li
                v-for="item in navigationItems"
                :key="item.label"
              >
                <UDropdownMenu
                  v-if="item.type === 'dropdown'"
                  :items="item.items"
                >
                  <UButton
                    variant="link"
                    color="neutral"
                    class="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold hover:text-muted-700 dark:hover:text-muted-300"
                  >
                    {{ item.label }}
                    <Icon
                      name="lucide:chevron-down"
                      class="size-4"
                    />
                  </UButton>
                </UDropdownMenu>
                <ULink
                  v-else
                  :to="item.to"
                  class="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold text-muted-600 hover:text-muted-900 dark:text-muted-400 dark:hover:text-muted-100"
                >
                  {{ item.label }}
                </ULink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="hidden items-center gap-3 md:flex">
          <UButton
            variant="ghost"
            color="neutral"
            size="md"
          >
            Log in
          </UButton>
          <UButton
            variant="solid"
            color="primary"
            size="md"
          >
            Sign up
          </UButton>
        </div>

        <UButton
          variant="ghost"
          color="neutral"
          class="ml-auto cursor-pointer rounded-lg p-2 md:hidden"
          @click="toggle"
        >
          <Icon
            v-if="!isOpen"
            name="lucide:menu"
            class="size-6"
          />
          <Icon
            v-else
            name="lucide:x"
            class="size-6"
          />
        </UButton>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-muted/95 backdrop-blur-sm md:hidden"
    >
      <div class="flex flex-col p-6 gap-6">
        <div class="flex justify-end">
          <UButton
            variant="ghost"
            color="neutral"
            @click="close"
          >
            <Icon
              name="lucide:x"
              class="size-6"
            />
          </UButton>
        </div>
        <nav class="flex flex-col gap-4">
          <div
            v-for="item in navigationItems"
            :key="item.label"
          >
            <UDropdownMenu
              v-if="item.type === 'dropdown'"
              :items="item.items"
              :ui="{ content: 'static w-full' }"
            >
              <UButton
                variant="link"
                color="neutral"
                class="w-full justify-between text-lg font-semibold"
              >
                {{ item.label }}
                <Icon
                  name="lucide:chevron-down"
                  class="size-4"
                />
              </UButton>
            </UDropdownMenu>
            <ULink
              v-else
              :to="item.to"
              class="py-2 text-lg font-semibold text-muted-600 dark:text-muted-400"
              @click="close"
            >
              {{ item.label }}
            </ULink>
          </div>
          <div
            class="mt-4 flex flex-col gap-3 pt-4 border-t border-muted-200 dark:border-muted-800"
          >
            <UButton
              variant="ghost"
              color="neutral"
              block
              class="justify-center"
            >
              Log in
            </UButton>
            <UButton
              variant="solid"
              color="primary"
              block
              class="justify-center"
            >
              Sign up
            </UButton>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.filter0_logo {
  filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
}

@media (prefers-color-scheme: dark) {
  .filter0_logo {
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5));
  }
}
</style>
