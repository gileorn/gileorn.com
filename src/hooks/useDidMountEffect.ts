import React from 'react'

export const useDidMountEffect = (callback: () => void) => {
  // eslint-disable-next-line
  React.useEffect(callback, [])
}
