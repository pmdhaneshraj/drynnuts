import { useCallback, useEffect, useState } from "react"

export const useMediaQuery = (screen = '(max-width: 576px') => {
  const [view, setView] = useState();

  const hanleMediaQuery = useCallback(() => {
    setView(window.matchMedia(screen).matches)
  })

  useEffect(() => {
    window.matchMedia(screen).addEventListener('change', hanleMediaQuery);
  })

  return view;
}