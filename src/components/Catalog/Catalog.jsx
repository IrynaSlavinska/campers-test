import sprite from 'assets/icons/icons-sprite.svg';
import { CardFeatures } from './CardFeatures';
import {
  Content,
  Gallery,
  GalleryItem,
  CardImage,
  CardTitle,
  ReviewsTitle,
  LocationTitle,
  CardDescription,
  ShowMoreButton,
  FavButton,
} from './Catalog.styled';

export const Catalog = ({ adverts }) => {
  // console.log(adverts);

  return (
    <Content>
      <Gallery>
        {adverts.map(item => {
          return (
            <GalleryItem key={item._id}>
              <CardImage src={item.gallery[0]} alt={item.name} />
              <div style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}
                >
                  <CardTitle>{item.name}</CardTitle>
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center',
                    }}
                  >
                    <CardTitle>&#x20AC; {item.price.toFixed(2)}</CardTitle>
                    <FavButton type="button">
                      <svg width={16} height={16}>
                        <use xlinkHref={`${sprite}#icon-heart`}></use>
                      </svg>
                    </FavButton>
                  </div>
                </div>
                <div
                  style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}
                >
                  <ReviewsTitle>
                    <svg width={16} height={16}>
                      <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                    {item.rating} ({item.reviews.length} Reviews)
                  </ReviewsTitle>
                  <LocationTitle>
                    <svg width={16} height={16}>
                      <use xlinkHref={`${sprite}#icon-map-pin`}></use>
                    </svg>

                    {item.location}
                  </LocationTitle>
                </div>

                <CardDescription>{item.description}</CardDescription>

                <CardFeatures item={item.details} />

                <ShowMoreButton type="button">Show more</ShowMoreButton>
              </div>
            </GalleryItem>
          );
        })}
      </Gallery>
    </Content>
  );
};
