<template>
  <footer class="bg-bg-secondary py-12 md:pt-16">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
        <div class="flex flex-col gap-8 md:items-start">
          <Logo />
        </div>

        <nav>
          <ul class="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
            <li>
              <UButton
                to="#"
                variant="link"
                label="Overview"
                class="text-text-tertiary hover:text-text-tertiary_hover"
              />
            </li>
            <li>
              <UButton
                to="#"
                variant="link"
                label="Features"
                class="text-text-tertiary hover:text-text-tertiary_hover"
              />
            </li>
            <li>
              <UButton
                to="#"
                variant="link"
                label="Pricing"
                class="text-text-tertiary hover:text-text-tertiary_hover"
              />
            </li>
            <li>
              <UButton
                to="#"
                variant="link"
                label="Careers"
                class="text-text-tertiary hover:text-text-tertiary_hover"
              />
            </li>
            <li>
              <UButton
                to="#"
                variant="link"
                label="Help"
                class="text-text-tertiary hover:text-text-tertiary_hover"
              />
            </li>
            <li>
              <UButton
                to="#"
                variant="link"
                label="Privacy"
                class="text-text-tertiary hover:text-text-tertiary_hover"
              />
            </li>
          </ul>
        </nav>
      </div>

      <div class="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
        <p class="text-sm text-text-quaternary">
          © 2077 Untitled UI. All rights reserved.
        </p>
        <ul class="flex gap-4">
          <li>
            <UButton
              to="#"
              variant="link"
              label="Terms"
              class="text-text-quaternary hover:text-text-tertiary"
            />
          </li>
          <li>
            <UButton
              to="#"
              variant="link"
              label="Privacy"
              class="text-text-quaternary hover:text-text-tertiary"
            />
          </li>
          <li>
            <UButton
              to="#"
              variant="link"
              label="Cookies"
              class="text-text-quaternary hover:text-text-tertiary"
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No additional script needed - footer content is inline in template
</script>