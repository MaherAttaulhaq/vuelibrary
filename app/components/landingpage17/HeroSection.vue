<script setup lang="ts">
const isVideoPlaying = ref(false);
const videoRef = ref<HTMLVideoElement | null>(null);

function playVideo() {
  if (videoRef.value) {
    videoRef.value.play();
    isVideoPlaying.value = true;
  }
}
</script>

<template>
  <section>
    <div class="flex flex-col items-center bg-utility-brand-50 pt-16 md:pt-24">
      <div class="mx-auto flex w-full max-w-container flex-col px-4 md:px-8">
        <div class="flex flex-col items-start sm:items-center sm:text-center">
          <ULink
            href="#"
            class="rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <UBadge
              variant="subtle"
              color="brand"
              class="cursor-pointer transition duration-100 ease-linear hover:bg-brand-100 py-1 pr-2 pl-1 text-sm font-medium hidden md:flex"
            >
              <UBadge variant="solid" color="brand" size="sm" class="mr-2"
                >New feature</UBadge
              >
              Check out the team dashboard
              <Icon
                name="lucide:arrow-right"
                class="ml-1 size-4 text-brand-500"
              />
            </UBadge>
            <UBadge
              variant="subtle"
              color="brand"
              size="sm"
              class="cursor-pointer transition duration-100 ease-linear hover:bg-brand-100 py-1 pr-2 pl-1 text-xs font-medium md:hidden"
            >
              <UBadge variant="solid" color="brand" size="sm" class="mr-2"
                >New feature</UBadge
              >
              Check out the team dashboard
              <Icon
                name="lucide:arrow-right"
                class="ml-1 size-4 text-brand-500"
              />
            </UBadge>
          </ULink>

          <h1
            class="mt-4 text-display-md font-semibold text-brand-700 md:text-display-lg lg:text-display-xl"
          >
            High-performing remote teams. <br />
            The future of work.
          </h1>

          <p class="mt-4 max-w-3xl text-lg text-brand-600 md:mt-6 md:text-xl">
            Powerful, self-serve team engagement tools and analytics.
            Supercharge your managers & keep employees engaged from anywhere.
          </p>

          <div
            class="relative z-1 mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12"
          >
            <UButton variant="outline" size="lg">
              <Icon name="lucide:play" class="size-5" />
              Demo
            </UButton>
            <UButton variant="solid" color="primary" size="lg">Sign up</UButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Abstract Shapes Background -->
    <div class="relative pt-16">
      <div
        class="absolute top-0 h-108 w-full overflow-hidden pt-[152px] md:pt-[94px] 2xl:h-128 2xl:pt-[136px]"
      >
        <div
          class="-skew-y-[7deg] [--column-width:minmax(0,calc(1280px/var(--content-columns)))] [--content-columns:12] [--gutter-columns:4] [--stripe-height:34px] sm:[--stripe-height:48px] lg:[--stripe-height:72px]"
        >
          <div
            class="absolute bottom-[var(--stripe-height)] h-110 w-full bg-utility-brand-50"
          ></div>
          <div
            class="relative grid h-full"
            style="
              grid-template-rows: repeat(3, var(--stripe-height));
              grid-template-columns: [viewport-start] 1fr [left-gutter-start] repeat(
                  var(--gutter-columns),
                  var(--column-width)
                ) [left-gutter-end content-start] repeat(
                  var(--content-columns),
                  var(--column-width)
                ) [content-end right-gutter-start] repeat(
                  var(--gutter-columns),
                  var(--column-width)
                ) [right-gutter-end] 1fr [viewport-end];
            "
          >
            <div
              style="grid-area: 2 / left-gutter-start / auto / span 5"
              class="bg-utility-brand-100"
            ></div>
            <div
              style="grid-area: 3 / viewport-start / auto / span 4"
              class="bg-utility-brand-400"
            ></div>
            <div
              style="grid-area: 1 / span 7 / auto / viewport-end"
              class="bg-utility-brand-400"
            ></div>
            <div
              style="grid-area: 2 / span 8 / auto / right-gutter-end"
              class="bg-utility-brand-200"
            ></div>
            <div
              style="grid-area: 3 / span 3 / auto / viewport-end"
              class="bg-utility-brand-100"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Section -->
    <div class="relative pb-16 md:pb-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="flex justify-center">
          <div
            class="group/video relative outline-focus-ring aspect-video w-full overflow-hidden rounded-xl shadow-3xl md:max-w-240"
          >
            <div
              class="group absolute inset-0 z-10 cursor-pointer rounded-[inherit] transition-all duration-300 ease-in visible opacity-100"
              @click="playVideo"
            >
              <img
                src="https://www.untitledui.com/marketing/video-thumbnail.webp"
                class="size-full object-cover"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  class="flex size-16 items-center justify-center rounded-full bg-white/30 backdrop-blur transition duration-100 ease-linear hover:bg-white/40 scale-100"
                >
                  <Icon name="lucide:play" class="size-5 text-white" />
                </div>
              </div>
            </div>
            <video
              ref="videoRef"
              class="h-full w-full cursor-pointer rounded-[inherit] bg-black outline-1 -outline-offset-1 outline-black/10"
            >
              <source
                src="https://www.untitledui.com/videos/untitled-ui-demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
