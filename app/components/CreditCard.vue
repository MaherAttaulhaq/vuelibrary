<template>
  <div
    :class="cardClass"
    class="rounded-2xl"
    style="width: 316px; height: 190px"
  >
    <div class="relative flex h-full flex-col justify-between p-4">
      <div class="relative flex items-start justify-between px-1 pt-1">
        <div class="text-md font-semibold text-white">
          Untitled.
        </div>
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          class="text-white"
        >
          <path
            d="M15.1429 1.28571C17.0236 4.54326 18.0138 8.23849 18.0138 12C18.0138 15.7615 17.0236 19.4567 15.1429 22.7143M10.4286 3.64285C11.8956 6.18374 12.6679 9.06602 12.6679 12C12.6679 14.934 11.8956 17.8162 10.4286 20.3571M5.92859 5.80713C6.98933 7.66394 7.54777 9.77022 7.54777 11.9143C7.54777 14.0583 6.98933 16.1646 5.92859 18.0214M1.42859 8.14285C2.19306 9.29983 2.59834 10.6362 2.59834 12C2.59834 13.3638 2.19306 14.7002 1.42859 15.8571"
            stroke="currentColor"
            stroke-width="2.57143"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="relative flex items-end justify-between gap-3">
        <div class="flex min-w-0 flex-col gap-2">
          <div class="flex items-end gap-1">
            <p class="text-xs font-semibold tracking-[0.6px] uppercase text-white">
              {{ name }}
            </p>
            <p class="ml-auto text-right text-xs font-semibold tracking-[0.6px] tabular-nums text-white">
              06/28
            </p>
          </div>
          <div class="text-md font-semibold tracking-[1px] tabular-nums text-white">
            1234 1234 1234 1234
          </div>
        </div>
        <div class="flex h-8 w-11.5 shrink-0 items-center justify-center rounded bg-white/10">
          <svg
            width="30"
            height="19"
            viewBox="0 0 30 19"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9053 16.4393C13.3266 17.77 11.2787 18.5733 9.04092 18.5733C4.04776 18.5733 0 14.5737 0 9.64C0 4.70625 4.04776 0.706665 9.04092 0.706665C11.2787 0.706665 13.3266 1.51 14.9053 2.84072C16.484 1.51 18.5319 0.706665 20.7697 0.706665C25.7629 0.706665 29.8106 4.70625 29.8106 9.64C29.8106 14.5737 25.7629 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4393Z"
              fill="#ED0006"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9053 16.4393C16.8492 14.8007 18.0818 12.3626 18.0818 9.64C18.0818 6.91739 16.8492 4.47925 14.9053 2.84072C16.484 1.50999 18.5319 0.706665 20.7697 0.706665C25.7628 0.706665 29.8106 4.70625 29.8106 9.64C29.8106 14.5737 25.7628 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4393Z"
              fill="#F9A000"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9053 16.4393C16.8492 14.8008 18.0818 12.3627 18.0818 9.64007C18.0818 6.91748 16.8492 4.47936 14.9053 2.84082C12.9614 4.47936 11.7288 6.91748 11.7288 9.64007C11.7288 12.3627 12.9614 14.8008 14.9053 16.4393Z"
              fill="#FF5E00"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name?: string
  variant?: string
}>()

const cardClass = computed(() => {
  const variants = {
    primary: 'bg-gradient-to-tr from-purple-900 to-purple-700 relative before:absolute before:inset-0 before:rounded-[inherit] before:ring-1 before:ring-white/30 before:ring-inset',
    glass: 'bg-black/10 backdrop-blur-[6px] bg-gradient-to-br from-white/30 to-transparent relative before:absolute before:inset-0 before:rounded-[inherit] before:ring-1 before:ring-white/30 before:ring-inset',
    dark: 'bg-gradient-to-tr from-neutral-900 to-neutral-700 relative before:absolute before:inset-0 before:rounded-[inherit] before:ring-1 before:ring-white/30 before:ring-inset',
    light: 'bg-neutral-100 relative before:absolute before:inset-0 before:rounded-[inherit] before:ring-1 before:ring-white/30 before:ring-inset'
  }

  return variants[props.variant as keyof typeof variants] || variants.primary
})
</script>
