<template>
  <section class="bg-muted-section py-16 md:py-24">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <UPageCTA
        title="Start your free trial"
        description="Join over 4,000+ startups already growing with Untitled."
        align="center"
        :ui="{
          container: 'flex flex-col items-center text-center',
          title: 'text-3xl md:text-4xl font-semibold text-primary',
          description: 'mt-4 md:mt-5 text-lg md:text-xl text-secondary',
          actions: 'mt-8 flex flex-col-reverse gap-3 md:flex-row md:justify-center'
        }"
      >
        <template #actions>
          <UButton
            label="Learn more"
            color="neutral"
            variant="outline"
            size="lg"
          />
          <UButton
            label="Get started"
            color="primary"
            size="lg"
          />
        </template>
      </UPageCTA>
    </div>
  </section>
</template>

<script lang="ts" setup>
// No script needed for this component
</script>