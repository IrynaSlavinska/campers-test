import {
  FeaturesContainer,
  VehicleDetailsTitle,
  FeaturesList,
  FeaturesItem,
  FeaturesDetails,
} from './Modal.styled';

export const Features = ({ card }) => {
  console.log(card);
  return (
    <FeaturesContainer>
      <VehicleDetailsTitle>Vehicle details</VehicleDetailsTitle>
      <FeaturesList>
        <FeaturesItem>
          <FeaturesDetails>Form</FeaturesDetails>
          <FeaturesDetails>{card.form}</FeaturesDetails>
        </FeaturesItem>

        <FeaturesItem>
          <FeaturesDetails>Length</FeaturesDetails>
          <FeaturesDetails>{card.length}</FeaturesDetails>
        </FeaturesItem>

        <FeaturesItem>
          <FeaturesDetails>Width</FeaturesDetails>
          <FeaturesDetails>{card.width}</FeaturesDetails>
        </FeaturesItem>

        <FeaturesItem>
          <FeaturesDetails>Height</FeaturesDetails>
          <FeaturesDetails>{card.height}</FeaturesDetails>
        </FeaturesItem>

        <FeaturesItem>
          <FeaturesDetails>Tank</FeaturesDetails>
          <FeaturesDetails>{card.tank}</FeaturesDetails>
        </FeaturesItem>

        <FeaturesItem>
          <FeaturesDetails>Consumption</FeaturesDetails>
          <FeaturesDetails>{card.consumption}</FeaturesDetails>
        </FeaturesItem>
      </FeaturesList>
    </FeaturesContainer>
  );
};
