export const useMobileMenu = () => {
  const isOpen = ref(false)
  const toggle = () => isOpen.value = !isOpen.value
  const close = () => isOpen.value = false

  return { isOpen, toggle, close }
}