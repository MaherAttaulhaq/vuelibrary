<template>
  <section class="bg-bg-secondary py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col items-center gap-12 text-center">
        <div class="flex max-w-2xl flex-col">
          <h2 class="text-display-md font-semibold text-text-primary md:text-display-lg">
            Integrations
          </h2>
          <p class="mt-4 text-xl text-text-tertiary">
            Connect with third-party tools that you're already using.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <IntegrationItem
            name="Zapier"
            description="Build custom automation and integrations with apps you use."
            logo="https://www.untitledui.com/logos/zapier.svg"
          />
          <IntegrationItem
            name="Pipedrive"
            description="CRM and sales pipeline management software."
            logo="https://www.untitledui.com/logos/pipedrive.svg"
          />
          <IntegrationItem
            name="CIB Bank"
            description="Banking services for business and personal use."
            logo="https://www.untitledui.com/logos/cib-bank.svg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional script needed - integration items are inline in template
</script>