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
} from './Modal.styled';

export const ModalContent = ({ card }) => {
  console.log(card);

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
    </div>
  );
};
