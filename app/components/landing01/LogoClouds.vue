<script setup lang="ts">
const logoRows = [
  ['catalog', 'pictel-ai', 'leapyear', 'peregrin'],
  ['easy-tax', 'core-os']
]

const integrationLogos = [
  'notion',
  'slack',
  'google_drive',
  'intercom',
  'jira',
  'dropbox',
  'stripe',
  'zapier',
  'figma',
  'confluence',
  'mailchimp',
  'zendesk'
]
</script>

<template>
  <section class="bg-muted px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-10">
      <div>
        <UBadge color="neutral" variant="subtle" class="text-xs uppercase tracking-[0.4em] my-1.5">
          Logo clouds
        </UBadge>
        <div class="flex flex-wrap items-center gap-6">
          <div
            v-for="row in logoRows"
            :key="row.join('-')"
            class="flex flex-wrap items-center gap-6"
          >
            <div
              v-for="logo in row"
              :key="logo"
              class="flex h-12 w-32 items-center justify-center opacity-70 transition hover:opacity-100"
            >
              <img
                :src="`https://www.untitledui.com/logos/logotype/${row === logoRows[1] ? 'white' : 'color'}/${logo}.svg`"
                :alt="logo"
                class="max-h-full"
                loading="lazy"
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <UBadge color="neutral" variant="subtle" class="text-xs my-1.5 uppercase tracking-[0.4em]">
          Integrations
        </UBadge>
        <div class="grid gap-4 sm:grid-cols-3 md:grid-cols-4 ">
          <div
            v-for="integration in integrationLogos"
            :key="integration"
            class="flex h-12 items-center justify-center hover:bg-muted-foreground/20 rounded-3xl  border border-border bg-muted/50 p-3"
          >
            <img
              :src="`https://www.untitledui.com/logos/integrations/${integration}.svg`"
              :alt="integration"
              class="max-h-full"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>