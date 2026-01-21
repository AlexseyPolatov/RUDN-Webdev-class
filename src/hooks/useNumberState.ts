import { useState } from 'react'

export const useNumberState = (startValue: number = 0) => {
  const [value, setValue] = useState(startValue)

  const add = () => setValue(value + 1)
  const subtract = () => setValue(value - 1)
  const restore = () => setValue(startValue)

  return { value, add, subtract, restore }
}
