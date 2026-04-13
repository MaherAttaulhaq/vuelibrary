<template>
  <section class="bg-muted/50 py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="mx-auto flex w-full max-w-2xl flex-col xl:mx-0 xl:max-w-3xl">
        <span class="text-sm font-semibold text-primary md:text-md">Upgrade</span>
        <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
          Unlock more features
        </h2>
        <p class="mt-4 text-lg md:mt-5">
          Simple, transparent pricing that grows with you. Try any plan free for 30 days.
        </p>
      </div>

      <div class="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-12 md:mt-16 md:gap-16 xl:mx-0 xl:max-w-none xl:grid-cols-2 xl:items-center">
        <ul class="grid max-w-xl grid-cols-1 gap-10 md:gap-12">
          <li
            v-for="item in pricingFeatures"
            :key="item.title"
          >
            <div class="flex gap-4">
              <UFeaturedIcon
                :icon="item.icon"
                size="lg"
                color="neutral"
                class="hidden md:flex"
              />
              <UFeaturedIcon
                :icon="item.icon"
                size="md"
                color="neutral"
                class="flex md:hidden"
              />
              <div class="pt-1.5 md:pt-2.5">
                <h3 class="text-lg font-semibold text-primary md:text-xl">
                  {{ item.title }}
                </h3>
                <p class="mt-1 text-md md:mt-2">
                  {{ item.subtitle }}
                </p>
              </div>
            </div>
          </li>
        </ul>

        <PricingCard
          title="Basic plan"
          description="Our most popular plan for small teams."
          price="$10"
          badge="Popular"
          :features="[
            'Access to basic features',
            'Basic reporting + analytics',
            'Up to 10 individual users',
            '20 GB individual data',
            'Basic chat support',
            'Attend events',
            'Automatic updates',
            'Backup your account',
            'Audit log and notes',
            'Feature requests'
          ]"
          class="md:-ml-4"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pricingFeatures = [
  {
    title: 'Share team inboxes',
    subtitle: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    icon: 'i-lucide-message-square'
  },
  {
    title: 'Deliver instant answers',
    subtitle: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    icon: 'i-lucide-zap'
  },
  {
    title: 'Manage your team with reports',
    subtitle: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    icon: 'i-lucide-chart-bar'
  }
]
</script>

<!-- Pricing Card Component -->
<script lang="ts">
const PricingCard = defineComponent({
  props: {
    title: String,
    description: String,
    price: String,
    badge: String,
    features: Array,
    class: String
  },
  setup(props) {
    return () => h('div', { class: `flex flex-col overflow-hidden rounded-2xl bg-bg-primary shadow-lg ring-1 ring-border-secondary_alt ${props.class || ''}` }, [
      // Header
      h('div', { class: 'flex flex-col-reverse gap-4 px-6 pt-6 pb-8 md:flex-row md:justify-between md:gap-8 md:px-8 md:pt-8 md:pb-6' }, [
        h('div', { class: 'flex flex-col gap-1' }, [
          h('div', { class: 'flex items-center gap-2' }, [
            h('h2', { class: 'text-xl font-semibold text-text-primary' }, props.title),
            props.badge && h('UBadge', { label: props.badge, color: 'primary', variant: 'solid', size: 'md' })
          ]),
          h('p', { class: 'text-md text-text-tertiary' }, props.description)
        ]),
        h('div', { class: 'flex items-baseline gap-1' }, [
          h('span', { class: '-translate-y-[5px] text-display-md font-semibold text-text-primary md:-translate-y-[15px]' }, '$'),
          h('span', { class: 'text-display-lg font-semibold text-text-primary md:text-display-xl' }, props.price?.replace('$', '') || '10'),
          h('span', { class: 'text-md font-medium text-text-tertiary' }, 'per month')
        ])
      ]),
      // Content
      h('div', { class: 'flex flex-col gap-6 border-t border-border-secondary px-6 py-8 md:px-8 md:pt-8 md:pb-10' }, [
        h('div', { class: 'flex flex-col gap-1' }, [
          h('p', { class: 'text-md font-semibold text-text-primary' }, 'FEATURES'),
          h('p', { class: 'text-md text-text-tertiary' }, [
            'Everything in our ',
            h('span', { class: 'font-semibold' }, 'free plan'),
            ' plus....'
          ])
        ]),
        h('ul', { class: 'grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2' },
          (props.features as string[]).map(feature =>
            h('li', { class: 'flex gap-3' }, [
              h('div', { class: 'flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-success-secondary text-icon-success' }, [
                h('svg', { width: '13', height: '11', viewBox: '0 0 13 11', fill: 'none' }, [
                  h('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z',
                    fill: 'currentColor'
                  })
                ])
              ]),
              h('span', { class: 'text-md text-text-tertiary' }, feature)
            ])
          )
        )
      ]),
      // Button
      h('div', { class: 'mt-auto flex flex-col gap-3 border-t border-border-secondary px-6 pt-6 pb-8 md:p-8' }, [
        h('UButton', { label: 'Get started', color: 'primary', size: 'xl', block: true })
      ])
    ])
  }
})
</script>
