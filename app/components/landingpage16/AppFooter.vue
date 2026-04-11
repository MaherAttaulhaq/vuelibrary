<template>
  <footer class="bg-muted py-12 md:pt-16">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col md:items-center md:text-center">
        <svg viewBox="0 0 38 38" fill="none" class="size-8 origin-center scale-[1.2] drop-shadow">
          <path
            d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z"
            fill="currentColor"
          />
        </svg>
        <h2 class="mt-8 text-display-xs font-semibold text-primary md:mt-12 md:text-display-sm">Let&apos;s get started on something great</h2>
        <p class="mt-2 text-md text-muted-600 dark:text-muted-400 md:mt-4 md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
        <div class="mt-8 flex flex-col-reverse gap-3 md:mt-12 md:flex-row">
          <UButton variant="outline" color="neutral" size="lg">
            <Icon name="lucide:play" class="size-5" />
            View demo
          </UButton>
          <UButton variant="solid" color="primary" size="lg">
            Get started
          </UButton>
        </div>
      </div>

      <div class="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-muted-200 pt-8 dark:border-muted-800 md:mt-16 md:flex-row md:gap-6">
        <p class="text-sm text-muted-400 dark:text-muted-500">© 2077 Untitled UI. All rights reserved.</p>
        <ul class="flex gap-3">
          <li><ULink to="#" class="rounded-xs text-sm text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300">Terms</ULink></li>
          <li><ULink to="#" class="rounded-xs text-sm text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300">Privacy</ULink></li>
          <li><ULink to="#" class="rounded-xs text-sm text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300">Cookies</ULink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
