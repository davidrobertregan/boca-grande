import { useEffect } from 'react'

// Set the document title for a page and restore the site default on unmount.
export default function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
