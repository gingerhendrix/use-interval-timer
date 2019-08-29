import React from 'react'

import { useMyHook } from '@gingerhendrix/use-interval-timer'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
