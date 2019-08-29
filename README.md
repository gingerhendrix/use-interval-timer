# @gingerhendrix/use-interval-timer

React hook for interval based timer

[![NPM](https://img.shields.io/npm/v/@gingerhendrix/use-interval-timer.svg)](https://www.npmjs.com/package/@gingerhendrix/use-interval-timer)

## Install

```bash
npm install --save @gingerhendrix/use-interval-timer
```

## Usage

```tsx
import * as React from 'react'

import useIntervalTimer from '@gingerhendrix/use-interval-timer'

const Example = () => {
  const {tick} = useIntervalTimer({interval: 100, maxTicks: 200})
  return (
    <div>
      {tick}
    </div>
  )
}
```

## License

MIT © [gingerhendrix](https://github.com/gingerhendrix)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
