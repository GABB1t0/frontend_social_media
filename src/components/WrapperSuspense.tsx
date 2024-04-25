import { Suspense, useEffect } from "react"
import { Outlet, useNavigation } from "react-router-dom"
import LoaderPages from "./LoaderPages";
import LoaderCss from './LoaderPages.module.css';

type PropsOptional = { abort:AbortController|null}

const WrapperSuspense = ({abort}:PropsOptional) => {

  const navigation = useNavigation();
  useEffect(() => {
    return () => {
      abort?.abort();
    }
  })

  return (
    <div className='w-full'>
      <Suspense>
        {navigation.state === 'loading' && (
          <div className={LoaderCss.container}>
            <div className={LoaderCss.loader}></div>
          </div>
        )}
          <Outlet/>
      </Suspense>
    </div>
  )
}

export default WrapperSuspense

