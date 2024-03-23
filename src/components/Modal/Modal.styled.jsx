import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 69;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 18, 19, 0.4);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 982px;
  height: 720px;
  padding: 40px 30px 40px 40px;
  background-color: #fff;
  border-radius: 8px;
  color: black;
  overflow: auto;
`;

export const ModalWrapper = styled.div`
  overflow-y: auto;
  padding-right: 30px;
  max-width: 100%;
  max-height: 100%;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-color);
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 8px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: transparent;
  padding: 0;

  & svg {
    stroke: var(--black-color);
    transition: stroke var(--transition-effect);
  }

  &:hover svg,
  &:focus svg {
    stroke: var(--red-color);
  }
`;

export const ContentTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 24px;
`;

export const RevLocWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;

  & svg use {
    fill: var(--yellow-color);
  }
`;

export const ReviewsTitle = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  line-height: 1.5;
  text-decoration-line: underline;
`;

export const LocationTitle = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  line-height: 1.5;
`;

export const PriceTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 24px;
`;

export const GalleryList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const GalleryItem = styled.li``;

export const GalleryImage = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

export const CardDescription = styled.p`
  color: var(--gray-color);
  line-height: 1.5;
  margin-bottom: 44px;
`;

export const InfoButtonsList = styled.ul`
  display: flex;
  gap: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
  margin-bottom: 44px;
`;

export const ButtonInfo = styled.button`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  background-color: transparent;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

export const FeaturesContainer = styled.div`
  width: 430px;
`;

export const VehicleDetailsTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const FeaturesItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 18px;
  border-radius: 100px;
  background: #f2f4f7;
`;

export const FeaturesDetailsText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const FeaturesDetailsList = styled.ul``;

export const FeaturesDetailsItem = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;
