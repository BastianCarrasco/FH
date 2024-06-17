import React from 'react';

const Modal = ({ isOpen, closeModal, totalPrice, orderNumber, barcode }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Resumen de Pedido</h2>
        <p><strong>Total:</strong> ${totalPrice}</p>
        <p><strong>Número de Orden:</strong> {orderNumber}</p>
        <p><strong>Código de Barras:</strong> {barcode}</p>
      </div>
    </div>
  );
};

export default Modal;
