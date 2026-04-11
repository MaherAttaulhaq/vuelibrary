<template>
  <div class="w-80 h-48 rounded-2xl bg-black/10 backdrop-blur-md border border-white/20 p-4 text-white">
    <div class="flex justify-between items-start">
      <span class="font-semibold">Untitled.</span>
      <svg viewBox="0 0 24 24" class="w-6 h-6" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M12 2v20M2 12h20" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
    <div class="mt-8 flex justify-between items-end">
      <div>
        <p class="text-xs uppercase tracking-wider">{{ name }}</p>
        <p class="text-lg font-mono tracking-wider mt-1">•••• •••• •••• 1234</p>
      </div>
      <p class="text-xs">{{ date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  date: String
})
</script>
