import { useRef, useEffect } from 'react'

export const useEventListener = (eventName, handler, element = global) => {
  const saveHandler = useRef()

  useEffect(() => {
    saveHandler.current = handler
  }, [handler])

  useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = event => saveHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}
