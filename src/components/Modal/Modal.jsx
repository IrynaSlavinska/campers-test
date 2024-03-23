import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from 'assets/icons/icons-sprite.svg';
import {
  ModalBackdrop,
  ModalContainer,
  ModalCloseButton,
} from './Modal.styled';

export const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleCloseKeyPress = event => {
      if (event.code === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleCloseKeyPress);

    return () => document.removeEventListener('keydown', handleCloseKeyPress);
  }, [onClose]);

  return isOpen
    ? createPortal(
        <ModalBackdrop onClick={onClose}>
          <ModalContainer onClick={event => event.stopPropagation()}>
            <ModalCloseButton
              type="button"
              aria-label="Close modal"
              onClick={onClose}
            >
              <svg width={32} height={32}>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
            </ModalCloseButton>
            children
          </ModalContainer>
        </ModalBackdrop>,
        document.getElementById('modal-root')
      )
    : null;
};
