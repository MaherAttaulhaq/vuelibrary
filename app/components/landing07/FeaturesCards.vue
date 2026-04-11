<template>
  <section class="bg-bg-secondary py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col items-center gap-12 text-center">
        <div class="flex max-w-2xl flex-col">
          <h2 class="text-display-md font-semibold text-text-primary md:text-display-lg">
            Features to help your team succeed
          </h2>
          <p class="mt-4 text-xl text-text-tertiary">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            icon="i-lucide-message-square"
            title="Share team inboxes"
            description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          />
          <FeatureCard
            icon="i-lucide-zap"
            title="Deliver instant answers"
            description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          />
          <FeatureCard
            icon="i-lucide-chart-bar"
            title="Manage your team with reports"
            description="Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional script needed - data is inline in template
</script>