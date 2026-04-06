<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from "vue";
import { Motion } from "motion-v";

const FLAP_CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$()-+&=;:'\"%,./?°";

const props = defineProps<{
  target: string;
  delay: number;
  stepMs: number;
  flipDuration: number;
}>();

const current = ref(" ");
const prev = ref(" ");
const flipId = ref(0);

let startTimer: any = null;
let stepTimer: any = null;
let cur = " ";

watch(
  () => props.target,
  (newTarget) => {
    clearTimeout(startTimer);
    clearTimeout(stepTimer);

    const normalized = FLAP_CHARS.includes(newTarget) ? newTarget : " ";

    let steps = 20 + Math.floor(Math.random() * 10);

    const runStep = (i: number) => {
      const isLast = i === steps;

      const ch = isLast
        ? normalized
        : FLAP_CHARS[Math.floor(Math.random() * FLAP_CHARS.length)];

      prev.value = cur;
      cur = ch;
      current.value = ch;
      flipId.value++;

      if (!isLast) {
        stepTimer = setTimeout(() => runStep(i + 1), props.stepMs);
      }
    };

    startTimer = setTimeout(() => runStep(1), props.delay);
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  clearTimeout(startTimer);
  clearTimeout(stepTimer);
});
</script>

<template>
  <div class="flex flex-col overflow-hidden border rounded">
    <div class="relative h-10 perspective-[1000px]">
      <!-- Top Static -->
      <div class="absolute top-0 w-full h-1/2 overflow-hidden bg-gray-200">
        <div class="text-center font-mono">{{ current }}</div>
      </div>

      <!-- Bottom Static -->
      <div class="absolute bottom-0 w-full h-1/2 overflow-hidden bg-gray-300">
        <div class="text-center font-mono">{{ current }}</div>
      </div>

      <!-- Top Flip -->
      <Motion
        v-if="flipId"
        :key="flipId"
        class="absolute top-0 w-full h-1/2 bg-gray-100 origin-bottom"
        :initial="{ rotateX: 0 }"
        :animate="{ rotateX: -90 }"
        :transition="{ duration: flipDuration }"
      >
        <div class="text-center font-mono">{{ prev }}</div>
      </Motion>

      <!-- Bottom Flip -->
      <Motion
        v-if="flipId"
        :key="'b' + flipId"
        class="absolute bottom-0 w-full h-1/2 bg-gray-200 origin-top"
        :initial="{ rotateX: 90 }"
        :animate="{ rotateX: 0 }"
        :transition="{ duration: flipDuration, delay: flipDuration / 2 }"
      >
        <div class="text-center font-mono">{{ current }}</div>
      </Motion>
    </div>
  </div>
</template>
