# Landing14 Design

**Goal:** Convert `app/pages/index014.vue` into a standard Nuxt UI landing page split across `app/components/landing14`.

**Approved structure:**
- `AppHeader.vue`
- `HeroSection.vue`
- `TrustedBy.vue`
- `StudioSection.vue`
- `TestimonialSection.vue`
- `StatsSection.vue`
- `ContactSection.vue`
- `NewsletterSection.vue`
- `AppFooter.vue`
- `useMobileMenu.ts`
- `app/pages/landing14.vue`

**Notes:**
- Preserve the existing section order and overall visual structure.
- Use Nuxt UI primitives consistently for buttons, badges, inputs, avatar, and dropdowns.
- Keep mobile navigation behavior in a small composable.
- Apply small cleanup only where the source page has placeholder or malformed content.
