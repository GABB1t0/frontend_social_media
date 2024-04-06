import { FeedWithoutCreate } from "../components/Feed";


export const SavePost: React.FC = () => {
  return (
    <>
    <div className="container flex flex-col mx-auto mt-20 w-4/5 gap-4">
      <h3 className="font-bold text-xl">Publicaciones Guardadas</h3>
      
      <FeedWithoutCreate/>
    </div>
    
    </>
  );
}