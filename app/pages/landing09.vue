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
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Container width */
.max-w-container {
  max-width: 1560px;
}
</style>
