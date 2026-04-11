<script setup lang="ts">
const offices = [
  {
    city: 'Melbourne',
    lines: ['100 Flinders Street,', 'Melbourne VIC 3000 AU']
  },
  {
    city: 'Sydney',
    lines: ['100 George Street,', 'Sydney NSW 2000 AU']
  }
]
</script>

<template>
  <div class="bg-muted">
    <section class="bg-muted-100 pt-16 pb-28 dark:bg-muted-900 md:pt-24 md:pb-40">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
          <div class="flex w-full max-w-3xl flex-col">
            <span class="text-sm font-semibold text-primary md:text-md">Contact us</span>
            <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
              Chat to our friendly team
            </h2>
            <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">
              We&apos;d love to hear from you! Please get in touch.
            </p>
          </div>
          <ul class="grid grid-cols-1 gap-10 md:gap-8">
            <li v-for="office in offices" :key="office.city" class="flex items-start gap-4">
              <Icon name="lucide:map-pin" class="size-6 pt-0.5 text-primary" />
              <div>
                <h3 class="text-lg font-semibold text-primary">
                  {{ office.city }}
                </h3>
                <p class="mt-1 text-md whitespace-pre text-muted-600 dark:text-muted-400 md:whitespace-normal">
                  {{ office.lines[0] }}<br>{{ office.lines[1] }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="-mt-16 pb-16 md:-mt-24 md:pb-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <img src="https://www.untitledui.com/marketing/smiling-girl-3.webp" class="h-60 w-full object-cover shadow-3xl md:h-120 lg:h-140" alt="Team discussing a topic">
      </div>
    </section>
  </div>
</template>
