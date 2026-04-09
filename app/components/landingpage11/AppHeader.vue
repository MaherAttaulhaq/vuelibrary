<template>
  <header class="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-[1560px] mx-auto px-4 md:px-8 h-16 md:h-18 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-5">
        <div class="flex items-center gap-2">
          <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 shadow-md">
            <span class="text-white font-bold text-sm">U</span>
          </div>
          <span class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Untitled UI</span>
        </div>
        
        <!-- Desktop Navigation - PRODUCTS, SERVICES, PRICING, RESOURCES, ABOUT -->
        <nav class="hidden md:flex items-center gap-1">
          <UButton 
            v-for="item in navItems" 
            :key="item.label"
            :variant="item.hasDropdown ? 'ghost' : 'ghost'"
            color="neutral"
            class="text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :label="item.label"
            :icon="item.hasDropdown ? 'i-heroicons-chevron-down-20-solid' : undefined"
            :icon-trailing="item.hasDropdown"
          />
        </nav>
      </div>
      
      <!-- Actions -->
      <div class="flex items-center gap-3">
        <UButton 
          variant="ghost" 
          color="neutral"
          label="Log in"
          class="hidden md:inline-flex"
        />
        <UButton 
          color="primary"
          label="Sign up"
          class="hidden md:inline-flex"
        />
        
        <!-- Mobile menu button -->
        <UButton
          variant="ghost"
          color="neutral"
          :icon="isMobileMenuOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'"
          class="md:hidden"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        />
      </div>
    </div>
    
    <!-- Mobile menu slideover -->
    <!-- <USlideover v-model:open="isMobileMenuOpen" side="right">
      <div class="p-4 flex flex-col h-full">
        <div class="flex justify-end">
          <UButton variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isMobileMenuOpen = false" />
        </div>
        <div class="flex-1 mt-4">
          <div class="space-y-1">
            <UButton
              v-for="item in navItems"
              :key="item.label"
              variant="ghost"
              color="neutral"
              :label="item.label"
              block
              class="justify-start text-base font-medium"
              @click="isMobileMenuOpen = false"
            />
          </div>
        </div>
        <div class="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4 space-y-3">
          <UButton block variant="ghost" label="Log in" />
          <UButton block color="primary" label="Sign up" />
        </div>
      </div>
    </USlideover> -->
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: 'Products', hasDropdown: true },
  { label: 'Services', hasDropdown: true },
  { label: 'Pricing', hasDropdown: false },
  { label: 'Resources', hasDropdown: true },
  { label: 'About', hasDropdown: false }
]
</script>