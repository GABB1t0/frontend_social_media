import InfiniteScroll from 'react-infinite-scroll-component';
import { Suspense, lazy, useEffect, useState } from 'react';
import { client } from '../../api/client';
import { ROUTES_API } from '../../config';
import { Data, Datum, Posts } from '../../utils/SearchPostProfileApiResponse'
import { EndPointApi } from '../../types';

type Props = { id:string }

const InfoComponent = lazy(() => import('../../components/infocomponent/InfoComponent'))

const Timeline = ({id}:Props) => {

  const array: Datum[] = []

  const [page,setPage] = useState<Data>();
  const [items,setItems] = useState(array);
  const clients = client() 

  const getList = (page:number|null, url:EndPointApi|null, signal?:AbortSignal):void => {
    let uri = 
      page === null
        ? url
        : ROUTES_API.searchPostsUser(`${id}`,page);

    if(uri === null) return   

    const request = signal != undefined ? clients.get(uri,signal) : clients.get(uri)
    request
    .then(response  => {
      const data = response.data as Data
      const posts = (response.data.posts) as Posts
      let newDataPosts = posts.data
      setItems([...items, ...newDataPosts])
      setPage(data)
    })
  }

  const acomodarUrl = (url:string|null|undefined) => {
    if(url === null || url === undefined) return null;
    const newUrl = url.substring(25,url.length)
    return newUrl as EndPointApi
  }

  useEffect(()=>{
    const abortcontroller = new AbortController()
    const signal = abortcontroller.signal
    getList(1,null,signal)
    return () => {
      abortcontroller.abort()
    }
  },[])

  return(
    <>
      <div className='flex sm:w-11/12 mx-auto my-3 md:gap-6  '>
      <aside className="md:w-[40%] sticky top-20 h-4/5 z-[49]">
        <div className="hidden md:flex flex-col gap-4 ">
          <Suspense>
            <InfoComponent/>
            <InfoComponent/>
          </Suspense>
        </div>
      </aside>
      <main className="w-full md:w-[60%] overflow-y-auto">
        <div id='infiniteScroll' style={{width:'100%', height:'600px', border:'1px solid red', overflow:'auto'}}>
          {<InfiniteScroll
              dataLength={items.length} //This is important field to render the next data
              next={() => {
                if(page?.posts.next_page_url === null) return
                getList(null,acomodarUrl(page?.posts.next_page_url))
              }}
              hasMore={true}
              scrollableTarget='infiniteScroll'
              endMessage={<h1>No hay mas posts</h1>}
              loader={""}
            >
              {
                items.map(item => (
                  <p key={item.id}>{item.description}</p>
                ))
              }
          </InfiniteScroll>}
        </div>
      </main>
      </div>
    </>
    
    
  )
};

export default Timeline;