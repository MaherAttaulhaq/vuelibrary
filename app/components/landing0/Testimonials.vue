<template>
  <section
    id="testimonials"
    class="bg-muted px-4 py-16 sm:px-6 lg:px-8"
  >
    <div class="mx-auto max-w-6xl space-y-10">
      <div class="space-y-4 text-center">
        <UBadge
          color="neutral"
          variant="subtle"
        >
          Proof
        </UBadge>
        <h2 class="text-3xl font-semibold text-primary sm:text-4xl">
          Loved by thousands
        </h2>
        <p class="text-base text-default">
          Teams deploy this design system for product launches, analytics
          platforms, and high-impact marketing pages.
        </p>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <UCard
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="border border-default bg-muted backdrop-blur transition hover:border-primary"
        >
          <p class="text-sm leading-relaxed text-default">
            "{{ testimonial.quote }}"
          </p>
          <template #footer>
            <div class="border-t border-default pt-4">
              <p class="text-sm font-semibold text-primary">
                {{ testimonial.name }}
              </p>
              <p class="text-xs uppercase tracking-[0.4em] text-default">
                {{ testimonial.company }}
              </p>
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote:
      'This platform transformed how we understand our users. The insights helped us increase conversion by 240% in just three months.',
    name: 'Sarah Chen · VP of Product',
    company: 'Northwind Labs'
  },
  {
    quote:
      'We replaced a patchwork of spreadsheets with a single, beautiful workspace. Every stakeholder now arrives at standups with the same data.',
    name: 'Marcus Johnson · CTO',
    company: 'Atlas Growth'
  },
  {
    quote:
      'The support team treated our request like a launch partner. The onboarding program and playbooks accelerated adoption globally.',
    name: 'Alex Rivera · Head of Revenue',
    company: 'Empyrean'
  }
]
</script>