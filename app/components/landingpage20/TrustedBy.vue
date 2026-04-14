<script setup lang="ts">
const trustedCompanies = [
  {
    name: 'Catalog',
    color: 'https://www.untitledui.com/logos/logotype/color/catalog.svg',
    white: 'https://www.untitledui.com/logos/logotype/white/catalog.svg'
  },
  {
    name: 'Pictelai',
    color: 'https://www.untitledui.com/logos/logotype/color/pictel-ai.svg',
    white: 'https://www.untitledui.com/logos/logotype/white/pictel-ai.svg'
  },
  {
    name: 'Leapyear',
    color: 'https://www.untitledui.com/logos/logotype/color/leapyear.svg',
    white: 'https://www.untitledui.com/logos/logotype/white/leapyear.svg'
  },
  {
    name: 'Peregrin',
    color: 'https://www.untitledui.com/logos/logotype/color/peregrin.svg',
    white: 'https://www.untitledui.com/logos/logotype/white/peregrin.svg'
  },
  {
    name: 'Easytax',
    color: 'https://www.untitledui.com/logos/logotype/color/easy-tax.svg',
    white: 'https://www.untitledui.com/logos/logotype/white/easy-tax.svg'
  },
  {
    name: 'Coreos',
    color: 'https://www.untitledui.com/logos/logotype/color/core-os.svg',
    white: 'https://www.untitledui.com/logos/logotype/white/core-os.svg'
  }
]
</script>

<template>
  <section class="bg-muted pb-16 md:pb-24">
    <div class="mx-auto max-w-container md:px-8">
      <div
        class="flex flex-col gap-8 bg-muted-100 dark:bg-muted-900 px-6 py-12 md:rounded-2xl md:p-16"
      >
        <p
          class="text-center text-md font-medium text-muted-500 dark:text-muted-400 md:text-xl"
        >
          Trusted by 4,000+ companies
        </p>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-8">
          <template
            v-for="company in trustedCompanies"
            :key="company.name"
          >
            <img
              :alt="company.name"
              :src="company.color"
              class="h-9 md:h-10 dark:hidden"
            >
            <img
              :alt="company.name"
              :src="company.white"
              class="h-9 opacity-85 not-dark:hidden md:h-10"
            >
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
