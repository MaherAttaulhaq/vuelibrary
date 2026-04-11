<template>
  <svg width="314" viewBox="0 0 314 640" fill="none" preserveAspectRatio="xMidYMin slice" class="h-auto text-black dark:text-white">
    <defs>
      <pattern id="screen-mockup" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#screen-image-light" class="dark:hidden" transform="scale(0.00133333 0.000615764)"/>
        <use href="#screen-image-dark" class="not-dark:hidden" transform="scale(0.00133333 0.000615764)"/>
      </pattern>
      <clipPath id="status-bar-box">
        <rect width="281.69" height="609.953" fill="white" transform="translate(15.7744 14.2725)"/>
      </clipPath>
      <image id="screen-image-light" width="750" height="1624" href="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp" class="dark:hidden"/>
      <image id="screen-image-dark" width="750" height="1624" href="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp" class="not-dark:hidden"/>
    </defs>
    <g clip-path="url(#status-bar-box)">
      <rect width="281.69" height="609.953" transform="translate(15.7744 14.2725)" class="fill-white dark:fill-black"/>
      <rect width="281.69" height="609.953" transform="translate(15.7744 14.2725)" class="fill-screen-mockup"/>
    </g>
  </svg>
</template>