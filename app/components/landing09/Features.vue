<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto w-full max-w-container px-4 md:px-8">
      
      <!-- Header -->
      <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <UBadge color="primary" variant="subtle" class="rounded-full">
          Features
        </UBadge>

        <h2 class="mt-4 text-display-sm font-semibold text-primary md:text-display-md">
          All-in-one finance for any business
        </h2>

        <p class="mt-4 text-lg md:mt-5 md:text-xl">
          Get a deposit account, credit card, and spend management software—in one refreshingly easy solution.
        </p>
      </div>
    </div>

    <!-- Feature Cards -->
    <div class="mx-auto mt-12 w-full max-w-container px-4 md:mt-20 md:px-8">
      <ul class="flex flex-1 flex-wrap justify-center gap-y-10 lg:flex-nowrap lg:gap-8">

        <!-- Card 1 -->
        <li>
          <div class="group relative flex max-w-[405px] cursor-pointer flex-col items-center gap-4 border-t-4 border-primary pt-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary">
            
            <div class="rounded-2xl bg-primary/10 p-4 transition group-hover:bg-primary/15">
              <Icon name="lucide:inbox" class="size-6 text-primary" />
            </div>

            <div>
              <h3 class="text-lg font-semibold text-primary">
                Share team inboxes
              </h3>
              <p class="mt-2">
                Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page.
              </p>
            </div>
          </div>
        </li>

        <!-- Card 2 -->
        <li>
          <div class="group relative flex max-w-[405px] cursor-pointer flex-col items-center gap-4 border-t-4 border-border pt-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary">

            <div class="rounded-2xl bg-primary/10 p-4 transition group-hover:bg-primary/15">
              <Icon name="lucide:message-circle" class="size-6 text-primary" />
            </div>

            <div>
              <h3 class="text-lg font-semibold text-primary">
                Deliver instant answers
              </h3>
              <p class="mt-2">
                An all-in-one customer service platform that helps you balance everything your customers need.
              </p>
            </div>
          </div>
        </li>

        <!-- Card 3 -->
        <li>
          <div class="group relative flex max-w-[405px] cursor-pointer flex-col items-center gap-4 border-t-4 border-border pt-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary">

            <div class="rounded-2xl bg-primary/10 p-4 transition group-hover:bg-primary/15">
              <Icon name="lucide:bar-chart-3" class="size-6 text-primary" />
            </div>

            <div>
              <h3 class="text-lg font-semibold text-primary">
                Manage your team with reports
              </h3>
              <p class="mt-2">
                Measure what matters with easy-to-use reports. Filter, export, and drilldown in a couple clicks.
              </p>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </section>
</template>