import { Suspense } from "react"
import { Outlet } from "react-router-dom"

const WrapperSuspense = () => {
  return (
    <div className='w-full'>
      <Suspense>
          <Outlet/>
      </Suspense>
    </div>
  )
}

export default WrapperSuspense