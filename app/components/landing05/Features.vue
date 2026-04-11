<template>
  <section class="overflow-hidden bg-muted py-16 lg:py-24">
    <div class="mx-auto w-full max-w-[1560px] px-4 md:px-8">
      <div class="flex w-full flex-col lg:max-w-3xl">
        <UBadge
          label="Features"
          color="primary"
          variant="subtle"
          class="w-fit"
        />
        <h2 class="mt-3 text-3xl font-semibold text-primary md:text-4xl">
          The only card you'll ever need. Simple.
        </h2>
        <p class="mt-4 text-lg text-secondary md:mt-5 md:text-xl">
          Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
        <ul class="flex flex-col">
          <li class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-primary py-4 pl-5 transition duration-100 ease-linear">
            <div>
              <h3 class="text-lg font-semibold text-primary">
                Share team inboxes
              </h3>
              <p class="mt-1 text-md text-secondary">
                Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
              </p>
            </div>
            <ULink
              to="#"
              class="text-primary hover:text-primary-dark"
            >Learn more <UIcon
              name="i-heroicons-arrow-right"
              class="ml-1"
            /></ULink>
          </li>
          <li class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-muted-dark py-4 pl-5 transition duration-100 ease-linear hover:border-primary">
            <div>
              <h3 class="text-lg font-semibold text-primary">
                Deliver instant answers
              </h3>
              <p class="mt-1 text-md text-secondary">
                An all-in-one customer service platform that helps you balance everything your customers need to be happy.
              </p>
            </div>
            <ULink
              to="#"
              class="text-primary hover:text-primary-dark"
            >Learn more <UIcon
              name="i-heroicons-arrow-right"
              class="ml-1"
            /></ULink>
          </li>
          <li class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-muted-dark py-4 pl-5 transition duration-100 ease-linear hover:border-primary">
            <div>
              <h3 class="text-lg font-semibold text-primary">
                Manage your team with reports
              </h3>
              <p class="mt-1 text-md text-secondary">
                Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
              </p>
            </div>
            <ULink
              to="#"
              class="text-primary hover:text-primary-dark"
            >Learn more <UIcon
              name="i-heroicons-arrow-right"
              class="ml-1"
            /></ULink>
          </li>
        </ul>

        <div class="relative -mx-4 flex h-80 items-center justify-center bg-muted-alt md:mr-0 md:h-120 lg:h-160">
          <div class="-space-y-[106px] md:-space-y-16 lg:-space-y-8">
            <div
              class="relative z-1"
              style="transform: scale(0.84) rotate(60deg) translate(38px, -53px)"
            >
              <CreditCard
                name="OLIVIA RHYE"
                variant="glass"
              />
            </div>
            <div
              class="relative z-0"
              style="transform: scale(0.84) rotate(30deg) translate(-23px, 24px)"
            >
              <CreditCard
                name="Phoenix Baker"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// No script needed for this component
</script>