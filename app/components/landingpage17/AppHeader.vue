<script setup lang="ts">
const mobileMenuOpen = ref(false)

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
  <div>
    <!-- Header -->
    <header
      class="relative flex h-16 w-full items-center justify-center md:h-18 bg-utility-brand-50"
    >
      <div
        class="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8"
      >
        <div class="flex w-full justify-between gap-4">
          <div class="flex flex-1 items-center gap-5">
            <!-- Logo Desktop -->
            <NuxtLink
              to="/"
              class="flex w-max items-center justify-start overflow-visible h-7 md:max-lg:hidden"
            >
              <svg
                viewBox="0 0 38 38"
                fill="none"
                class="size-8 origin-center scale-[1.2] aspect-square h-full w-auto shrink-0"
              >
                <g filter="url(#filter0_logo)">
                  <g clip-path="url(#clip0_logo)">
                    <path
                      d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z"
                      fill="url(#paint0_logo)"
                      fill-opacity="0.2"
                    />
                  </g>
                </g>
              </svg>
              <div class="aspect-[0.3] h-full" />
              <svg
                viewBox="0 0 97 32"
                fill="none"
                class="aspect-[3] h-full shrink-0"
              >
                <path
                  d="M33.9101 10.2372C34.2321 10.5355 34.6179 10.6847 35.0678 10.6847C35.5176 10.6847 35.9011 10.5355 36.2183 10.2372C36.5403 9.9342 36.7013 9.57199 36.7013 9.15058C36.7013 8.73392 36.5403 8.37644 36.2183 8.07814C35.9011 7.77511 35.5176 7.6236 35.0678 7.6236C34.6179 7.6236 34.2321 7.77511 33.9101 8.07814C33.5928 8.37644 33.4342 8.73392 33.4342 9.15058C33.4342 9.57199 33.5928 9.9342 33.9101 10.2372Z"
                  class="fill-fg-primary"
                />
                <path
                  d="M11.2997 20.6847C11.8063 19.8892 12.0597 18.9612 12.0597 17.9006V8.45456H8.98438V17.6378C8.98438 18.1918 8.86127 18.6842 8.61506 19.1151C8.37358 19.5459 8.0303 19.8845 7.58523 20.1307C7.14489 20.3769 6.62642 20.5 6.02983 20.5C5.43797 20.5 4.91951 20.3769 4.47443 20.1307C4.02936 19.8845 3.68371 19.5459 3.4375 19.1151C3.19602 18.6842 3.07528 18.1918 3.07528 17.6378V8.45456H0V17.9006C0 18.9612 0.250947 19.8892 0.752841 20.6847C1.25473 21.4801 1.95786 22.1004 2.86222 22.5455C3.76657 22.9858 4.82244 23.206 6.02983 23.206C7.23248 23.206 8.28599 22.9858 9.19034 22.5455C10.0947 22.1004 10.7978 21.4801 11.2997 20.6847Z"
                  class="fill-fg-primary"
                />
                <!-- Additional SVG paths -->
              </svg>
            </NuxtLink>

            <!-- Logo Mobile -->
            <NuxtLink
              to="/"
              class="md:hidden"
            >
              <svg
                viewBox="0 0 38 38"
                fill="none"
                class="size-8"
              >
                <!-- Mobile logo SVG -->
              </svg>
            </NuxtLink>

            <!-- Desktop Navigation -->
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
                      class="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
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
                    class="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    {{ item.label }}
                  </ULink>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Auth Buttons -->
          <div class="hidden items-center gap-3 md:flex">
            <UButton
              variant="ghost"
              class="text-brand-700 hover:bg-brand-50"
            >
              Log in
            </UButton>
            <UButton
              variant="solid"
              color="primary"
            >
              Sign up
            </UButton>
          </div>

          <!-- Mobile Menu Button -->
          <UButton
            variant="ghost"
            class="ml-auto cursor-pointer rounded-lg p-2 text-brand-700 md:hidden"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Icon
              v-if="!mobileMenuOpen"
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
    </header>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm md:hidden"
    >
      <div class="flex flex-col p-6 gap-6">
        <div class="flex justify-end">
          <UButton
            variant="ghost"
            class="text-brand-700"
            @click="mobileMenuOpen = false"
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
                class="w-full justify-between text-lg font-semibold text-brand-700"
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
              class="py-2 text-lg font-semibold text-brand-700"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </ULink>
          </div>
          <div class="mt-4 flex flex-col gap-3 pt-4 border-t border-muted-200">
            <UButton
              variant="ghost"
              class="bg-brand-50 text-brand-700 hover:bg-brand-100"
              block
            >
              Log in
            </UButton>
            <UButton
              variant="solid"
              color="primary"
              block
            >
              Sign up
            </UButton>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
