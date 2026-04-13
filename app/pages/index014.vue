<script setup lang="ts">
const mobileMenuOpen = ref(false);
const email = ref("");
const newsletterEmail = ref("");
const isLoading = ref(false);

const navigationItems = [
  {
    label: "Products",
    type: "dropdown",
    items: [
      { label: "Overview", to: "/products" },
      { label: "Features", to: "/products/features" },
      { label: "Integrations", to: "/products/integrations" },
    ],
  },
  {
    label: "Services",
    type: "dropdown",
    items: [
      { label: "Consulting", to: "/services/consulting" },
      { label: "Support", to: "/services/support" },
      { label: "Training", to: "/services/training" },
    ],
  },
  { label: "Pricing", type: "link", to: "/pricing" },
  {
    label: "Resources",
    type: "dropdown",
    items: [
      { label: "Blog", to: "/resources/blog" },
      { label: "Documentation", to: "/resources/docs" },
      { label: "Help Center", to: "/resources/help" },
    ],
  },
  { label: "About", type: "link", to: "/about" },
];

const trustedCompanies = [
  {
    name: "Catalog",
    color: "https://www.untitledui.com/logos/logotype/color/catalog.svg",
    white: "https://www.untitledui.com/logos/logotype/white/catalog.svg",
  },
  {
    name: "Pictelai",
    color: "https://www.untitledui.com/logos/logotype/color/pictel-ai.svg",
    white: "https://www.untitledui.com/logos/logotype/white/pictel-ai.svg",
  },
  {
    name: "Leapyear",
    color: "https://www.untitledui.com/logos/logotype/color/leapyear.svg",
    white: "https://www.untitledui.com/logos/logotype/white/leapyear.svg",
  },
  {
    name: "Peregrin",
    color: "https://www.untitledui.com/logos/logotype/color/peregrin.svg",
    white: "https://www.untitledui.com/logos/logotype/white/peregrin.svg",
  },
  {
    name: "Easytax",
    color: "https://www.untitledui.com/logos/logotype/color/easy-tax.svg",
    white: "https://www.untitledui.com/logos/logotype/white/easy-tax.svg",
  },
  {
    name: "Coreos",
    color: "https://www.untitledui.com/logos/logotype/color/core-os.svg",
    white: "https://www.untitledui.com/logos/logotype/white/core-os.svg",
  },
];

const features = [
  {
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
];

const stats = [
  { label: "Projects completed", value: "400+" },
  { label: "Return on investment", value: "600%" },
  { label: "Global downloads", value: "10k" },
];

const pricingPlans = [
  {
    name: "Basic plan",
    price: "$10/mth",
    popular: false,
    features: [
      "Access to all basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20 GB individual data",
      "Basic chat and email support",
    ],
  },
  {
    name: "Business plan",
    price: "$20/mth",
    popular: true,
    features: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40 GB individual data",
      "Priority chat and email support",
    ],
  },
  {
    name: "Enterprise plan",
    price: "$40/mth",
    popular: false,
    features: [
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalized + priority service",
    ],
  },
];

async function onSubmitNewsletter() {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Subscribed:", newsletterEmail.value);
  newsletterEmail.value = "";
  isLoading.value = false;
}
</script>

