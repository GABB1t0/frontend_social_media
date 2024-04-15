import InfiniteScroll from 'react-infinite-scroll-component';
import { Suspense, lazy, useEffect, useState } from 'react';
import { client } from '../../api/client';
import { ROUTES_API } from '../../config';
import { Data, Datum, Posts } from '../../utils/SearchPostProfileApiResponse'
import { EndPointApi } from '../../types';
import { Post } from '../../components/post/Post';
import { CreatePost } from '../../components/post/CreatePost';

type Props = { id:string }

type PropsFetchData = { 
  page:number|null, 
  url:EndPointApi|null, 
  signal?:AbortSignal
}

const InfoComponent = lazy(() => import('../../components/infocomponent/InfoComponent'))

const Timeline = ({id}:Props) => {

  const array: Datum[] = []

  const [page,setPage] = useState<Data>();
  const [items,setItems] = useState<Datum[]>([]);
  const [hasMore, setHasMore] = useState(true)
  const clients = client()

  const fetchData = ({page, url, signal}:PropsFetchData) => {
    
    const paginationDefault = 3;
    let uri = 
      page === null
        ? url
        : ROUTES_API.searchPostsUser(`${id}`,paginationDefault,page);

    if(uri === null) return   

    const request = signal != undefined ? clients.get(uri,signal) : clients.get(uri);

    request
    .then(response  => {
      const data = response.data as Data
      const posts = (response.data.posts) as Posts
      console.log(data)
      if(posts.data.length === 0){ 
        setHasMore(false)
      }else{
        let newDataPosts = posts.data
        setItems([...items, ...newDataPosts])
        setPage(data)
      }
    });
  }

  const acomodarUrl = (url:string|null|undefined) => {
    if(url === null || url === undefined) return null;
    const newUrl = url.substring(25,url.length)
    return newUrl as EndPointApi
  }

  useEffect(()=>{
    const abortcontroller = new AbortController()
    const signal = abortcontroller.signal
    console.log('renderice useeffect')
    fetchData({
      page:1,
      url:null,
      signal:signal
    })

    return () => {
      abortcontroller.abort()
    }
  },[])

  return(
    <>
      {
        <InfiniteScroll
          dataLength={items.length} //This is important field to render the next data
          next={ () => { 
            fetchData({
              page:null,
              url:acomodarUrl(page?.posts?.next_page_url)
            })
          }}
          hasMore={hasMore}
          scrollableTarget='infiniteScroll'
          loader={
            <div className='flex justify-end sm:w-11/12 mx-auto my-3 md:gap-6'>
              <div className="w-full md:w-[58%] overflow-y-auto">
                <Post description='Cargando'/>
                <br />
                <Post description='Cargando'/>
                <br />
              </div>
            </div>
          }
          endMessage={<p>Ya se cargaron todos los datos</p>}
          scrollThreshold="100px"
          
          >
            <div className='flex sm:w-11/12 mx-auto my-3 md:gap-6'>
              <aside className="md:w-[40%] sticky top-0 h-4/5 z-[49]">
                <div className="hidden md:flex flex-col gap-4 ">
                  <Suspense>
                    <InfoComponent/>
                    <InfoComponent/>
                  </Suspense>
                </div>
              </aside>
              <main className="w-full md:w-[60%] overflow-y-auto">
                  <div>
                    <CreatePost/>
                    <br />
                    {
                      items.map((item) => (
                        <Post key={item.id} description={`${item.id}`}/>
                      ))
                    }
                  </div>
              </main>
            </div> 
          </InfiniteScroll>
        }
    </>
  )
};

export default Timeline;
