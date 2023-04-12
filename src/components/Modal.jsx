import React from 'react'
import "../assets/styles/modal.css"
function Modal({price , image , description , title ,  closeModal}) {
  return (
    <div className='modal'>
        <div className="modal__container">
            <div className="modal__top">
                <button onClick={closeModal}>X</button>
            </div>
            <div className="modal__content">
                <div className="modal__image">
                    <img src={image} alt="" />
                </div>
                <div className="modal__title">
                    <h3>{title}</h3>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Modal