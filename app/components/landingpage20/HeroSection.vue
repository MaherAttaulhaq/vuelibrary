<template>
  <section class="overflow-hidden bg-muted py-16 md:pb-24">
    <div
      class="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2 lg:gap-8"
    >
      <div class="flex max-w-3xl flex-col items-start lg:pr-8">
        <h1
          class="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl"
        >
          People who care about your growth
        </h1>
        <p
          class="mt-4 max-w-lg text-lg text-balance text-muted-600 dark:text-muted-400 md:mt-6 md:text-xl"
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more.
        </p>
        <div
          class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12"
        >
          <UButton variant="outline" color="muted" size="lg">
            <Icon name="lucide:play" class="size-5" />
            Demo
          </UButton>
          <UButton variant="solid" color="primary" size="lg">Sign up</UButton>
        </div>
      </div>
      <div class="relative lg:h-full lg:min-h-160">
        <div
          class="absolute bottom-9 -left-18 z-10 hidden w-92 flex-col gap-3 select-none lg:flex"
        >
          <div
            class="relative rounded-xl bg-white/90 p-4 ring ring-muted-200 backdrop-blur-lg dark:bg-black/50 dark:ring-muted-800"
          >
            <div class="relative flex grow items-start justify-start gap-3">
              <div
                class="size-10 rounded bg-brand-600 flex items-center justify-center"
              >
                <Icon name="lucide:music" class="size-5 text-white" />
              </div>
              <div class="flex flex-1 flex-col items-start justify-start gap-1">
                <div class="pr-8">
                  <p
                    class="text-sm font-medium text-muted-700 dark:text-muted-300"
                  >
                    My Podcast – Episode 1.mp3
                  </p>
                  <div class="mt-0.5 flex items-center gap-2">
                    <p class="text-sm text-muted-500 dark:text-muted-400">
                      20 MB of 20 MB
                    </p>
                    <hr
                      class="h-3 w-px rounded-t-full rounded-b-full border-none bg-muted-200 dark:bg-muted-800"
                    />
                    <div class="flex items-center gap-1">
                      <Icon
                        name="lucide:check-circle"
                        class="size-4 text-success-500"
                      />
                      <p
                        class="text-sm font-medium text-success-600 dark:text-success-400"
                      >
                        Complete
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-start gap-3 self-stretch">
                  <div
                    class="relative h-2 flex-1 rounded bg-muted-200 dark:bg-muted-800"
                  >
                    <div class="h-full w-full rounded bg-brand-500"></div>
                  </div>
                  <p
                    class="text-sm font-medium text-muted-700 dark:text-muted-300"
                  >
                    100%
                  </p>
                </div>
              </div>
              <Icon
                name="lucide:x"
                class="absolute -top-0.5 -right-0.5 size-4 text-muted-400"
              />
            </div>
          </div>
          <div
            class="relative rounded-xl bg-white/90 p-4 ring ring-muted-200 backdrop-blur-lg dark:bg-black/50 dark:ring-muted-800"
          >
            <div class="relative flex grow items-start justify-start gap-3">
              <div
                class="size-10 rounded bg-brand-600 flex items-center justify-center"
              >
                <Icon name="lucide:music" class="size-5 text-white" />
              </div>
              <div class="flex flex-1 flex-col items-start justify-start gap-1">
                <div class="pr-8">
                  <p
                    class="text-sm font-medium text-muted-700 dark:text-muted-300"
                  >
                    My Podcast – Episode 2.mp3
                  </p>
                  <div class="mt-0.5 flex items-center gap-2">
                    <p class="text-sm text-muted-500 dark:text-muted-400">
                      16 MB of 20 MB
                    </p>
                    <hr
                      class="h-3 w-px rounded-t-full rounded-b-full border-none bg-muted-200 dark:bg-muted-800"
                    />
                    <div class="flex items-center gap-1">
                      <Icon
                        name="lucide:cloud-upload"
                        class="size-4 text-muted-400"
                      />
                      <p
                        class="text-sm font-medium text-muted-500 dark:text-muted-400"
                      >
                        Uploading...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-start gap-3 self-stretch">
                  <div
                    class="relative h-2 flex-1 rounded bg-muted-200 dark:bg-muted-800"
                  >
                    <div class="h-full w-[80%] rounded bg-brand-500"></div>
                  </div>
                  <p
                    class="text-sm font-medium text-muted-700 dark:text-muted-300"
                  >
                    80%
                  </p>
                </div>
              </div>
              <Icon
                name="lucide:x"
                class="absolute -top-0.5 -right-0.5 size-4 text-muted-400"
              />
            </div>
          </div>
        </div>
        <div class="absolute top-6 right-5 z-10 translate-x-1/2 md:-top-10">
          <svg
            viewBox="0 0 298 408"
            fill="none"
            class="hidden w-48.5 text-muted-400 opacity-30 md:block md:w-74.5"
          >
            <path
              d="M297.5 407.5C297.5 407.5 240.5 315.5 140.5 315.5C40.5 315.5 0.5 407.5 0.5 407.5V0.5H297.5V407.5Z"
              stroke="currentColor"
              stroke-width="1"
            />
          </svg>
        </div>
        <img
          class="inset-0 h-70 w-full rounded-tl-[64px] object-cover md:h-110 md:rounded-tl-[92px] lg:absolute lg:h-full lg:rounded-tl-[160px]"
          src="https://www.untitledui.com/marketing/man-and-laptop.webp"
          alt="Man and Laptop"
        />
      </div>
    </div>
  </section>
</template>
