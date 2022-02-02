import React from 'react';
import { createPortal } from "react-dom";

export const Popup =({ isOpen, closeModal, children }:any)=> {
  if (!isOpen) return null;
  return createPortal(
    <div className='contact contact-modal'>
      <div className='row'>
      <div className='modal-close'>
        <i className="fas fa-times" onClick={() => closeModal(!isOpen)}></i>
      </div>
      <div>
        {children}
      </div>
      </div>
    </div>
    ,document.querySelector("body"))
}
