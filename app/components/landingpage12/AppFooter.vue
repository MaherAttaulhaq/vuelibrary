// <template>
//   <footer class="bg-white dark:bg-gray-950 py-12 md:pt-16">
//     <div class="mx-auto max-w-[1560px] px-4 md:px-8">
//       <div class="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
//         <div class="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
//           <div v-for="column in footerColumns" :key="column.title">
//             <h4 class="text-sm font-semibold text-gray-900 dark:text-white">{{ column.title }}</h4>
//             <ul class="mt-4 flex flex-col gap-3">
//               <li v-for="link in column.links" :key="link">
//                 <UButton variant="link" color="neutral" :label="link" class="text-sm p-0 h-auto" />
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div class="w-full md:max-w-[135px]">
//           <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Get the app</h4>
//           <div class="mt-4 flex w-max flex-row gap-4 md:flex-col">
//             <a href="#" class="rounded-lg bg-black ring-1 ring-gray-700 focus-visible:outline-2">
//               <img :src="appStoreBadge" alt="App Store" class="h-10 w-30" />
//             </a>
//             <a href="#" class="rounded-lg bg-black ring-1 ring-gray-700 focus-visible:outline-2">
//               <img :src="googlePlayBadge" alt="Google Play" class="h-10 w-33" />
//             </a>
//           </div>
//         </div>
//       </div>
      
//       <div class="mt-12 flex flex-col justify-between gap-6 border-t border-gray-200 dark:border-gray-800 pt-8 md:mt-16 md:flex-row md:items-center">
//         <div class="flex items-center gap-2">
//           <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
//             <span class="text-white font-bold text-sm">U</span>
//           </div>
//           <span class="text-sm font-semibold">Untitled UI</span>
//         </div>
//         <p class="text-sm text-gray-500 dark:text-gray-400">© 2077 Untitled UI. All rights reserved.</p>
//       </div>
//     </div>
//   </footer>
// </template>

// <script setup lang="ts">
// import appStoreBadge from '~/public/app-store-badge.svg'
// import googlePlayBadge from '~/public/google-play-badge.svg'

// const footerColumns = [
//   {
//     title: 'Product',
//     links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases']
//   },
//   {
//     title: 'Company',
//     links: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact']
//   },
//   {
//     title: 'Resources',
//     links: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support']
//   },
//   {
//     title: 'Social',
//     links: ['X', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble']
//   },
//   {
//     title: 'Legal',
//     links: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact']
//   }
// ]
// </script>