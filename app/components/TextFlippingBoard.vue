<script setup lang="ts">
import { computed } from "vue";
import FlapCell from "./FlapCell.vue";

const BOARD_ROWS = 6;
const BOARD_COLS = 22;

const props = defineProps<{
  text?: string;
}>();

function wrapText(text: string, maxCols: number) {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const nextLine = line ? `${line} ${word}` : word;
    if (nextLine.length > maxCols) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = nextLine;
    }
  }

  if (line) lines.push(line);
  return lines;
}

const board = computed(() => {
  const grid = Array.from({ length: BOARD_ROWS }, () =>
    Array.from({ length: BOARD_COLS }, () => " "),
  );

  if (!props.text) return grid;

  const lines = wrapText(props.text, BOARD_COLS);

  lines.forEach((line, r) => {
    line.split("").forEach((char, c) => {
      if (r < BOARD_ROWS && c < BOARD_COLS) {
        grid[r][c] = char;
      }
    });
  });

  return grid;
});
</script>

<template>
  <div class="p-4 bg-gray-100 rounded-lg">
    <div
      class="grid gap-1"
      :style="{ gridTemplateColumns: `repeat(${BOARD_COLS}, 1fr)` }"
    >
      <template v-for="(row, r) in board" :key="r">
        <FlapCell
          v-for="(cell, c) in row"
          :key="r + '-' + c"
          :target="cell"
          :delay="c * 30 + r * 20"
          :stepMs="50"
          :flipDuration="0.3"
        />
      </template>
    </div>
  </div>
</template>
