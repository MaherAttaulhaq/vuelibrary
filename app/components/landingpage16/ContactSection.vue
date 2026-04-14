<script setup lang="ts">
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
</script>

<template>
  <div class="mx-auto max-w-container px-4 md:px-8">
    <UDivider />
  </div>

  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <!-- Heading -->
      <div class="max-w-3xl">
        <UBadge
          color="primary"
          variant="subtle"
        >
          Contact us
        </UBadge>

        <h2 class="mt-4 text-display-sm font-semibold md:text-display-md">
          We'd love to hear from you
        </h2>

        <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:text-xl">
          Our friendly team is always here to chat.
        </p>
      </div>

      <!-- Grid -->
      <div class="mt-12 md:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <UCard
          v-for="item in contactItems"
          :key="item.title"
          class="flex flex-col"
        >
          <div class="flex flex-col gap-4">
            <!-- Icon -->
            <div class="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
              <Icon
                :name="item.icon"
                class="size-6"
              />
            </div>

            <!-- Content -->
            <div>
              <h3 class="text-lg font-semibold text-primary">
                {{ item.title }}
              </h3>

              <p class="mt-1 text-sm text-muted-600 dark:text-muted-400">
                {{ item.description }}
              </p>
            </div>

            <!-- Link -->
            <ULink
              :to="item.link"
              class="mt-auto whitespace-pre-line font-semibold text-primary hover:text-primary/80"
            >
              {{ item.linkText }}
            </ULink>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
