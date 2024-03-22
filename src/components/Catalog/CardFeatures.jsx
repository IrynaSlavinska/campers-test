import sprite from 'assets/icons/icons-sprite.svg';
import { FeaturesList, FeatureItem } from './Catalog.styled';

export const CardFeatures = ({ item }) => {
  console.log(item);
  return (
    <FeaturesList>
      <FeatureItem>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-adults`}></use>
        </svg>
        <p>{item.adults} adults</p>
      </FeatureItem>

      <FeatureItem>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-child`}></use>
        </svg>
        <p>{item.children} children</p>
      </FeatureItem>

      <FeatureItem>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-automatic`}></use>
        </svg>
        <p>{item.transmission}</p>
      </FeatureItem>

      <FeatureItem>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-petrol`}></use>
        </svg>
        <p>{item.engine}</p>
      </FeatureItem>

      <FeatureItem>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-kitchen`}></use>
        </svg>
        <p>kitchen</p>
      </FeatureItem>

      <FeatureItem>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-bed`}></use>
        </svg>
        <p>{item.beds} beds</p>
      </FeatureItem>
    </FeaturesList>
  );
};
