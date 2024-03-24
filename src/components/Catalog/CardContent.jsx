import { useState } from 'react';
import sprite from 'assets/icons/icons-sprite.svg';
import { CardFeatures } from './CardFeatures';
import { Modal } from 'components/Modal/Modal';
import {
  CardImage,
  CardTitle,
  ReviewsTitle,
  LocationTitle,
  CardDescription,
  ShowMoreButton,
  FavButton,
} from './Catalog.styled';

export const CardContent = ({ card }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <CardImage src={card.gallery[0]} alt={card.name} />
      <div style={{ overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
          }}
        >
          <CardTitle>{card.name}</CardTitle>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <CardTitle>&#x20AC; {card.price.toFixed(2)}</CardTitle>

            <FavButton type="button">
              <svg width={16} height={16}>
                <use xlinkHref={`${sprite}#icon-heart`}></use>
              </svg>
            </FavButton>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <ReviewsTitle>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            {card.rating} ({card.reviews.length} Reviews)
          </ReviewsTitle>
          <LocationTitle>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-map-pin`}></use>
            </svg>

            {card.location.split(',').reverse().join(', ')}
          </LocationTitle>
        </div>

        <CardDescription>{card.description}</CardDescription>

        <CardFeatures item={card.details} />

        <ShowMoreButton type="button" onClick={openModal}>
          Show more
        </ShowMoreButton>
        <Modal isOpen={modalOpen} onClose={closeModal} card={card}></Modal>
      </div>
    </>
  );
};
