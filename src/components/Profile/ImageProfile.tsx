const ImageProfile = () => {
  return (
    <div className= "absolute -top-16 inset-x-0 flex items-center justify-center sm:-top-20 md:static">
    <img 
        src='/src/assets/img/blank-profile-picture.jpg' 
        alt="Profile Photo" 
        className=" size-32 rounded-full sm:size-36 md:size-40" 
    />
    </div>
  )
}

export default ImageProfile