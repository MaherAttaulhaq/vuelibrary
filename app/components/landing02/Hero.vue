<template>
  <section class="relative overflow-hidden pb-16 md:pt-8 md:pb-24">
    <UContainer class="container-custom">
      <UCard class="w-full bg-muted rounded-3xl px-6 py-16 md:py-24 text-center border-0">
        <h1 class="max-w-3xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold text-highlighted">
          Grow your users.
          <span class="text-primary">Smarter.</span>
        </h1>
        <p class="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-toned">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div class="mt-10 flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto">
          <UInput type="email" placeholder="Enter your email" class="flex-1" />
          <UButton color="primary" size="lg">
            Get started
          </UButton>
        </div>
        <p class="text-xs text-muted mt-4">
          We care about your data in our <a href="#" class="underline text-primary">privacy policy</a>.
        </p>
      </UCard>

      <!-- Chart Mockup -->
      <div class="relative mx-auto -mt-10 md:-mt-24 max-w-5xl px-4">
        <UCard class="rounded-2xl shadow-2xl ring-1 ring-default p-6 md:p-8">
          <div class="text-sm font-semibold text-highlighted">Users over time</div>
          <div class="relative h-64 mt-4 flex items-end justify-between gap-2">
            <div class="w-full h-48 bg-gradient-to-t from-secondary/20 to-primary/10 rounded-t-2xl relative">
              <svg class="w-full h-full" viewBox="0 0 736 160" preserveAspectRatio="none">
                <polyline points="0,140 80,110 160,120 240,80 320,90 400,40 480,60 560,30 640,50 736,20" class="text-primary" stroke="currentColor" stroke-width="3" fill="none"/>
                <polyline points="0,150 80,130 160,140 240,100 320,110 400,70 480,90 560,50 640,70 736,40" class="text-secondary" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
              </svg>
            </div>
          </div>
          <div class="flex justify-between text-xs text-muted mt-4 px-2">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </UCard>

        <!-- Floating circular mini chart -->
        <div class="absolute -right-8 -bottom-8 md:right-[-40px] md:bottom-0">
          <UCard class="rounded-full shadow-lg p-4 w-36 h-36 flex items-center justify-center ring-1 ring-default">
            <div class="text-center">
              <p class="text-xs text-muted">Active users</p>
              <p class="text-2xl font-bold">1,000</p>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.container-custom {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .container-custom {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>