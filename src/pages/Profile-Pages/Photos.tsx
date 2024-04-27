
import ListImage from '../../components/ListImage';
import stylesPhoto from './Photos.module.css';
import useResize from '../../hooks/useResize';

const Photos = () =>{

  const cols = useResize();
  console.log(cols);

  return(
    <>
    {console.log('Photos')}
      {cols !== 0 && (
        <section className={stylesPhoto.photoSection_container}>
          <ListImage cols={cols} /> 
        </section>
      )}
    </>
  );
};

export default Photos;