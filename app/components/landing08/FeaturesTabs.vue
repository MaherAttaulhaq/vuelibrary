<template>
  <section class="overflow-hidden bg-muted pb-16 lg:pb-24">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <div class="flex w-full flex-col lg:max-w-3xl">
        <span class="text-sm font-semibold text-primary md:text-md">Features</span>
        <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
          The only card you'll ever need. Simple.
        </h2>
        <p class="mt-4 text-lg md:mt-5 md:text-xl">
          Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
        <ul class="flex flex-col">
          <li
            v-for="(item, index) in featureTabs"
            :key="item.title"
            @click="activeFeatureTab = index"
          >
            <div
              :class="[
                'relative flex cursor-pointer flex-col items-start gap-4 border-l-4 py-4 pl-5 transition duration-100 ease-linear hover:border-primary',
                activeFeatureTab === index ? 'border-primary' : 'border-border'
              ]"
            >
              <div>
                <h3 class="text-lg font-semibold text-primary">
                  {{ item.title }}
                </h3>
                <p class="mt-1 text-md">
                  {{ item.subtitle }}
                </p>
              </div>
              <UButton
                label="Learn more"
                variant="link"
                color="primary"
                to="#"
              />
            </div>
          </li>
        </ul>

        <!-- 3D Card Stack -->
        <div class="relative -mx-4 flex h-80 items-center justify-center bg-muted md:mr-0 md:h-120 md:rounded-2xl lg:h-140">
          <div class="-space-y-[146px] md:-translate-x-2 md:translate-y-3.5 md:-space-y-[126px]">
            <div
              class="relative z-4 [--scale:1.13] md:[--scale:1.641]"
              :style="{ transform: 'scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)' }"
            >
              <CreditCard
                type="transparent-gradient"
                card-holder="Demi Wilkinson"
              />
            </div>
            <div
              class="relative z-3 [--scale:1.13] md:[--scale:1.641]"
              :style="{ transform: 'scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)' }"
            >
              <CreditCard
                type="brand-dark"
                card-holder="Lana Steiner"
              />
            </div>
            <div
              class="relative z-2 [--scale:1.13] md:[--scale:1.641]"
              :style="{ transform: 'scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)' }"
            >
              <CreditCard
                type="transparent"
                card-holder="OLIVIA RHYE"
              />
            </div>
            <div
              class="relative z-1 [--scale:1.13] md:[--scale:1.641]"
              :style="{ transform: 'scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)' }"
            >
              <CreditCard
                type="gray-dark"
                card-holder="Phoenix Baker"
              />
            </div>
            <div
              class="relative z-0 [--scale:1.13] md:[--scale:1.641]"
              :style="{ transform: 'scale(var(--scale)) rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg)' }"
            >
              <div class="h-47.5 w-79 rounded-2xl bg-neutral-900 opacity-15 blur-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeFeatureTab = ref(0)
const featureTabs = [
  {
    title: 'Share team inboxes',
    subtitle: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    title: 'Deliver instant answers',
    subtitle: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
  },
  {
    title: 'Manage your team with reports',
    subtitle: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
  }
]
</script>

<!-- Credit Card Component -->
<script lang="ts">
const CreditCard = defineComponent({
  props: {
    type: {
      type: String,
      default: 'brand',
      validator: (value: string) => ['brand', 'brand-dark', 'transparent', 'transparent-gradient', 'gray-dark'].includes(value)
    },
    cardHolder: {
      type: String,
      default: 'John Doe'
    }
  },
  setup(props) {
    const getCardClasses = () => {
      switch (props.type) {
        case 'brand':
          return 'bg-gradient-to-tr from-brand-900 to-brand-700 text-white'
        case 'brand-dark':
          return 'bg-gradient-to-tr from-brand-950 to-brand-800 text-white'
        case 'transparent':
          return 'bg-black/10 backdrop-blur-md border border-white/20 text-white'
        case 'transparent-gradient':
          return 'bg-black/10 bg-linear-to-br from-white/30 to-transparent backdrop-blur-md text-white'
        case 'gray-dark':
          return 'bg-gradient-to-tr from-neutral-800 to-neutral-700 text-white'
        default:
          return 'bg-gradient-to-tr from-brand-900 to-brand-700 text-white'
      }
    }

    return () => h('div', { class: `w-80 h-48 rounded-2xl p-4 shadow-lg ${getCardClasses()}` }, [
      h('div', { class: 'flex justify-between items-start' }, [
        h('span', { class: 'font-semibold' }, 'Untitled.'),
        h('svg', { viewBox: '0 0 24 24', class: 'w-6 h-6', fill: 'none', stroke: 'currentColor' }, [
          h('path', { d: 'M12 2v20M2 12h20', strokeWidth: '2', strokeLinecap: 'round' })
        ])
      ]),
      h('div', { class: 'mt-8 flex justify-between items-end' }, [
        h('div', {}, [
          h('p', { class: 'text-xs uppercase tracking-wider' }, props.cardHolder),
          h('p', { class: 'text-lg font-mono tracking-wider mt-1' }, '•••• •••• •••• 1234')
        ]),
        h('p', { class: 'text-xs' }, '06/28')
      ])
    ])
  }
})
</script>
