<template>
  <div class="bg-muted">
    <Landing09HeaderHero />
    <Landing09TrustedBy />

    <!-- Divider -->
    <div class="mx-auto max-w-container px-4 md:px-8">
      <UDivider />
    </div>

    <Landing09CaseStudies />
    <Landing09Features />
    <Landing09MediaLogos />
    <Landing09BlogPosts />
    <Landing09CTA />
    <Landing09Newsletter />
    <Landing09Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Landing page 10 | Untitled UI',
  description: 'Preview of the Landing page 10 component'
})
</script>

<style>
/* Add any custom styles here if needed */
.max-w-container {
  max-width: 1560px;
}

.bg-primary {
  background-color: #ffffff;
}

.bg-primary_alt {
  background-color: #f9fafb;
}

.bg-secondary {
  background-color: #f9fafb;
}

.bg-secondary_alt {
  background-color: #f9fafb;
}

.text-primary {
  color: #101828;
}

.text-secondary {
  color: #475467;
}

.text-tertiary {
  color: #667085;
}

.text-quaternary {
  color: #98a2b3;
}

.brand-primary {
  color: #6941c6;
}
</style>
