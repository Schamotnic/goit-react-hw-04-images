import { useEffect} from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay,ModalContent } from './ModalStyle';
import PropTypes from 'prop-types';

// import { ModalOverlay } from './ModalStyle';
const modalRoot = document.querySelector('#modal-root')

const  Modal = ({onClose,children}) =>{

   
   useEffect(() =>{
      const  hendelKeyDown = event =>{
         if(event.code === 'Escape'){
            onClose()
         }
      }
      window.addEventListener('keydown',hendelKeyDown)
      return () =>{
         window.removeEventListener('keydown',hendelKeyDown) 
      }
   },[onClose])
   
   
   
   Modal.propTypes = {
      onClose: PropTypes.func.isRequired,
      children:PropTypes.node.isRequired
  };

 

const handleBackDropClick = event =>{

   if(event.target === event.currentTarget){
      onClose()
   }
}

   
      return createPortal(
<ModalOverlay onClick={handleBackDropClick}>
   <ModalContent>{children}</ModalContent>
</ModalOverlay>,modalRoot
      )
   
}
export default Modal;