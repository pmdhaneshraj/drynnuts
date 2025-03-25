import { useCallback, useEffect, useState } from "react"

export const useMediaQuery = (screen = '(max-width: 576px)') => { // mobile max width
  const [view, setView] = useState(false);

  const hanleMediaQuery = useCallback(() => {
    setView(window.matchMedia(screen).matches)
  }, [screen])

  useEffect(() => {
    window.matchMedia(screen).addEventListener('change', hanleMediaQuery);
  }, [screen])

  return view;
}