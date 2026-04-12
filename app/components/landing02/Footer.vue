<template>
  <footer class="bg-muted border-t border-border py-12">
    <UContainer>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 class="font-semibold mb-4 text-primary">Product</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#">Overview</a></li><li><a href="#">Features</a></li><li><a href="#">Solutions</a></li><li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4 text-primary">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#">About us</a></li><li><a href="#">Careers</a></li><li><a href="#">Press</a></li><li><a href="#">News</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4 text-primary">Resources</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#">Blog</a></li><li><a href="#">Newsletter</a></li><li><a href="#">Events</a></li><li><a href="#">Help centre</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4 text-primary">Social</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#">X (Twitter)</a></li><li><a href="#">LinkedIn</a></li><li><a href="#">GitHub</a></li><li><a href="#">Dribbble</a></li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-layers" class="w-6 h-6 text-primary" />
          <span>Untitled UI</span>
        </div>
        <p>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </UContainer>
  </footer>
</template>