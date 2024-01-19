
import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

 //add code here
  const handleOverlayClose = (e) => {

    //check if the click was on the overlay (outside the modal)
    if(e.target === e.currentTarget){
      onClose();
    }
    
      
  }

    return ReactDOM.createPortal(
          <div className='modal-overlay'  onClick={handleOverlayClose}>
          <div className='modal' >
      
      <div style={{ backgroundColor: 'white', padding: '2rem', position: 'relative' }} onClick={(e) => e.stopPropagation()} >// This prevents the modal from closing when clicking inside
   //add code here
        <button onClick={onClose}>Close Modal </button>
          {children}
      </div>
    </div>
      </div>
      ,
    document.body

);

};

export default Modal;
