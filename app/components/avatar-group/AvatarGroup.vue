<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import AvatarGroupPrimitive from '@nuxt/ui/components/AvatarGroup.vue'
import type { AvatarGroupProps as AvatarGroupPropsPrimitive } from '@nuxt/ui/components/AvatarGroup.vue'

const props = withDefaults(
  defineProps<AvatarGroupPropsPrimitive & { invertOverlap?: boolean }>(),
  {
    invertOverlap: true
  }
)

const overlapClass = computed(() => {
  const base = ['h-12', 'items-center', 'inline-flex', '-space-x-3']
  if (!props.invertOverlap) {
    base.push('flex-row-reverse')
  }
  return [...base, props.class]
})

export type AvatarGroupProps = AvatarGroupPropsPrimitive
</script>

<template>
  <AvatarGroupPrimitive
    v-bind="$attrs"
    :as="props.as"
    :size="props.size"
    :max="props.max"
    :ui="props.ui"
    :class="overlapClass"
  >
    <slot />
  </AvatarGroupPrimitive>
</template>
