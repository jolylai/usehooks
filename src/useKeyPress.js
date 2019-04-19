import { useState, useEffect } from 'react'

export const useKeyPress = targetKey => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const uphandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', uphandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', uphandler)
    }
  }, [])

  return keyPressed
}
