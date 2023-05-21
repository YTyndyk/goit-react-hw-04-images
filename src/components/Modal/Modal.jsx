import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ image, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeModal();
        window.removeEventListener('keydown', e => console.log(e));
      }
    });
  }, [closeModal]);

  const closeModalOnClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css.Overlay} onClick={closeModalOnClick}>
      <div className={css.Modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Modal;
