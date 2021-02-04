import React, { useState } from 'react';
import Modal from '../Modal/Modal';

function Reservation () {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => setShowModal(false);
  return (
        <div>
          { showModal ? <div onClick={closeModalHandler} className='back-drop'></div> : null}
          <button onClick={() => setShowModal(true)} className='open-modal-btn'>Info</button>
          <Modal showModal={showModal} closeModalHandler={closeModalHandler} close={closeModalHandler}/>
        </div>
  );
}

export default Reservation;
