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

import { ScrollContentContainer } from './Modal.styled';

export const ModalContent = ({ card }) => {
  const [activeTab, setActiveTab] = useState('features');

  const handleFeaturesClick = () => setActiveTab('features');
  const handleReviewsClick = () => setActiveTab('reviews');

  return (
    <div>
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

        <PriceTitle>&#x20AC;{card.price.toFixed(2)}</PriceTitle>
      </div>

      <ScrollContentContainer>
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
            <ButtonInfo
              type="button"
              onClick={handleFeaturesClick}
              active={activeTab === 'features'}
            >
              Features
            </ButtonInfo>
          </li>
          <li>
            <ButtonInfo
              type="button"
              onClick={handleReviewsClick}
              active={activeTab === 'reviews'}
            >
              Reviews
            </ButtonInfo>
          </li>
        </InfoButtonsList>

        <InfoContainer>
          {activeTab === 'features' ? (
            <Features card={card} />
          ) : (
            <Reviews card={card} />
          )}
          <BookForm />
        </InfoContainer>
      </ScrollContentContainer>
    </div>
  );
};