<template>
  <div class="bg-muted">
    <!-- Header -->
    <header
      class="relative flex h-16 w-full items-center justify-center md:h-18"
    >
      <div
        class="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8"
      >
        <div class="flex w-full justify-between gap-4">
          <div class="flex flex-1 items-center gap-5">
            <!-- Logo Desktop -->
            <NuxtLink
              to="/"
              class="flex w-max items-center justify-start overflow-visible h-7 md:max-lg:hidden"
            >
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
            </NuxtLink>

            <!-- Logo Mobile -->
            <NuxtLink to="/" class="md:hidden">
              <svg viewBox="0 0 38 38" fill="none" class="size-8">
                <!-- Mobile logo SVG -->
              </svg>
            </NuxtLink>

            <!-- Desktop Navigation -->
            <nav class="max-md:hidden">
              <ul class="flex items-center gap-0.5">
                <li v-for="item in navigationItems" :key="item.label">
                  <UDropdownMenu
                    v-if="item.type === 'dropdown'"
                    :items="item.items"
                  >
                    <UButton
                      variant="link"
                      color="muted"
                      class="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold hover:text-muted-700 dark:hover:text-muted-300"
                    >
                      {{ item.label }}
                      <Icon name="lucide:chevron-down" class="size-4" />
                    </UButton>
                  </UDropdownMenu>
                  <ULink
                    v-else
                    :to="item.to"
                    class="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold text-muted-600 hover:text-muted-900 dark:text-muted-400 dark:hover:text-muted-100"
                  >
                    {{ item.label }}
                  </ULink>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Auth Buttons -->
          <div class="hidden items-center gap-3 md:flex">
            <UButton variant="ghost" color="muted" size="md">Log in</UButton>
            <UButton variant="solid" color="primary" size="md">Sign up</UButton>
          </div>

          <!-- Mobile Menu Button -->
          <UButton
            variant="ghost"
            color="muted"
            class="ml-auto cursor-pointer rounded-lg p-2 md:hidden"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Icon v-if="!mobileMenuOpen" name="lucide:menu" class="size-6" />
            <Icon v-else name="lucide:x" class="size-6" />
          </UButton>
        </div>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-50 bg-muted/95 backdrop-blur-sm md:hidden"
    >
      <div class="flex flex-col p-6 gap-6">
        <div class="flex justify-end">
          <UButton
            variant="ghost"
            color="muted"
            @click="mobileMenuOpen = false"
          >
            <Icon name="lucide:x" class="size-6" />
          </UButton>
        </div>
        <nav class="flex flex-col gap-4">
          <div v-for="item in navigationItems" :key="item.label">
            <UDropdownMenu
              v-if="item.type === 'dropdown'"
              :items="item.items"
              :ui="{ content: 'static w-full' }"
            >
              <UButton
                variant="link"
                color="muted"
                class="w-full justify-between text-lg font-semibold"
              >
                {{ item.label }}
                <Icon name="lucide:chevron-down" class="size-4" />
              </UButton>
            </UDropdownMenu>
            <ULink
              v-else
              :to="item.to"
              class="py-2 text-lg font-semibold text-muted-600 dark:text-muted-400"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </ULink>
          </div>
          <div
            class="mt-4 flex flex-col gap-3 pt-4 border-t border-muted-200 dark:border-muted-800"
          >
            <UButton variant="ghost" color="muted" block class="justify-center"
              >Log in</UButton
            >
            <UButton
              variant="solid"
              color="primary"
              block
              class="justify-center"
              >Sign up</UButton
            >
          </div>
        </nav>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="overflow-hidden bg-muted py-16 md:pb-24">
      <div
        class="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2 lg:gap-8"
      >
        <div class="flex max-w-3xl flex-col items-start lg:pr-8">
          <h1
            class="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl"
          >
            People who care about your growth
          </h1>
          <p
            class="mt-4 max-w-lg text-lg text-balance text-muted-600 dark:text-muted-400 md:mt-6 md:text-xl"
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more.
          </p>
          <div
            class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12"
          >
            <UButton variant="outline" color="muted" size="lg">
              <Icon name="lucide:play" class="size-5" />
              Demo
            </UButton>
            <UButton variant="solid" color="primary" size="lg">Sign up</UButton>
          </div>
        </div>
        <div class="relative lg:h-full lg:min-h-160">
          <div
            class="absolute bottom-9 -left-18 z-10 hidden w-92 flex-col gap-3 select-none lg:flex"
          >
            <div
              class="relative rounded-xl bg-white/90 p-4 ring ring-muted-200 backdrop-blur-lg dark:bg-black/50 dark:ring-muted-800"
            >
              <div class="relative flex grow items-start justify-start gap-3">
                <div
                  class="size-10 rounded bg-brand-600 flex items-center justify-center"
                >
                  <Icon name="lucide:music" class="size-5 text-white" />
                </div>
                <div
                  class="flex flex-1 flex-col items-start justify-start gap-1"
                >
                  <div class="pr-8">
                    <p
                      class="text-sm font-medium text-muted-700 dark:text-muted-300"
                    >
                      My Podcast – Episode 1.mp3
                    </p>
                    <div class="mt-0.5 flex items-center gap-2">
                      <p class="text-sm text-muted-500 dark:text-muted-400">
                        20 MB of 20 MB
                      </p>
                      <hr
                        class="h-3 w-px rounded-t-full rounded-b-full border-none bg-muted-200 dark:bg-muted-800"
                      />
                      <div class="flex items-center gap-1">
                        <Icon
                          name="lucide:check-circle"
                          class="size-4 text-success-500"
                        />
                        <p
                          class="text-sm font-medium text-success-600 dark:text-success-400"
                        >
                          Complete
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-start gap-3 self-stretch"
                  >
                    <div
                      class="relative h-2 flex-1 rounded bg-muted-200 dark:bg-muted-800"
                    >
                      <div class="h-full w-full rounded bg-brand-500"></div>
                    </div>
                    <p
                      class="text-sm font-medium text-muted-700 dark:text-muted-300"
                    >
                      100%
                    </p>
                  </div>
                </div>
                <Icon
                  name="lucide:x"
                  class="absolute -top-0.5 -right-0.5 size-4 text-muted-400"
                />
              </div>
            </div>
            <div
              class="relative rounded-xl bg-white/90 p-4 ring ring-muted-200 backdrop-blur-lg dark:bg-black/50 dark:ring-muted-800"
            >
              <div class="relative flex grow items-start justify-start gap-3">
                <div
                  class="size-10 rounded bg-brand-600 flex items-center justify-center"
                >
                  <Icon name="lucide:music" class="size-5 text-white" />
                </div>
                <div
                  class="flex flex-1 flex-col items-start justify-start gap-1"
                >
                  <div class="pr-8">
                    <p
                      class="text-sm font-medium text-muted-700 dark:text-muted-300"
                    >
                      My Podcast – Episode 2.mp3
                    </p>
                    <div class="mt-0.5 flex items-center gap-2">
                      <p class="text-sm text-muted-500 dark:text-muted-400">
                        16 MB of 20 MB
                      </p>
                      <hr
                        class="h-3 w-px rounded-t-full rounded-b-full border-none bg-muted-200 dark:bg-muted-800"
                      />
                      <div class="flex items-center gap-1">
                        <Icon
                          name="lucide:cloud-upload"
                          class="size-4 text-muted-400"
                        />
                        <p
                          class="text-sm font-medium text-muted-500 dark:text-muted-400"
                        >
                          Uploading...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-start gap-3 self-stretch"
                  >
                    <div
                      class="relative h-2 flex-1 rounded bg-muted-200 dark:bg-muted-800"
                    >
                      <div class="h-full w-[80%] rounded bg-brand-500"></div>
                    </div>
                    <p
                      class="text-sm font-medium text-muted-700 dark:text-muted-300"
                    >
                      80%
                    </p>
                  </div>
                </div>
                <Icon
                  name="lucide:x"
                  class="absolute -top-0.5 -right-0.5 size-4 text-muted-400"
                />
              </div>
            </div>
          </div>
          <div class="absolute top-6 right-5 z-10 translate-x-1/2 md:-top-10">
            <svg
              viewBox="0 0 298 408"
              fill="none"
              class="hidden w-48.5 text-muted-400 opacity-30 md:block md:w-74.5"
            >
              <!-- Abstract shape lines SVG -->
            </svg>
          </div>
          <img
            class="inset-0 h-70 w-full rounded-tl-[64px] object-cover md:h-110 md:rounded-tl-[92px] lg:absolute lg:h-full lg:rounded-tl-[160px]"
            src="https://www.untitledui.com/marketing/man-and-laptop.webp"
            alt="Man and Laptop"
          />
        </div>
      </div>
    </section>

    <!-- Trusted By Section -->
    <section class="bg-muted pb-16 md:pb-24">
      <div class="mx-auto max-w-container md:px-8">
        <div
          class="flex flex-col gap-8 bg-muted-100 dark:bg-muted-900 px-6 py-12 md:rounded-2xl md:p-16"
        >
          <p
            class="text-center text-md font-medium text-muted-500 dark:text-muted-400 md:text-xl"
          >
            Trusted by 4,000+ companies
          </p>
          <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-8">
            <img
              v-for="company in trustedCompanies"
              :key="company.name"
              :alt="company.name"
              :src="company.color"
              class="h-9 md:h-10 dark:hidden"
            />
            <img
              v-for="company in trustedCompanies"
              :key="`${company.name}-dark`"
              :alt="company.name"
              :src="company.white"
              class="h-9 opacity-85 not-dark:hidden md:h-10"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="overflow-hidden bg-muted pb-16 md:pb-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="flex w-full flex-col lg:max-w-3xl">
          <span
            class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md"
            >Features</span
          >
          <h2
            class="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
          >
            Overflowing with useful features
          </h2>
          <p
            class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div
          class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center"
        >
          <ul class="flex flex-col">
            <li v-for="(feature, index) in features" :key="feature.title">
              <div
                class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 py-4 pl-5 transition duration-100 ease-linear hover:border-brand"
                :class="
                  index === 0
                    ? 'border-brand'
                    : 'border-muted-200 dark:border-muted-800'
                "
              >
                <div>
                  <h3 class="text-lg font-semibold text-primary">
                    {{ feature.title }}
                  </h3>
                  <p class="mt-1 text-md text-muted-600 dark:text-muted-400">
                    {{ feature.description }}
                  </p>
                </div>
                <ULink
                  to="#"
                  class="group inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-semibold"
                >
                  Learn more
                  <Icon name="lucide:arrow-right" class="size-5" />
                </ULink>
              </div>
            </li>
          </ul>

          <div
            class="relative -ml-4 flex h-90 w-screen items-start justify-center sm:w-auto lg:h-128"
          >
            <div
              class="absolute top-0 left-16 hidden w-max lg:block lg:h-168.5 lg:max-h-168.5"
            >
              <div
                class="size-full rounded-[9.03px] bg-muted p-[0.9px] shadow-lg ring-[0.56px] ring-muted-300 dark:ring-muted-700 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px]"
              >
                <div
                  class="size-full rounded-[7.9px] bg-muted p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg"
                >
                  <div
                    class="relative size-full overflow-hidden rounded-[6.77px] bg-muted-50 ring-[0.56px] ring-muted-200 dark:ring-muted-800 md:rounded-[20.21px] md:ring-[1.68px]"
                  >
                    <img
                      alt="Dashboard mockup showing application interface"
                      src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                      class="size-full object-cover object-left-top dark:hidden"
                    />
                    <img
                      alt="Dashboard mockup showing application interface"
                      src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                      class="size-full object-cover object-left-top not-dark:hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-max max-w-70 lg:absolute lg:top-26 lg:left-0">
              <div
                class="size-full rounded-[23.89px] bg-muted p-[3px] shadow-lg ring-[1.49px] ring-muted-300 dark:ring-muted-700 ring-inset"
              >
                <div
                  class="size-full rounded-[20.91px] bg-muted p-1 shadow-modern-mockup-inner-lg"
                >
                  <div
                    class="relative size-full overflow-hidden rounded-[17.92px] bg-muted-50 ring-[1.49px] ring-muted-200 dark:ring-muted-800"
                  >
                    <img
                      alt="Mobile app interface mockup"
                      src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                      class="size-full object-cover object-left-top dark:hidden"
                    />
                    <img
                      alt="Mobile app interface mockup"
                      src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                      class="size-full object-cover object-left-top not-dark:hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div
          class="flex flex-col gap-8 rounded-2xl bg-muted-100 dark:bg-muted-900 px-6 py-10 md:gap-16 md:rounded-none md:bg-transparent md:p-0"
        >
          <div
            class="flex w-full flex-col self-center text-center md:max-w-3xl"
          >
            <h2
              class="text-display-sm font-semibold text-primary md:text-display-md"
            >
              Unleash the full power of data
            </h2>
            <p
              class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
            >
              Everything you need to convert, engage, and retain more users.
            </p>
          </div>
          <dl
            class="flex flex-col gap-8 rounded-2xl bg-muted-100 dark:bg-muted-900 md:flex-row md:p-16"
          >
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex flex-1 flex-col-reverse gap-3 text-center"
            >
              <dt class="text-lg font-semibold text-primary">
                {{ stat.label }}
              </dt>
              <dd
                class="text-display-lg font-semibold text-brand-700 dark:text-brand-300 md:text-display-xl"
              >
                {{ stat.value }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Free Trial Banner -->
    <section class="bg-muted-100 dark:bg-muted-900 py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col justify-between lg:flex-row">
          <div class="max-w-3xl">
            <h2
              class="text-display-sm font-semibold text-primary md:text-display-md"
            >
              Start your free trial
            </h2>
            <p
              class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
            >
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
          <div
            class="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start lg:mt-0"
          >
            <UButton variant="outline" color="muted">Learn more</UButton>
            <UButton variant="solid" color="primary">Get started</UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex w-full max-w-3xl flex-col">
          <span
            class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md"
            >Pricing</span
          >
          <h2
            class="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
          >
            Simple, transparent pricing
          </h2>
          <p
            class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
          >
            We believe Untitled should be accessible to all companies, no matter
            the size.
          </p>
        </div>

        <div
          class="mt-12 grid w-full grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-8 xl:grid-cols-3"
        >
          <div
            v-for="plan in pricingPlans"
            :key="plan.name"
            class="relative flex flex-col rounded-2xl bg-muted shadow-lg ring-1 ring-muted-200 dark:ring-muted-800"
          >
            <div
              v-if="plan.popular"
              class="absolute -top-6 right-2 md:-right-16"
            >
              <div class="flex text-brand-600 dark:text-brand-400">
                <svg width="60" height="46" viewBox="0 0 60 46" fill="none">
                  <path
                    d="M9.22056 42.4485C9.06321 43.2619 9.595 44.0488 10.4084 44.2061C11.2217 44.3635 12.0086 43.8317 12.166 43.0184L9.22056 42.4485ZM50.5841 3.7912C51.405 3.68023 51.9806 2.92474 51.8696 2.10378C51.7586 1.28282 51.0032 0.707267 50.1822 0.818242L50.5841 3.7912ZM4.78725 32.3308C4.36038 31.6208 3.43878 31.3913 2.7288 31.8182C2.01882 32.2451 1.78931 33.1667 2.21618 33.8766L4.78725 32.3308ZM8.9767 42.2098L7.69117 42.9828L7.69189 42.984L8.9767 42.2098ZM12.5932 43.2606L11.9803 41.8916L11.979 41.8921L12.5932 43.2606ZM23.5123 40.0155C24.2684 39.677 24.6069 38.7897 24.2684 38.0336C23.9299 37.2774 23.0425 36.9389 22.2864 37.2774L23.5123 40.0155ZM10.6933 42.7334C12.166 43.0184 12.1659 43.0187 12.1658 43.019C12.1658 43.0189 12.1658 43.0192 12.1658 43.0192C12.1658 43.0192 12.1658 43.0189 12.166 43.0184C12.1662 43.0173 12.1666 43.0152 12.1672 43.012C12.1684 43.0058 12.1705 42.9953 12.1735 42.9808C12.1794 42.9517 12.1887 42.9064 12.2016 42.8456C12.2274 42.7239 12.2676 42.5403 12.3233 42.3008C12.4349 41.8216 12.6088 41.1193 12.8551 40.2421C13.3481 38.4863 14.1291 36.0371 15.2773 33.2782C17.5833 27.7375 21.3236 21.0615 27.0838 16.2002L25.1489 13.9076C18.8763 19.2013 14.905 26.3651 12.5076 32.1255C11.3042 35.0171 10.4856 37.5837 9.96684 39.4311C9.7073 40.3554 9.52235 41.1015 9.40152 41.6204C9.34109 41.8799 9.29667 42.0827 9.26695 42.2227C9.25209 42.2927 9.24091 42.3471 9.23323 42.385C9.22939 42.4039 9.22643 42.4187 9.22432 42.4294C9.22327 42.4347 9.22243 42.4389 9.22181 42.4421C9.22149 42.4437 9.22123 42.4451 9.22103 42.4461C9.22092 42.4467 9.22081 42.4473 9.22075 42.4475C9.22065 42.4481 9.22056 42.4485 10.6933 42.7334ZM27.0838 16.2002C38.8964 6.23107 48.2848 4.10201 50.5841 3.7912L50.1822 0.818242C47.3237 1.20465 37.402 3.56662 25.1489 13.9076L27.0838 16.2002ZM2.21618 33.8766L7.69117 42.9828L10.2622 41.4369L4.78725 32.3308L2.21618 33.8766ZM7.69189 42.984C8.83415 44.8798 11.2204 45.5209 13.2074 44.6291L11.979 41.8921C11.2779 42.2068 10.5661 41.9412 10.2615 41.4357L7.69189 42.984ZM13.2061 44.6297L23.5123 40.0155L22.2864 37.2774L11.9803 41.8916L13.2061 44.6297Z"
                    fill="currentColor"
                  />
                </svg>
                <span class="-mt-2 text-sm font-semibold">Most popular!</span>
              </div>
            </div>
            <div
              class="flex flex-col items-center px-6 pt-10 text-center md:px-8"
            >
              <h2
                class="text-display-md font-semibold text-primary md:text-display-lg"
              >
                {{ plan.price }}
              </h2>
              <p class="mt-4 text-xl font-semibold text-primary md:text-xl">
                {{ plan.name }}
              </p>
              <p class="mt-1 text-md text-muted-500 dark:text-muted-400">
                Billed annually.
              </p>
            </div>
            <ul class="flex flex-col gap-4 px-6 pt-8 pb-8 md:p-8 md:pb-10">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex gap-3"
              >
                <div
                  class="flex shrink-0 items-center justify-center rounded-full bg-success-100 dark:bg-success-950 text-success-600 dark:text-success-400 size-6"
                >
                  <Icon name="lucide:check" class="size-4" />
                </div>
                <span class="text-muted-600 dark:text-muted-400 text-md">{{
                  feature
                }}</span>
              </li>
            </ul>
            <div class="mt-auto flex flex-col gap-3 px-6 pb-8 md:px-8">
              <UButton variant="solid" color="primary" block
                >Get started</UButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div
          class="grid grid-cols-1 items-center overflow-hidden rounded-2xl bg-muted-100 dark:bg-muted-900 md:rounded-3xl lg:grid-cols-[auto_auto]"
        >
          <div
            class="flex flex-1 flex-col gap-8 px-6 py-10 md:gap-8 md:px-8 md:py-12 lg:p-16"
          >
            <figure class="flex flex-col gap-8">
              <div class="flex flex-col gap-4 md:gap-6">
                <div aria-hidden="true" class="flex gap-1">
                  <Icon
                    v-for="i in 5"
                    :key="i"
                    name="lucide:star"
                    class="size-5 text-yellow-400 fill-yellow-400"
                  />
                </div>
                <blockquote
                  class="origin-bottom-left text-display-xs font-medium text-balance text-primary will-change-transform sm:text-display-sm md:text-display-md"
                >
                  Love the simplicity of the service and the prompt customer
                  support. We can't imagine working without it.
                </blockquote>
              </div>
              <figcaption
                class="flex origin-bottom-left flex-col gap-1 will-change-transform"
              >
                <p class="text-lg font-semibold text-primary">— Renee Wells</p>
                <cite
                  class="text-md text-muted-500 dark:text-muted-400 not-italic"
                  >Product Designer, Quotient</cite
                >
              </figcaption>
            </figure>
          </div>
          <div
            class="relative flex h-70 w-full items-center justify-center overflow-hidden sm:h-full sm:min-h-90 lg:min-h-112 lg:w-120"
          >
            <img
              alt="Annie Stanley"
              src="https://www.untitledui.com/images/portraits/annie-stanley"
              class="absolute inset-0 size-full object-cover"
            />
            <span class="absolute flex size-full items-center justify-center">
              <div
                class="flex items-center justify-center rounded-full bg-white/30 backdrop-blur transition duration-100 ease-linear hover:bg-white/40 size-16"
              >
                <Icon name="lucide:play" class="size-5 text-white" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="bg-muted py-16 lg:py-24">
      <div
        class="mx-auto grid max-w-container grid-cols-1 gap-16 overflow-hidden px-4 md:px-8 lg:grid-cols-2 lg:items-center"
      >
        <div class="flex max-w-3xl flex-col items-start">
          <h2
            class="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg"
          >
            No long-term contracts. No catches.
          </h2>
          <p
            class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-6 md:text-xl"
          >
            Start your 30-day free trial today.
          </p>
          <div
            class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12"
          >
            <UButton variant="outline" color="muted">Learn more</UButton>
            <UButton variant="solid" color="primary">Get started</UButton>
          </div>
        </div>
        <div
          class="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 justify-self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4"
        >
          <img
            src="https://www.untitledui.com/marketing/abstract-image-01.webp"
            class="size-full object-cover"
            alt="Abstract"
            style="grid-area: 3 / 3 / 7 / 7"
          />
          <img
            src="https://www.untitledui.com/marketing/abstract-image-02.webp"
            class="size-full object-cover"
            alt="Abstract"
            style="grid-area: 1 / 7 / 7 / 11"
          />
          <img
            src="https://www.untitledui.com/marketing/abstract-image-03.webp"
            class="size-full object-cover"
            alt="Abstract"
            style="grid-area: 7 / 5 / 13 / 9"
          />
          <img
            src="https://www.untitledui.com/marketing/abstract-image-04.webp"
            class="size-full object-cover"
            alt="Abstract"
            style="grid-area: 7 / 9 / 10 / 13"
          />
          <img
            src="https://www.untitledui.com/marketing/smiling-girl-2.webp"
            class="size-full object-cover"
            alt="Smiling girl"
            style="grid-area: 7 / 1 / 10 / 5"
          />
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <footer class="bg-muted">
      <div class="bg-muted-100 dark:bg-muted-900 py-10 md:py-12">
        <div class="mx-auto max-w-container px-4 md:px-8">
          <div
            class="flex flex-col items-start justify-between gap-8 md:flex-row"
          >
            <div class="flex flex-col gap-2 md:gap-4">
              <p
                id="newsletter-label"
                class="text-display-xs font-semibold text-primary md:text-display-sm"
              >
                Get notified when we launch
              </p>
              <p
                id="newsletter-hint"
                class="text-md text-muted-600 dark:text-muted-400 md:text-xl"
              >
                Stay up to date with the latest news, announcements, and
                articles.
              </p>
            </div>
            <form class="w-full sm:w-100" @submit.prevent="onSubmitNewsletter">
              <div class="flex flex-col gap-4 sm:flex-row">
                <UInput
                  v-model="newsletterEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                  size="lg"
                  class="flex-1"
                />
                <UButton
                  type="submit"
                  variant="solid"
                  color="primary"
                  size="lg"
                  :loading="isLoading"
                >
                  Subscribe
                </UButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-container px-4 py-12 md:px-8 md:pt-16">
        <div class="flex flex-col gap-12 md:gap-16 xl:flex-row">
          <div class="flex flex-col gap-6 md:w-80 md:gap-8">
            <div
              class="flex items-center justify-start overflow-visible h-7 w-min shrink-0"
            >
              <svg
                viewBox="0 0 38 38"
                fill="none"
                class="size-8 origin-center scale-[1.2] aspect-square h-full w-auto shrink-0"
              >
                <!-- Footer logo SVG -->
              </svg>
              <div class="aspect-[0.3] h-full"></div>
              <svg
                viewBox="0 0 97 32"
                fill="none"
                class="aspect-[3] h-full shrink-0"
              >
                <!-- Footer text logo SVG -->
              </svg>
            </div>
            <p class="text-md text-muted-600 dark:text-muted-400">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          <nav class="flex-1">
            <ul class="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
              <li>
                <h4 class="text-sm font-semibold text-muted-400">Product</h4>
                <ul class="mt-4 flex flex-col gap-3">
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Overview</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Features</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Solutions
                      <UBadge size="xs" class="ml-1">New</UBadge></ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Tutorials</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Pricing</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Releases</ULink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h4 class="text-sm font-semibold text-muted-400">Company</h4>
                <ul class="mt-4 flex flex-col gap-3">
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >About us</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Careers</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Press</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >News</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Media kit</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Contact</ULink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h4 class="text-sm font-semibold text-muted-400">Resources</h4>
                <ul class="mt-4 flex flex-col gap-3">
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Blog</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Newsletter</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Events</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Help centre</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Tutorials</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Support</ULink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h4 class="text-sm font-semibold text-muted-400">Social</h4>
                <ul class="mt-4 flex flex-col gap-3">
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >X</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >LinkedIn</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Facebook</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >GitHub</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >AngelList</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Dribbble</ULink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h4 class="text-sm font-semibold text-muted-400">Legal</h4>
                <ul class="mt-4 flex flex-col gap-3">
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Terms</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Privacy</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Cookies</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Licenses</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Settings</ULink
                    >
                  </li>
                  <li>
                    <ULink
                      to="#"
                      class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                      >Contact</ULink
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div
          class="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-muted-200 dark:border-muted-800 pt-8 md:mt-16 md:flex-row"
        >
          <p class="text-sm text-muted-400 dark:text-muted-500">
            © 2077 Untitled UI. All rights reserved.
          </p>
          <ul class="flex gap-6">
            <li>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"
                ><Icon name="lucide:twitter" class="size-5"
              /></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"
                ><Icon name="lucide:linkedin" class="size-5"
              /></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"
                ><Icon name="lucide:facebook" class="size-5"
              /></a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"
                ><Icon name="lucide:github" class="size-5"
              /></a>
            </li>
            <li>
              <a
                href="https://angel.co/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"
                ><Icon name="lucide:briefcase" class="size-5"
              /></a>
            </li>
            <li>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"
                ><Icon name="lucide:dribbble" class="size-5"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Filter definitions for logos */
.filter0_logo {
  /* Filter styles from original */
}
</style>
