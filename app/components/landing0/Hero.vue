<template>
  <section
    id="hero"
    class="relative overflow-hidden border-b border-default bg-muted px-4 py-16 sm:px-6 lg:px-8"
  >
    <!-- Badge -->
    <UBadge color="primary" variant="subtle" class="mb-4">
      New release
    </UBadge>

    <div class="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">

      <!-- Left Content -->
      <div class="space-y-6 lg:max-w-2xl">
        <h1
          class="text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-5xl"
        >
          Modern Template — Build stunning websites, faster than ever.
        </h1>

        <p
          class="text-base leading-relaxed text-default sm:text-lg"
        >
          Professional website templates designed for developers. Build
          responsive, high-converting experiences that scale for startups,
          agencies, and personal brands.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-3">
          <UButton
            variant="solid"
            size="lg"
            href="#pricing"
          >
            Start free trial
          </UButton>

          <UButton
            color="neutral"
            variant="outline"
            size="lg"
            href="#features"
          >
            Explore templates
          </UButton>
        </div>

        <!-- Stats -->
        <div
          class="flex flex-wrap gap-6 pt-6 text-sm font-semibold text-default"
        >
          <div
            v-for="stat in heroStats"
            :key="stat.label"
            class="space-y-1"
          >
            <p class="text-xl font-bold text-primary">
              {{ stat.value }}
            </p>
            <p class="text-xs uppercase tracking-wide text-default">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>

      <!-- Right Card -->
      <UCard
        class="relative flex-1 overflow-hidden border border-default bg-muted"
        :ui="{ body: 'p-6' }"
      >
        <div class="relative grid gap-6">

          <!-- Header -->
          <div class="space-y-2">
            <p class="text-xs uppercase tracking-[0.4em] text-default">
              Library highlights
            </p>
            <p class="text-lg font-semibold text-primary">
              8 ready-to-go sections
            </p>
          </div>

          <!-- Features -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div
              class="rounded-2xl border border-default bg-muted px-4 py-3 backdrop-blur"
            >
              <p class="text-sm font-semibold text-primary">
                Responsive hero
              </p>
              <p class="text-xs text-default">
                Fluid typography & gradient motion
              </p>
            </div>

            <div
              class="rounded-2xl border border-default bg-muted px-4 py-3 backdrop-blur"
            >
              <p class="text-sm font-semibold text-primary">
                Analytics-ready
              </p>
              <p class="text-xs text-default">
                Story-driven data + interactive charts
              </p>
            </div>
          </div>

          <!-- Footer Text -->
          <p class="text-sm text-default">
            Every section ships with Tailwind classes, gradient artwork, and
            clear placeholder copy so you can swap in brand colors and
            launch your marketing site by the end of the sprint.
          </p>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroStats = [
  { label: 'Teams powered by this template', value: '500+' },
  { label: 'Avg. deployment time', value: '7 days' },
  { label: 'Platform uptime', value: '99.99%' }
]
</script>