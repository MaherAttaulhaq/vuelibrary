<template>
  <section class="relative overflow-hidden py-16 lg:flex lg:min-h-200 lg:py-0">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      <!-- Left content -->
      <div class="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pt-32 lg:pr-8 lg:pb-24">
        <!-- Hiring badge -->
        <UBadgeGroup
          color="primary"
          variant="modern"
          size="lg"
          class="hidden md:flex cursor-pointer"
        >
          <template #addon>
            <span class="inline-block size-2 shrink-0 rounded-full bg-green-500" />
            We're hiring!
          </template>
          Join our remote team
        </UBadgeGroup>
        <UBadgeGroup
          color="primary"
          variant="modern"
          size="md"
          class="md:hidden cursor-pointer"
        >
          <template #addon>
            <span class="inline-block size-2 shrink-0 rounded-full bg-green-500" />
            We're hiring!
          </template>
          Join our remote team
        </UBadgeGroup>

        <!-- Heading -->
        <h1 class="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
          Smart business credit cards
        </h1>

        <!-- Description -->
        <p class="mt-4 text-lg md:mt-6 md:max-w-lg md:text-xl">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
        </p>

        <!-- Email form -->
        <form
          class="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start"
          @submit.prevent="handleSubmit"
        >
          <UInput
            v-model="email"
            type="email"
            size="lg"
            placeholder="Enter your email"
            required
            class="w-full"
          />
          <UButton
            type="submit"
            size="lg"
            color="primary"
          >
            Get started
          </UButton>
        </form>
      </div>
    </div>

    <!-- Right side card stack -->
    <div class="relative mt-16 h-auto w-full bg-muted-section px-4 md:h-120 md:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
      <div class="relative mx-auto h-full max-w-3xl lg:max-w-4xl">
        <!-- Grid layout for 6 cards -->
        <div class="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-4 p-4" :style="{ transform: 'perspective(1200px) rotateY(-8deg) rotateX(5deg) scale(0.95)', transformOrigin: 'center center' }">
          <!-- Card 1 - Purple gradient -->
          <UCard
            class="col-span-1 row-span-1 rounded-2xl shadow-xl ring-1 ring-white/20 overflow-hidden"
            :class="cards[0].bgClass"
            :ui="{ background: 'bg-transparent', ring: 'ring-0', body: 'p-5' }"
          >
            <div class="flex flex-col justify-between h-full">
              <div class="flex items-start justify-between">
                <span class="text-base font-bold text-white">Untitled.</span>
                <UIcon name="i-lucide-wifi" class="size-5 text-white/80 rotate-90" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-white/20" />
                    <div class="size-6 rounded-full bg-white/40" />
                  </div>
                </div>
                <p class="text-sm font-mono tracking-wider text-white/90">•••• •••• •••• 4242</p>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-[10px] uppercase text-white/60">Card holder</p>
                    <p class="text-xs font-semibold text-white">Phoenix Baker</p>
                  </div>
                  <div>
                    <p class="text-[10px] uppercase text-white/60">Expires</p>
                    <p class="text-xs font-semibold text-white">12/28</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Card 2 - Neutral dark -->
          <UCard
            class="col-span-1 row-span-1 rounded-2xl shadow-xl ring-1 ring-white/10 overflow-hidden"
            :class="cards[1].bgClass"
            :ui="{ background: 'bg-transparent', ring: 'ring-0', body: 'p-5' }"
          >
            <div class="flex flex-col justify-between h-full">
              <div class="flex items-start justify-between">
                <span class="text-base font-bold text-white">Untitled.</span>
                <UIcon name="i-lucide-wifi" class="size-5 text-white/80 rotate-90" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-white/20" />
                    <div class="size-6 rounded-full bg-white/40" />
                  </div>
                </div>
                <p class="text-sm font-mono tracking-wider text-white/90">•••• •••• •••• 8888</p>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-[10px] uppercase text-white/60">Card holder</p>
                    <p class="text-xs font-semibold text-white">Olivia Rhye</p>
                  </div>
                  <div>
                    <p class="text-[10px] uppercase text-white/60">Expires</p>
                    <p class="text-xs font-semibold text-white">06/28</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Card 3 - Pink gradient -->
          <UCard
            class="col-span-1 row-span-1 rounded-2xl shadow-xl ring-1 ring-white/10 overflow-hidden"
            :class="cards[2].bgClass"
            :ui="{ background: 'bg-transparent', ring: 'ring-0', body: 'p-5' }"
          >
            <div class="flex flex-col justify-between h-full">
              <div class="flex items-start justify-between">
                <span class="text-base font-bold text-white">Untitled.</span>
                <UIcon name="i-lucide-wifi" class="size-5 text-white/80 rotate-90" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-white/20" />
                    <div class="size-6 rounded-full bg-white/40" />
                  </div>
                </div>
                <p class="text-sm font-mono tracking-wider text-white/90">•••• •••• •••• 1234</p>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-[10px] uppercase text-white/60">Card holder</p>
                    <p class="text-xs font-semibold text-white">Lana Steiner</p>
                  </div>
                  <div>
                    <p class="text-[10px] uppercase text-white/60">Expires</p>
                    <p class="text-xs font-semibold text-white">09/27</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Card 4 - Blue gradient -->
          <UCard
            class="col-span-1 row-span-1 rounded-2xl shadow-xl ring-1 ring-white/10 overflow-hidden"
            :class="cards[3].bgClass"
            :ui="{ background: 'bg-transparent', ring: 'ring-0', body: 'p-5' }"
          >
            <div class="flex flex-col justify-between h-full">
              <div class="flex items-start justify-between">
                <span class="text-base font-bold text-white">Untitled.</span>
                <UIcon name="i-lucide-wifi" class="size-5 text-white/80 rotate-90" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-white/20" />
                    <div class="size-6 rounded-full bg-white/40" />
                  </div>
                </div>
                <p class="text-sm font-mono tracking-wider text-white/90">•••• •••• •••• 5678</p>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-[10px] uppercase text-white/60">Card holder</p>
                    <p class="text-xs font-semibold text-white">Demi Wilkinson</p>
                  </div>
                  <div>
                    <p class="text-[10px] uppercase text-white/60">Expires</p>
                    <p class="text-xs font-semibold text-white">03/29</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Card 5 - Peach -->
          <UCard
            class="col-span-1 row-span-1 rounded-2xl shadow-xl ring-1 ring-black/10 overflow-hidden"
            :class="cards[4].bgClass"
            :ui="{ background: 'bg-transparent', ring: 'ring-0', body: 'p-5' }"
          >
            <div class="flex flex-col justify-between h-full">
              <div class="flex items-start justify-between">
                <span class="text-base font-bold text-neutral-700">Untitled.</span>
                <UIcon name="i-lucide-wifi" class="size-5 text-neutral-500 rotate-90" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-neutral-400/30" />
                    <div class="size-6 rounded-full bg-neutral-400/50" />
                  </div>
                </div>
                <p class="text-sm font-mono tracking-wider text-neutral-600">•••• •••• •••• 9999</p>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-[10px] uppercase text-neutral-500">Card holder</p>
                    <p class="text-xs font-semibold text-neutral-700">Candice Wu</p>
                  </div>
                  <div>
                    <p class="text-[10px] uppercase text-neutral-500">Expires</p>
                    <p class="text-xs font-semibold text-neutral-700">11/28</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Card 6 - Purple dark -->
          <UCard
            class="col-span-1 row-span-1 rounded-2xl shadow-xl ring-1 ring-white/10 overflow-hidden"
            :class="cards[5].bgClass"
            :ui="{ background: 'bg-transparent', ring: 'ring-0', body: 'p-5' }"
          >
            <div class="flex flex-col justify-between h-full">
              <div class="flex items-start justify-between">
                <span class="text-base font-bold text-white">Untitled.</span>
                <UIcon name="i-lucide-wifi" class="size-5 text-white/80 rotate-90" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-white/20" />
                    <div class="size-6 rounded-full bg-white/40" />
                  </div>
                </div>
                <p class="text-sm font-mono tracking-wider text-white/90">•••• •••• •••• 3333</p>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-[10px] uppercase text-white/60">Card holder</p>
                    <p class="text-xs font-semibold text-white">Natali Craig</p>
                  </div>
                  <div>
                    <p class="text-[10px] uppercase text-white/60">Expires</p>
                    <p class="text-xs font-semibold text-white">01/29</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')

