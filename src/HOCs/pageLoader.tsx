import React, { Suspense } from 'react'

import { AppLoader } from '../components/Reusables/Loaders'

const pageLoader = (Component: React.FC) => (props: any) => {
  return (
    <Suspense fallback={<AppLoader />}>
        <Component {...props} />
    </Suspense>
  )
}

export default pageLoader