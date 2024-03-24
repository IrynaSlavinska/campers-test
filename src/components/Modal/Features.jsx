import sprite from 'assets/icons/icons-sprite.svg';
import {
  FeaturesContainer,
  VehicleDetailsTitle,
  FeaturesList,
  FeaturesItem,
  FeaturesDetailsList,
  FeaturesDetailsItem,
  FeaturesDetailsText,
} from './Modal.styled';

export const Features = ({ card }) => {
  const data = card.details;

  return (
    <FeaturesContainer>
      <FeaturesList>
        <FeaturesItem>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-adults`}></use>
          </svg>
          <p>{data.adults} adults</p>
        </FeaturesItem>

        <FeaturesItem>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-automatic`}></use>
          </svg>
          <p>{data.transmission}</p>
        </FeaturesItem>

        <FeaturesItem>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-petrol`}></use>
          </svg>
          <p>{data.engine}</p>
        </FeaturesItem>

        <FeaturesItem>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-kitchen`}></use>
          </svg>
          <p>{data.kitchen} kitchen</p>
        </FeaturesItem>

        <FeaturesItem>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-bed`}></use>
          </svg>
          <p>{data.beds} bed(-s)</p>
        </FeaturesItem>

        <FeaturesItem>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-hob`}></use>
          </svg>
          <p>{data.hob} hob</p>
        </FeaturesItem>

        <FeaturesItem>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-air-conditioner`}></use>
          </svg>
          <p>{data.airConditioner} air conditioner</p>
        </FeaturesItem>

        <FeaturesItem>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-radio`}></use>
          </svg>
          <p>{data.radio} radio</p>
        </FeaturesItem>

        <FeaturesItem>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-cd`}></use>
          </svg>
          <p>{data.CD}</p>
        </FeaturesItem>
      </FeaturesList>

      <VehicleDetailsTitle>Vehicle details</VehicleDetailsTitle>
      <FeaturesDetailsList>
        <FeaturesDetailsItem>
          <FeaturesDetailsText>Form</FeaturesDetailsText>
          <FeaturesDetailsText>{card.form}</FeaturesDetailsText>
        </FeaturesDetailsItem>

        <FeaturesDetailsItem>
          <FeaturesDetailsText>Length</FeaturesDetailsText>
          <FeaturesDetailsText>{card.length}</FeaturesDetailsText>
        </FeaturesDetailsItem>

        <FeaturesDetailsItem>
          <FeaturesDetailsText>Width</FeaturesDetailsText>
          <FeaturesDetailsText>{card.width}</FeaturesDetailsText>
        </FeaturesDetailsItem>

        <FeaturesDetailsItem>
          <FeaturesDetailsText>Height</FeaturesDetailsText>
          <FeaturesDetailsText>{card.height}</FeaturesDetailsText>
        </FeaturesDetailsItem>

        <FeaturesDetailsItem>
          <FeaturesDetailsText>Tank</FeaturesDetailsText>
          <FeaturesDetailsText>{card.tank}</FeaturesDetailsText>
        </FeaturesDetailsItem>

        <FeaturesDetailsItem>
          <FeaturesDetailsText>Consumption</FeaturesDetailsText>
          <FeaturesDetailsText>{card.consumption}</FeaturesDetailsText>
        </FeaturesDetailsItem>
      </FeaturesDetailsList>
    </FeaturesContainer>
  );
};
