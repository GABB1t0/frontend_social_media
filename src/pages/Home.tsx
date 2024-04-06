
import { Feed } from "../components/Feed"
import { Header } from "../components/Header";
import { ImageProfileHome } from "../components/ImageProfileHome"
import { InfoComponent } from "../components/infocomponent/InfoComponent"


export const Home = () => {

  return (
    <div className='container flex justify-center sm:w-11/12 mx-auto my-3 md:gap-6 lg:gap-6 xl:w-4/5'>
      <aside className="lg:w-[25%] sticky top-20 h-4/5 z-[49]">
        <div className="hidden md:flex flex-col gap-4 ">
          <Header/>
          <ImageProfileHome />
          <InfoComponent/>
        </div>
      </aside>
      <main className="w-full lg:w-[50%] overflow-y-auto">
        <Feed/>
      </main>
      <aside className="lg:w-[25%] h-4/5 sticky top-20 right-0  z-40">
        <div className="hidden lg:flex flex-col gap-4">
          <InfoComponent/>
          <InfoComponent/>
        </div>
      </aside>
      
    </div>
  );
}