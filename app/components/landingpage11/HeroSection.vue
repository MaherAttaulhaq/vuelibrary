<template>
  <section class="relative py-16 md:py-24 overflow-hidden">
    <div class="max-w-[1560px] mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <!-- Badge -->
        <a href="#" class="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-black dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white transition">
          <UBadge color="success" class="w-2 h-2 p-0 rounded-full" />
          New! Download the new iOS app
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4" />
        </a>
        
        <h1 class="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Smart business credit cards
        </h1>
        
        <p class="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl">
          Untitled is a next-gen financial technology company in the process of reinventing banking. 30-day free trial.
        </p>
        
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <UButton 
            variant="outline" 
            color="neutral"
            size="lg"
            icon="i-heroicons-play-circle-20-solid"
            label="Demo"
          />
          <UButton 
            color="primary"
            size="lg"
            label="Sign up"
          />
        </div>
      </div>
      
      <!-- 3D Credit Card Stack -->
      <div class="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center perspective-1000">
        <div class="relative w-full max-w-md" style="transform-style: preserve-3d;">
          <div 
            v-for="(card, index) in cards" 
            :key="index"
            class="absolute w-full max-w-[316px] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
            :style="{ transform: `rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg) scale(1.1) translateZ(${40 - index * 20}px)` }"
          >
            <UCard 
              :class="card.class"
              class="rounded-2xl overflow-hidden border border-white/20 shadow-xl"
              :ui="{ body: { padding: 'p-4' }, background: 'bg-transparent', ring: '' }"
            >
              <div class="flex justify-between items-start">
                <span class="text-white font-semibold">Untitled.</span>
                <UIcon name="i-heroicons-credit-card-20-solid" class="w-5 h-5 text-white/70" />
              </div>
              <div class="mt-8">
                <p class="text-white/80 text-xs">{{ card.name }}</p>
                <p class="text-white text-lg tracking-wider mt-2"> {{ card.last4 }}</p>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </div>
  </section>

  
</template>

<script setup lang="ts">
const cards = [
  { 
    name: 'DEMI WILKINSON', 
    last4: '1234 1234 1234 1234', 
    expiry: '06/28',
    class: 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl',
    logoColor: 'white'
  },
  { 
    name: 'LANA STEINER', 
    last4: '1234 1234 1234 1234', 
    expiry: '06/28',
    class: 'bg-gradient-to-br from-purple-600 to-indigo-800 shadow-xl',
    logoColor: 'colored'
  },
  { 
    name: 'OLIVIA RHYE', 
    last4: '1234 1234 1234 1234', 
    expiry: '06/28',
    class: 'bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 shadow-lg',
    logoColor: 'white'
  },
  { 
    name: 'PHOENIX BAKER', 
    last4: '1234 1234 1234 1234', 
    expiry: '06/28',
    class: 'bg-[#1a1a1a] border border-white/5 shadow-md',
    logoColor: 'colored'
  },
]
</script>