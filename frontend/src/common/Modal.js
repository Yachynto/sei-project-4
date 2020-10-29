import React from 'react'

const Modal = ({ children, isOpen, onOverlayClick = () => {} }) => (
  <div className={`modal ${isOpen && 'is-active'}`}>
    <div
      className="modal-background"
      onClick={onOverlayClick}
    />
    <div className="modal-content">{children}</div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={onOverlayClick}
    />
  </div>
)

export default Modal
