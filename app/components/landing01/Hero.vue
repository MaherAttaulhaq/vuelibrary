<script setup lang="ts">
const heroStats = [
  { label: 'Teams going live', value: '4,200+' },
  { label: 'Avg. launch time', value: '4 days' },
  { label: 'Signal lift', value: '+68%' }
]

const heroHighlights = [
  'Light hero gradients with layered dots and glow',
  'Desktop + mobile mockups framed in rounded containers',
  'CTA stack blending proof, pricing, and FAQs'
]
</script>

<template>
  <section
    id="hero"
    class="relative overflow-hidden border-b border-border bg-muted px-4 py-16 sm:px-6 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_60%)] opacity-70" />
    </div>
    <div class="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
      <div class="space-y-6 lg:max-w-2xl">
        <UBadge color="neutral" variant="subtle" class="text-xs uppercase tracking-[0.6em]">
          Untitled UI Redux
        </UBadge>
        <h1 class="text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-5xl">
          Landing page 06 — hero, proof, and CTA stack reborn in Nuxt with editable assets.
        </h1>
        <p class="text-base">
          Patterned dots, glow gradients, and rounded mockups replicate the original while staying configurable through data.
        </p>
        <div class="flex flex-wrap gap-3">
          <UButton color="primary" size="lg" href="#proof">
            View proof
          </UButton>
          <UButton color="neutral" variant="outline" size="lg" href="#pricing">
            See pricing
          </UButton>
        </div>
        <div class="flex flex-wrap gap-6 text-sm font-semibold">
          <div
            v-for="stat in heroStats"
            :key="stat.label"
            class="space-y-1"
          >
            <p class="text-2xl font-bold text-primary">
              {{ stat.value }}
            </p>
            <UBadge color="neutral" variant="subtle" class="text-[10px] uppercase tracking-[0.4em]">
              {{ stat.label }}
            </UBadge>
          </div>
        </div>
      </div>
      <UCard class="relative flex-1 overflow-hidden border-border bg-muted/60 p-6 shadow-lg rounded-3xl" :ui="{ body: 'p-0', background: 'bg-transparent', ring: '', rounded: 'rounded-[38px]' }">
        <div class="absolute inset-0  bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_70%)]" />
        <div class="relative space-y-6 p-6">
          <p class="text-xs uppercase tracking-[0.5em] text-muted-foreground">
            Layered hero treatment
          </p>
          <h2 class="text-2xl font-semibold text-primary">
            Patterned mockups
          </h2>
          <p class="text-sm">
            Dot grids, blur masks, and gradients keep the hero faithful to the Untitled UI reference while staying editable.
          </p>
          <ul class="space-y-2 text-sm">
            <li
              v-for="feature in heroHighlights"
              :key="feature"
              class="flex items-start gap-2"
            >
              <span class="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </UCard>
    </div>
  </section>
</template>