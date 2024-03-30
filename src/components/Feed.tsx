import { FC } from "react"
import { CreatePost } from "./post/CreatePost"
import { Post } from "./post/Post"



export const Feed = ()=>{
  return(
    <>
    <div className=" w-full flex flex-col gap-4">
      <CreatePost/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
    </div>
      
    </>
  )
}

export const FeedWithoutCreate: React.FC = () => {
  return (
    <>
      <div className=" w-full flex flex-col gap-4">
      
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
    </div>

    </>
  )
}