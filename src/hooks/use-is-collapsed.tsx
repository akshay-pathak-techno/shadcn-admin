import { isCollapsedAtom } from '@/store/store'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export default function useIsCollapsed() {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom)

  useEffect(() => {
    const handleResize = () => {
      // Update isCollapsed based on window.innerWidth
      setIsCollapsed(window.innerWidth < 768 ? false : true)
    }

    // Initial setup
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setIsCollapsed])

  return [isCollapsed, setIsCollapsed] as const
}
