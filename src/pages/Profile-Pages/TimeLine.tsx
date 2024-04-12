import { Feed } from '../../components/Feed';
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfoComponent } from "../../components/infocomponent/InfoComponent"
import { useEffect, useState } from 'react';
import { client } from '../../api/client';
import { ROUTES_API } from '../../config';
import { useParams } from 'react-router-dom';
import { Data, Datum, Posts } from '../../utils/SearchPostProfileApiResponse'
import TimelineCss from './TimeLine.module.css'

const Timeline: React.FC = () => {

  const array: Datum[] = []

  const [page,setPage] = useState<Data>();
  const [items,setItems] = useState(array);
  const clients = client() 
  const { id } = useParams();

  const getList = (page, url):void => {
    let uri = 
      page === null || page === undefined
        ? url
        : ROUTES_API.searchPostsUser(Number(id),page);

    console.log(uri)
    if(uri === undefined) return   
    
    clients.get(uri)
      .then(response  => {
        const data = response.data as Data
        const posts = (response.data.posts) as Posts
        let newDataPosts = posts.data
        setItems([...items, ...newDataPosts])
        setPage(data)
      })
  }

  const acomodarUrl = (url:string|null|undefined) => {
    if(url === null || url === undefined) return;
    const newUrl = url.substring(25,url.length)
    return newUrl
  }

  useEffect(()=>{
    getList(1,null)
  },[])

  return(
    <div className='flex sm:w-11/12 mx-auto my-3 md:gap-6  '>
      <aside className="md:w-[40%] sticky top-20 h-4/5 z-[49]">
        <div className="hidden md:flex flex-col gap-4 ">
          <InfoComponent/>
          <InfoComponent/>
        </div>
      </aside>
      <main className="w-full md:w-[60%] overflow-y-auto">
        <div id='infiniteScroll' style={{width:'100%', height:'600px', border:'1px solid red', overflow:'auto'}}>
          {<InfiniteScroll
              dataLength={items.length} //This is important field to render the next data
              next={() => {
                getList(null,acomodarUrl(page?.posts.next_page_url))
              }}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              scrollableTarget='infiniteScroll'
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
    
  )
};

export default Timeline;