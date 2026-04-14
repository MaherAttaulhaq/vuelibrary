<template>
  <section class="relative overflow-hidden bg-transparent py-20 md:py-28">
    <!-- Ambient Background -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div class="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[120px]" />
    </div>

    <div
      class="relative mx-auto flex max-w-container flex-col gap-14 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-20"
    >
      <!-- LEFT -->
      <div class="flex w-full max-w-2xl flex-1 flex-col items-start">

        <!-- Badge -->
        <ULink href="#">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-muted/40 bg-muted/10 px-3 py-1 text-xs font-medium text-muted transition hover:bg-muted/20"
          >
            <span class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-primary animate-pulse" />
              New feature
            </span>
            <span class="text-muted">•</span>
            <span class="text-foreground/80">Personalized coaching in-app</span>
            <Icon name="lucide:arrow-right" class="ml-1 size-4 text-muted" />
          </div>
        </ULink>

        <!-- Heading -->
        <h1
          class="mt-6 text-4xl font-semibold tracking-tight text-highlighted md:text-5xl lg:text-6xl leading-tight"
        >
          Portfolio performance tracking made easy
        </h1>

        <!-- Description -->
        <p class="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Designed by marketers. Untitled gives you the guidance, data, and innovation you need to
          scale your portfolio with clarity and confidence.
        </p>

        <!-- CTA -->
        <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <AppStoreButton />
          <GooglePlayButton />
        </div>

        <!-- Optional micro trust line -->
        <p class="mt-6 text-xs text-muted/70">
          No credit card required • Setup in under 2 minutes
        </p>
      </div>

      <!-- RIGHT -->
      <div class="relative flex w-full justify-center lg:max-w-lg lg:justify-end">

        <!-- Glow Frame -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <!-- Decorative Shape -->
        <div class="absolute top-10 z-0 opacity-80 lg:top-16">
          <svg viewBox="0 0 532 480" fill="none" class="w-[520px]">
            <path
              d="M182.034 461.691C74.9901 428.768 1.32278 329.846 0.0121784 217.408C-1.15817 117.003 82.1936 43.2414 176.777 10.7273C260.07 -17.9056 346.327 12.9156 406.143 77.7959C484.913 163.236 571.343 274.645 512.702 375.097C449.003 484.212 302.448 498.727 182.034 461.691Z"
              class="fill-muted/40"
            />
          </svg>
        </div>

        <!-- Mockup -->
        <div class="relative z-10 drop-shadow-2xl">
          <IPhoneMockup />
        </div>
      </div>
    </div>
  </section>
</template>