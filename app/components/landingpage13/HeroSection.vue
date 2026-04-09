<template>
  <section class="relative overflow-hidden pt-16 md:py-24">
    <div class="mx-auto flex max-w-container flex-col gap-16 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-16">
      <div class="flex w-full max-w-3xl flex-1 flex-col items-start">
        <ULink href="#" class="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
          <UBadge
            variant="subtle"
            color="secondary"
            class="cursor-pointer transition duration-100 ease-linear hover:bg-secondary py-1 pr-2 pl-1 text-sm font-medium hidden md:flex"
          >
            <UBadge variant="solid" color="primary" size="sm" class="mr-2">
              <span class="inline-block size-2 shrink-0 rounded-full bg-utility-brand-500" />
              New feature
            </UBadge>
            Personalized coaching in-app
            <Icon name="lucide:arrow-right" class="text-utility-neutral-500 ml-1 size-4" />
          </UBadge>
          <UBadge
            variant="subtle"
            color="secondary"
            size="sm"
            class="cursor-pointer transition duration-100 ease-linear hover:bg-secondary py-1 pr-2 pl-1 text-xs font-medium md:hidden"
          >
            <UBadge variant="solid" color="primary" size="sm" class="mr-2">
              <span class="inline-block size-2 shrink-0 rounded-full bg-utility-brand-500" />
              New feature
            </UBadge>
            Personalized coaching in-app
            <Icon name="lucide:arrow-right" class="text-utility-neutral-500 ml-1 size-4" />
          </UBadge>
        </ULink>
        
        <h1 class="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
          Portfolio performance tracking made easy
        </h1>
        
        <p class="mt-4 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
          Designed by marketers. Untitled gives you the guidance, data and innovation you need to become a better marketer.
        </p>
        
        <div class="mt-8 flex gap-3 md:mt-12">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>
      
      <div class="relative flex h-90 w-full items-start justify-center lg:h-160 lg:max-w-lg lg:items-center">
        <div class="absolute top-24 w-133 lg:top-auto">
          <svg width="532" height="480" viewBox="0 0 532 480" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M182.034 461.691C74.9901 428.768 1.32278 329.846 0.0121784 217.408C-1.15817 117.003 82.1936 43.2414 176.777 10.7273C260.07 -17.9056 346.327 12.9156 406.143 77.7959C484.913 163.236 571.343 274.645 512.702 375.097C449.003 484.212 302.448 498.727 182.034 461.691Z" class="fill-bg-secondary"/>
          </svg>
        </div>
        <IPhoneMockup />
      </div>
    </div>
  </section>
</template>