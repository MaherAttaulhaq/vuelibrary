<template>
  <section
    id="features"
    class="bg-muted px-4 py-16 sm:px-6 lg:px-8"
  >
    <div class="mx-auto max-w-6xl space-y-6 text-center">
      <UBadge
        color="neutral"
        variant="subtle"
      >
        Capabilities
      </UBadge>
      <h2 class="text-3xl font-semibold text-primary sm:text-4xl">
        Design systems built for modern product teams
      </h2>
      <p class="text-base text-default">
        Every template is wired for developer-friendly tooling, realtime
        experimentation, and craftsmanship-level polish.
      </p>
    </div>
    <div
      class="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      <UCard
        v-for="feature in featureHighlights"
        :key="feature.title"
        class="border border-default bg-muted transition hover:border-primary"
        :ui="{ body: 'p-5' }"
      >
        <h3 class="text-lg font-semibold text-primary">
          {{ feature.title }}
        </h3>
        <p class="mt-3 text-sm leading-relaxed text-default">
          {{ feature.description }}
        </p>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const featureHighlights = [
  {
    title: 'AI-powered insights',
    description:
      'Automated anomaly detection, predictive retention forecasting, and prompt-ready recommendations make every launch smarter.'
  },
  {
    title: 'Real-time decision making',
    description:
      'Live dashboards, rich event streaming, and instant alerts keep your product teams in sync with what users actually do.'
  },
  {
    title: 'Privacy-first data',
    description:
      'First-party data models, granular consent controls, and cookieless attribution ensure compliance without sacrificing signal.'
  },
  {
    title: 'Designed for developers',
    description:
      'Tailwind-first UI kit, modular API, and production-ready docs let your engineers stitch everything into your stack fast.'
  }
]
</script>