export const useMobileMenu = () => {
  const isOpen = ref(false)
  
  const toggle = () => {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
  
  const close = () => {
    isOpen.value = false
    document.body.style.overflow = ''
  }
  
  const open = () => {
    isOpen.value = true
    document.body.style.overflow = 'hidden'
  }
  
  onUnmounted(() => {
    document.body.style.overflow = ''
  })
  
  return {
    isOpen: readonly(isOpen),
    toggle,
    close,
    open,
  }
}