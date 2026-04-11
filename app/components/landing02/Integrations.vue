<script setup lang="ts">
const integrations = [
  { name: 'Notion', icon: 'https://www.untitledui.com/logos/integrations/notion.svg', description: 'Work faster and smarter by integrating directly with Notion.' },
  { name: 'Slack', icon: 'https://www.untitledui.com/logos/integrations/slack.svg', description: 'Work faster and smarter by integrating directly with Slack.' },
  { name: 'Google Drive', icon: 'https://www.untitledui.com/logos/integrations/google_drive.svg', description: 'Work faster and smarter by integrating directly with Google.' },
  { name: 'Intercom', icon: 'https://www.untitledui.com/logos/integrations/intercom.svg', description: 'Work faster and smarter by integrating directly with Intercom.' },
  { name: 'Jira', icon: 'https://www.untitledui.com/logos/integrations/jira.svg', description: 'Work faster and smarter by integrating directly with Jira.' },
  { name: 'Dropbox', icon: 'https://www.untitledui.com/logos/integrations/dropbox.svg', description: 'Work faster and smarter by integrating directly with Dropbox.' }
]
</script>

<template>
  <section class="py-16 md:py-24">
    <UContainer class="text-center">
      <UBadge color="secondary" variant="subtle">
        Integrations
      </UBadge>
      <h2 class="mt-4 text-3xl md:text-4xl font-bold text-highlighted">Get more value from your tools</h2>
      <p class="mt-4 text-lg text-toned max-w-2xl mx-auto">
        Connect your tools, connect your teams. With over 100 apps already available in our directory.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <UCard v-for="integration in integrations" :key="integration.name" class="text-center feature-card">
          <img :src="integration.icon" class="h-14 mx-auto mb-4" :alt="integration.name">
          <h3 class="text-lg font-semibold">{{ integration.name }} integration</h3>
          <p class="text-muted mt-2">{{ integration.description }}</p>
          <UButton color="primary" variant="link" class="mt-4">
            View integration →
          </UButton>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.feature-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}
</style>