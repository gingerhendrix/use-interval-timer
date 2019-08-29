import React from 'react'

import useIntervalTimer from '@gingerhendrix/use-interval-timer'

const App = () => {
  const {tick} = useIntervalTimer({interval: 100, maxTicks: 100});
  return (
    <div>
      {tick}
    </div>
  )
}
export default App
