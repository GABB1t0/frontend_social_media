


export const CreatePost = () =>{
  
  return(
    <>
    <div className=" flex w-full bg-white rounded-md h-16 items-center justify-center px-5 py-6 gap-1 shadow-lg">
      
      <img src="/src/assets/img/blank-profile-picture.jpg" className="size-9 rounded-full" alt="" />
      
      <form action="" className="bg-[#F1F1F1] rounded-xl py-2 px-3 w-[90%] flex gap-1">
        <input type="text" className="bg-transparent w-[70%] focus:outline-none " placeholder="Say Something"/>
        <button className="bg-[#fc6232] text-white rounded-xl px-2 py-1 w-[30%]" >Shared</button>
      </form>

    </div>
    </>
  )
}