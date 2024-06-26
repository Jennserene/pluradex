import {useEffect, useState} from "react"

type WindowSize = {
  width: number | undefined
  height: number | undefined
}
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  } as WindowSize)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize);

    handleResize()

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    console.log('WindowSize changed: ', windowSize);
  }, [windowSize])

  return windowSize
}