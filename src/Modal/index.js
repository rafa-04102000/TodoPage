

// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
  // ReactDom tiene este método para crear portales
  // en el index.html creo el div con el id modal
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };