import { Feed } from '../../components/Feed';

import { InfoComponent } from "../../components/infocomponent/InfoComponent"






const Timeline: React.FC = () =>{
    
  return(
    <div className='flex sm:w-11/12 mx-auto my-3 md:gap-6  '>
      <aside className="md:w-[40%] sticky top-20 h-4/5 z-[49]">
        <div className="hidden md:flex flex-col gap-4 ">
          <InfoComponent/>
          <InfoComponent/>
        </div>
      </aside>
      <main className="w-full md:w-[60%] overflow-y-auto">
        <Feed/>
      </main>
      
      
    </div>
    
  )
};

export default Timeline;