const cards = [
  { name: 'Phoenix Baker', bgClass: 'bg-gradient-to-br from-purple-700 to-purple-900' },
  { name: 'Olivia Rhye', bgClass: 'bg-gradient-to-br from-neutral-800 to-neutral-950' },
  { name: 'Lana Steiner', bgClass: 'bg-gradient-to-br from-pink-400 to-purple-500' },
  { name: 'Demi Wilkinson', bgClass: 'bg-gradient-to-br from-blue-500 to-indigo-700' },
  { name: 'Candice Wu', bgClass: 'bg-[#F4D9D0]' },
  { name: 'Natali Craig', bgClass: 'bg-gradient-to-br from-violet-600 to-purple-800' }
]

const handleSubmit = () => {
  console.log('Email submitted:', email.value)
}
</script>

<style scoped>
.text-display-xs {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-display-sm {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-display-md {
  font-size: 3rem;
  line-height: 3.5rem;
}

.text-display-lg {
  font-size: 3.75rem;
  line-height: 4rem;
}

.text-display-xl {
  font-size: 4.5rem;
  line-height: 5rem;
}

@media (min-width: 768px) {
  .text-display-xs {
    font-size: 2.25rem;
    line-height: 2.75rem;
  }
  .text-display-sm {
    font-size: 3rem;
    line-height: 3.5rem;
  }
}
</style>
