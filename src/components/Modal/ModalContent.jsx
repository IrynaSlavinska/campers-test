import { useState } from 'react';
import sprite from 'assets/icons/icons-sprite.svg';
import {
  ContentTitle,
  RevLocWrap,
  ReviewsTitle,
  LocationTitle,
  PriceTitle,
  GalleryList,
  GalleryItem,
  GalleryImage,
  CardDescription,
  InfoButtonsList,
  ButtonInfo,
  InfoContainer,
} from './Modal.styled';
import { Features } from './Features';
import { Reviews } from './Reviews';
import { BookForm } from './BookForm';

export const ModalContent = ({ card }) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const handleFeaturesClick = () => {
    setShowFeatures(true);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowFeatures(false);
    setShowReviews(true);
  };
  return (
    <div>
      <ContentTitle>{card.name}</ContentTitle>

      <RevLocWrap>
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

          {card.location}
        </LocationTitle>
      </RevLocWrap>

      <PriceTitle>&#x20AC; {card.price.toFixed(2)}</PriceTitle>

      <GalleryList>
        <GalleryItem>
          <GalleryImage
            src={card.gallery[0]}
            alt="camper"
            width={290}
            height={310}
          />
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src={card.gallery[1]}
            alt="camper"
            width={290}
            height={310}
          />
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src={card.gallery[2]}
            alt="camper"
            width={290}
            height={310}
          />
        </GalleryItem>
      </GalleryList>
      <CardDescription>{card.description}</CardDescription>

      <InfoButtonsList>
        <li>
          <ButtonInfo type="button" onClick={handleFeaturesClick}>
            Features
          </ButtonInfo>
        </li>
        <li>
          <ButtonInfo type="button" onClick={handleReviewsClick}>
            Reviews
          </ButtonInfo>
        </li>
      </InfoButtonsList>

      {showFeatures && (
        <InfoContainer>
          <Features card={card} />
          <BookForm />
        </InfoContainer>
      )}
      {showReviews && (
        <InfoContainer>
          <Reviews card={card} />
          <BookForm />
        </InfoContainer>
      )}
    </div>
  );
};
