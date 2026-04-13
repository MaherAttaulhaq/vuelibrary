export const useMobileMenu = () => {
  const isOpen = ref(false)

  const syncBodyOverflow = (open: boolean) => {
    if (!import.meta.client) {
      return
    }

    document.body.style.overflow = open ? 'hidden' : ''
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
    syncBodyOverflow(isOpen.value)
  }

  const close = () => {
    isOpen.value = false
    syncBodyOverflow(false)
  }

  onUnmounted(() => {
    syncBodyOverflow(false)
  })

  return {
    isOpen: readonly(isOpen),
    toggle,
    close
  }
}
