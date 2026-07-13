import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll to the top whenever the route changes (react-router keeps the
// previous scroll position by default, which lands new pages mid-scroll).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Deep-link to an on-page anchor (e.g. /#author) scrolls to it; otherwise top.
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
