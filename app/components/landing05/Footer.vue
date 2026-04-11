<template>
  <footer class="bg-muted-section pt-12 pb-8 md:pt-16">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <div class="flex flex-col gap-12 md:gap-16 xl:flex-row">
        <div class="flex flex-col items-start gap-6 md:w-80">
          <div class="flex h-7 w-min shrink-0 items-center">
            <svg
              viewBox="0 0 38 38"
              fill="none"
              class="h-full w-auto"
            >
              <path
                d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z"
                fill="currentColor"
                class="text-primary"
              />
              <rect
                x="11"
                y="10"
                width="16"
                height="16"
                rx="8"
                fill="#6941C6"
              />
            </svg>
          </div>
          <p class="text-md text-secondary">
            Design amazing digital experiences that create more happy in the world.
          </p>
          <div class="flex items-center gap-2">
            <div class="flex gap-0.5">
              <UIcon
                v-for="i in 5"
                :key="i"
                name="i-heroicons-star"
                class="size-4 text-yellow-400"
              />
            </div>
            <div>
              <p class="text-sm font-semibold text-primary">
                Best Design Tool
              </p>
              <p class="text-xs font-medium text-secondary">
                2,000+ reviews
              </p>
            </div>
          </div>
        </div>

        <nav class="flex-1">
          <ul class="grid grid-cols-2 gap-8 md:grid-cols-5">
            <li
              v-for="section in footerSections"
              :key="section.title"
            >
              <h4 class="text-sm font-semibold text-tertiary">
                {{ section.title }}
              </h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li
                  v-for="link in section.links"
                  :key="link.label"
                >
                  <ULink
                    :to="link.href"
                    class="text-sm text-secondary hover:text-primary"
                  >{{ link.label }}</ULink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <UDivider class="my-8" />

      <div class="flex flex-col-reverse justify-between gap-6">
        <p class="text-sm text-tertiary">
          © 2077 Untitled UI. All rights reserved.
        </p>
        <div class="flex gap-6">
          <ULink
            v-for="social in socialLinks"
            :key="social.name"
            :to="social.href"
            class="text-tertiary hover:text-secondary"
          >
            <UIcon
              :name="social.icon"
              class="size-5"
            />
          </ULink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const footerSections = [
  { title: 'Product', links: [{ label: 'Overview', href: '#' }, { label: 'Features', href: '#' }, { label: 'Solutions', href: '#' }, { label: 'Tutorials', href: '#' }, { label: 'Pricing', href: '#' }, { label: 'Releases', href: '#' }] },
  { title: 'Company', links: [{ label: 'About us', href: '#' }, { label: 'Careers', href: '#' }, { label: 'Press', href: '#' }, { label: 'News', href: '#' }, { label: 'Media kit', href: '#' }, { label: 'Contact', href: '#' }] },
  { title: 'Resources', links: [{ label: 'Blog', href: '#' }, { label: 'Newsletter', href: '#' }, { label: 'Events', href: '#' }, { label: 'Help centre', href: '#' }, { label: 'Tutorials', href: '#' }, { label: 'Support', href: '#' }] },
  { title: 'Social', links: [{ label: 'X', href: '#' }, { label: 'LinkedIn', href: '#' }, { label: 'Facebook', href: '#' }, { label: 'GitHub', href: '#' }, { label: 'AngelList', href: '#' }, { label: 'Dribbble', href: '#' }] },
  { title: 'Legal', links: [{ label: 'Terms', href: '#' }, { label: 'Privacy', href: '#' }, { label: 'Cookies', href: '#' }, { label: 'Licenses', href: '#' }, { label: 'Settings', href: '#' }, { label: 'Contact', href: '#' }] }
]

const socialLinks = [
  { name: 'X', href: 'https://x.com/', icon: 'i-simple-icons-x' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'i-simple-icons-linkedin' },
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: 'i-simple-icons-facebook' },
  { name: 'GitHub', href: 'https://github.com/', icon: 'i-simple-icons-github' },
  { name: 'AngelList', href: 'https://angel.co/', icon: 'i-simple-icons-angellist' },
  { name: 'Dribbble', href: 'https://dribbble.com/', icon: 'i-simple-icons-dribbble' }
]
</script>