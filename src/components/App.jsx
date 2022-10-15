// import { ToastContainer} from 'react-toastify';
import { useState, useEffect} from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal'
import Loader from './Loader/Loader'
import {AppWrapper} from './aapStyle'
import ImageGallery from './ImgGallery/ImageGallery';
import ButtonLoad from './Button/Button'
import fetchImg from './FetchImg/fetchImg'



const App = () => {
const [ currentPage,setCurrentPage] = useState(1);
const [searchObject, setSearchObject] =  useState('');
const[hits,setHits] = useState([]);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState (false);
const[showModal, setShowModal] = useState(false);
const[tags, setTags] = useState ('');
const[largeImageURL,setLargeImageURL] = useState ('');
   

    
   
         useEffect(() => {
        if(!searchObject) return;
        
            fetchImg(searchObject,currentPage)
            .then(({hits}) => {
                if(!hits.length === 0) {
                    return Promise.reject(new Error("Проверьте ввод запроса"))
                }

                const images=hits.map(({webformatURL,id,tags,largeImageURL})=>({
                    webformatURL,id,tags,largeImageURL
                }))
                setHits((state) => [...state, ...images])
            })
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
        // fetchQuery()
      } ,[currentPage, searchObject]);
      
      const onLoadMoreButton = () => {
        setCurrentPage(state => (state + 1))
    }
      const handleFormSubmit = (searchObject) => {
          setSearchObject(searchObject)
          setCurrentPage(1)
          setHits([])
          setError(null) 
       };

       const  toggleModal = () => {
             setShowModal(!showModal)
         };

         const onModal = ({largeImageURL, tags}) => {
          setLargeImageURL(largeImageURL)
          setTags(tags)
          toggleModal({});
      };
      const renderButtonLoadMore = hits.length > 0 && !isLoading
              return (
                  
                <AppWrapper>
                  <Searchbar onSubmit={handleFormSubmit}/>
                  {error && <h1>{error.message}</h1>}
                 {hits.length  >0 && <ImageGallery showQuery={hits} onClick={onModal}/>}  
                  {isLoading && <Loader/>}
                  {renderButtonLoadMore && <ButtonLoad onClick={onLoadMoreButton}/>}
                  {showModal && <Modal onClose={toggleModal}>
                      <img src={largeImageURL} alt={tags}/>
                  </Modal>}
            </AppWrapper>
              );
              
            }
            export default App;
              
           
     




              
               
               





    
        
           
      
             
       





    



