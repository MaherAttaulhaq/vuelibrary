<template>
  <div class="relative overflow-hidden bg-muted">
    <!-- Header -->
    <UHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />

        <UTooltip
          text="Open on GitHub"
          :kbds="['meta', 'G']"
        >
          <UButton
            color="neutral"
            variant="ghost"
            to="https://github.com/nuxt/ui"
            target="_blank"
            icon="i-simple-icons-github"
          />
        </UTooltip>
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <!-- Hero -->
    <section class="relative">
      <div class="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
        <!-- Left Content -->
        <div class="flex max-w-3xl flex-col items-start">
          <UBadge
            color="primary"
            variant="subtle"
            class="rounded-full"
          >
            <span class="mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-white">
              What's new?
            </span>
            Instantly issue virtual cards
          </UBadge>

          <h1 class="mt-4 text-display-lg font-semibold text-primary">
            No more business banking headaches
          </h1>

          <p class="mt-4 max-w-120 text-lg">
            Untitled is a next-gen financial technology company reinventing banking.
          </p>

          <div class="mt-8 flex w-full flex-col-reverse gap-3 md:flex-row">
            <UButton
              size="lg"
              variant="outline"
              color="neutral"
            >
              <Icon
                name="lucide:play"
                class="size-5"
              />
              Demo
            </UButton>

            <UButton
              size="lg"
              color="primary"
            >
              Sign up
            </UButton>
          </div>
        </div>

        <!-- Right Visual -->
        <!-- RIGHT (same layout, just UCard now) -->
        <div class="relative -mx-4 flex h-80 items-center justify-center md:mx-0 md:h-120 lg:h-full lg:min-h-160">
          <div class="-translate-x-0.5 -space-y-[106px] md:translate-x-[9px] md:-translate-y-[1px] md:-space-y-16 lg:-space-y-8">
            <!-- Card 1 -->
            <div
              class="relative z-1"
              style="transform: scale(0.84) rotate(60deg) translate(38px, -53px)"
            >
              <UCard
                class="h-[190px] w-[316px] backdrop-blur-[6px] bg-muted/40 ring-1 ring-border"
                :ui="{ body: 'p-4 flex flex-col justify-between h-full' }"
              >
                <!-- Top -->
                <div class="flex items-start justify-between text-white">
                  <span class="font-semibold">Untitled.</span>

                  <!-- icon -->
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                  >
                    <path
                      d="M15.1429 1.28571C17.0236 4.54326 18.0138 8.23849 18.0138 12C18.0138 15.7615 17.0236 19.4567 15.1429 22.7143M10.4286 3.64285C11.8956 6.18374 12.6679 9.06602 12.6679 12C12.6679 14.934 11.8956 17.8162 10.4286 20.3571M5.92859 5.80713C6.98933 7.66394 7.54777 9.77022 7.54777 11.9143C7.54777 14.0583 6.98933 16.1646 5.92859 18.0214M1.42859 8.14285C2.19306 9.29983 2.59834 10.6362 2.59834 12C2.59834 13.3638 2.19306 14.7002 1.42859 15.8571"
                      stroke="currentColor"
                      stroke-width="2.57143"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <!-- Bottom -->
                <div class="flex items-end justify-between text-white">
                  <div>
                    <div class="flex gap-1 text-xs font-semibold uppercase tracking-[0.6px]">
                      <p>OLIVIA RHYE</p>
                      <p>06/28</p>
                    </div>
                    <div class="text-md font-semibold tracking-[1px]">
                      1234 1234 1234 1234
                    </div>
                  </div>

                  <div class="flex h-8 w-11.5 items-center justify-center rounded bg-white/10">
                    <!-- logo -->
                    <svg
                      width="30"
                      height="19"
                      viewBox="0 0 30 19"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.9053 16.4392C13.3266 17.7699 11.2787 18.5733 9.04092 18.5733C4.04776 18.5733 0 14.5737 0 9.63994C0 4.70619 4.04776 0.706604 9.04092 0.706604C11.2787 0.706604 13.3266 1.50993 14.9053 2.84066C16.484 1.50993 18.5319 0.706604 20.7697 0.706604C25.7629 0.706604 29.8106 4.70619 29.8106 9.63994C29.8106 14.5737 25.7629 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.7699 14.9053 16.4392Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </UCard>
            </div>

            <!-- Card 2 -->
            <div
              class="relative z-0"
              style="transform: scale(0.84) rotate(30deg) translate(-23px, 24px)"
            >
              <UCard
                class="h-[190px] w-[316px] bg-gradient-to-br from-purple-700 to-purple-900 ring-1 ring-white/30"
                :ui="{ body: 'p-4 flex flex-col justify-between h-full text-white' }"
              >
                <!-- Top -->
                <div class="flex items-start justify-between">
                  <span class="font-semibold">Untitled.</span>

                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                  >
                    <path
                      d="M15.1429 1.28571C17.0236 4.54326 18.0138 8.23849 18.0138 12C18.0138 15.7615 17.0236 19.4567 15.1429 22.7143M10.4286 3.64285C11.8956 6.18374 12.6679 9.06602 12.6679 12C12.6679 14.934 11.8956 17.8162 10.4286 20.3571M5.92859 5.80713C6.98933 7.66394 7.54777 9.77022 7.54777 11.9143C7.54777 14.0583 6.98933 16.1646 5.92859 18.0214M1.42859 8.14285C2.19306 9.29983 2.59834 10.6362 2.59834 12C2.59834 13.3638 2.19306 14.7002 1.42859 15.8571"
                      stroke="currentColor"
                      stroke-width="2.57143"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <!-- Bottom -->
                <div class="flex items-end justify-between">
                  <div>
                    <div class="flex gap-1 text-xs font-semibold uppercase tracking-[0.6px]">
                      <p>Phoenix Baker</p>
                      <p>06/28</p>
                    </div>
                    <div class="text-md font-semibold tracking-[1px]">
                      1234 1234 1234 1234
                    </div>
                  </div>

                  <div class="flex h-8 w-11.5 items-center justify-center rounded bg-white/10">
                    <svg
                      width="30"
                      height="19"
                      viewBox="0 0 30 19"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.9053 16.4393C13.3266 17.77 11.2787 18.5733 9.04092 18.5733C4.04776 18.5733 0 14.5737 0 9.64C0 4.70625 4.04776 0.706665 9.04092 0.706665C11.2787 0.706665 13.3266 1.51 14.9053 2.84072C16.484 1.51 18.5319 0.706665 20.7697 0.706665C25.7629 0.706665 29.8106 4.70625 29.8106 9.64C29.8106 14.5737 25.7629 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4393Z"
                        fill="#ED0006"
                      />
                    </svg>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Docs',
    to: '/docs/getting-started',
    icon: 'i-lucide-book-open',
    active: route.path.startsWith('/docs/getting-started')
  },
  {
    label: 'Components',
    to: '/docs/components',
    icon: 'i-lucide-box',
    active: route.path.startsWith('/docs/components')
  },
  {
    label: 'Figma',
    icon: 'i-simple-icons-figma',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank'
  },
  {
    label: 'Releases',
    icon: 'i-lucide-rocket',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }
])
</script>
