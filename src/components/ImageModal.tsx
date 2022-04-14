import React, { useRef } from 'react'
import 'styles/ImageModal.css'

interface Props {
  imageSrc: string
  modalOpen: boolean
  closeModal: () => void
}

const ImageModal: React.FC<Props> = ({ imageSrc, modalOpen, closeModal }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  return (
    <div ref={modalRef} className="modal">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-main">
        <img src={imageSrc} alt="#" />
      </div>
    </div>
  )
}
export default ImageModal
