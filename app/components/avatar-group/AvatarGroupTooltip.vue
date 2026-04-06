<script setup lang="ts">
import { motion } from 'motion-v'
import { computed, toRaw, withDefaults } from 'vue'
import TooltipPrimitive from '@nuxt/ui/components/Tooltip.vue'
import type { TooltipProps as TooltipPropsPrimitive } from '@nuxt/ui/components/Tooltip.vue'

type ExtendedTooltipProps = TooltipPropsPrimitive & {
  layout?: boolean | 'position' | 'size' | 'preserve-aspect'
  contentClass?: string
}

const props = withDefaults(defineProps<ExtendedTooltipProps>(), {
  layout: 'preserve-aspect'
})

const tooltipProps = computed(() => {
  const { layout, contentClass, class: _class, ...rest } = toRaw(props) as ExtendedTooltipProps
  if (rest.arrow === undefined) {
    rest.arrow = { rounded: true }
  }
  return rest
})

const tooltipTriggerClass = computed(() =>
  ['inline-flex', props.class].filter(Boolean).join(' ')
)

const contentClasses = computed(() =>
  ['bg-primary text-primary-foreground z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance shadow-lg', props.contentClass]
    .filter(Boolean)
    .join(' ')
)

export type AvatarGroupTooltipProps = ExtendedTooltipProps
</script>

<template>
  <TooltipPrimitive
    v-bind="tooltipProps"
    :class="tooltipTriggerClass"
  >
    <template #default="{ open }">
      <slot :open="open" />
    </template>

    <template #content>
      <motion.div
        :layout="props.layout"
        :class="contentClasses"
      >
        <slot name="content">
          <span v-if="props.text">{{ props.text }}</span>
        </slot>
      </motion.div>
    </template>
  </TooltipPrimitive>
</template>
