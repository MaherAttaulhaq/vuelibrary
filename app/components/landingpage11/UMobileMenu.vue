<template>
  <USlideover v-model:open="open" side="right">
    <div class="p-4 flex flex-col h-full">
      <div class="flex justify-end">
        <UButton variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="open = false" />
      </div>
      <div class="flex-1">
        <UVerticalNavigation 
          :links="links" 
          class="mt-4"
          @click="open = false"
        />
      </div>
      <div class="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4 space-y-3">
        <UButton block variant="ghost" label="Log in" />
        <UButton block color="primary" label="Sign up" />
      </div>
    </div>
  </USlideover>
</template>

<script setup lang="ts">
defineProps<{
  links: Array<{ label: string; to: string }>
}>()

const open = defineModel<boolean>('open')
</script>