<template>
  <footer class="bg-muted py-12 md:pt-16">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col justify-center text-center">
        <h2
          class="text-display-xs font-semibold text-primary md:text-display-sm"
        >
          Let's get started on something great
        </h2>
        <p class="mt-2 text-md text-muted-600 md:mt-4 md:text-xl">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div
          class="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-12 md:flex-row md:self-center"
        >
          <UButton
            variant="outline"
            color="neutral"
          >
            Chat to us
          </UButton>
          <UButton
            variant="solid"
            color="primary"
          >
            Get started
          </UButton>
        </div>
      </div>

      <nav class="mt-12 md:mt-16">
        <ul class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <li>
            <h4 class="text-sm font-semibold text-muted-400">
              Product
            </h4>
            <ul class="mt-4 flex flex-col gap-3">
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Overview</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Features</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Solutions <UBadge
                  size="xs"
                  class="ml-1"
                >New</UBadge></ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Tutorials</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Pricing</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Releases</ULink>
              </li>
            </ul>
          </li>
          <li>
            <h4 class="text-sm font-semibold text-muted-400">
              Company
            </h4>
            <ul class="mt-4 flex flex-col gap-3">
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >About us</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Careers</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Press</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >News</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Media kit</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Contact</ULink>
              </li>
            </ul>
          </li>
          <li>
            <h4 class="text-sm font-semibold text-muted-400">
              Resources
            </h4>
            <ul class="mt-4 flex flex-col gap-3">
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Blog</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Newsletter</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Events</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Help centre</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Tutorials</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Support</ULink>
              </li>
            </ul>
          </li>
          <li>
            <h4 class="text-sm font-semibold text-muted-400">
              Use cases
            </h4>
            <ul class="mt-4 flex flex-col gap-3">
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Startups</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Enterprise</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Government</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >SaaS centre</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Marketplaces</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Ecommerce</ULink>
              </li>
            </ul>
          </li>
          <li>
            <h4 class="text-sm font-semibold text-muted-400">
              Social
            </h4>
            <ul class="mt-4 flex flex-col gap-3">
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >X</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >LinkedIn</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Facebook</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >GitHub</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >AngelList</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Dribbble</ULink>
              </li>
            </ul>
          </li>
          <li>
            <h4 class="text-sm font-semibold text-muted-400">
              Legal
            </h4>
            <ul class="mt-4 flex flex-col gap-3">
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Terms</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Privacy</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Cookies</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Licenses</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Settings</ULink>
              </li>
              <li>
                <ULink
                  to="#"
                  class="text-muted-500 hover:text-muted-700 text-sm"
                >Contact</ULink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div
        class="mt-12 flex flex-col justify-between gap-6 border-t border-muted-200 pt-8 md:mt-16 md:flex-row md:items-center"
      >
        <div class="flex items-center justify-start overflow-visible h-7 w-min">
          <svg
            viewBox="0 0 38 38"
            fill="none"
            class="size-8 origin-center scale-[1.2] aspect-square h-full w-auto shrink-0"
          >
            <g filter="url(#filter0_logo)">
              <g clip-path="url(#clip0_logo)">
                <path
                  d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z"
                  fill="currentColor"
                />
                <path
                  d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z"
                  fill="url(#paint0_logo)"
                  fill-opacity="0.2"
                />
              </g>
            </g>
          </svg>
          <div class="aspect-[0.3] h-full" />
          <svg
            viewBox="0 0 97 32"
            fill="none"
            class="aspect-[3] h-full shrink-0"
          >
            <path
              d="M33.9101 10.2372C34.2321 10.5355 34.6179 10.6847 35.0678 10.6847C35.5176 10.6847 35.9011 10.5355 36.2183 10.2372C36.5403 9.9342 36.7013 9.57199 36.7013 9.15058C36.7013 8.73392 36.5403 8.37644 36.2183 8.07814C35.9011 7.77511 35.5176 7.6236 35.0678 7.6236C34.6179 7.6236 34.2321 7.77511 33.9101 8.07814C33.5928 8.37644 33.4342 8.73392 33.4342 9.15058C33.4342 9.57199 33.5928 9.9342 33.9101 10.2372Z"
              class="fill-fg-primary"
            />
            <path
              d="M11.2997 20.6847C11.8063 19.8892 12.0597 18.9612 12.0597 17.9006V8.45456H8.98438V17.6378C8.98438 18.1918 8.86127 18.6842 8.61506 19.1151C8.37358 19.5459 8.0303 19.8845 7.58523 20.1307C7.14489 20.3769 6.62642 20.5 6.02983 20.5C5.43797 20.5 4.91951 20.3769 4.47443 20.1307C4.02936 19.8845 3.68371 19.5459 3.4375 19.1151C3.19602 18.6842 3.07528 18.1918 3.07528 17.6378V8.45456H0V17.9006C0 18.9612 0.250947 19.8892 0.752841 20.6847C1.25473 21.4801 1.95786 22.1004 2.86222 22.5455C3.76657 22.9858 4.82244 23.206 6.02983 23.206C7.23248 23.206 8.28599 22.9858 9.19034 22.5455C10.0947 22.1004 10.7978 21.4801 11.2997 20.6847Z"
              class="fill-fg-primary"
            />
          </svg>
        </div>
        <p class="text-sm text-muted-400">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Filter definitions for logos */
.filter0_logo {
  /* Filter styles from original */
}
</style>
