<template>
  <section
    class="bg-muted 
           text-default 
           px-4 py-16 sm:px-6 lg:px-8"
  >
    <div
      class="mx-auto max-w-6xl space-y-10 
             lg:grid lg:grid-cols-[3fr,2fr] lg:items-center lg:gap-12"
    >
      
      <!-- Left Content -->
      <div class="space-y-4">
        <UBadge color="neutral" variant="subtle">
          Need custom solutions?
        </UBadge>

        <h2
          class="text-3xl font-semibold
                 text-primary
                 sm:text-4xl"
        >
          Enterprise services built for your team
        </h2>

        <p class="text-base text-muted">
          Get tailored analytics integrations, custom security reviews, and
          dedicated onboarding for your global product team.
        </p>

        <div class="space-y-3 text-sm text-muted">
          <p>• Insights paired with professional services</p>
          <p>• Cohort benchmarking, governance, and white-labeling</p>
          <p>• Real-time migration support from legacy vendors</p>
        </div>
      </div>

      <!-- Right Card -->
      <UCard
        class="border border-default 
               bg-default 
               p-6 shadow-sm"
      >
        <p class="text-highlighted">
          Talk directly with our Enterprise team
        </p>

        <div
          class="mt-6 flex flex-col gap-3 
                 text-lg font-semibold 
                 text-primary"
        >
          <p>Talk to Sales</p>
          <p>+1 (888) 555-0132</p>
          <p>sales@template-studio.dev</p>
        </div>
      </UCard>
    </div>
  </section>
</template>