import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 18, 19, 0.4);
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 982px;
  height: 720px;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  color: black;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: transparent;
  padding: 0;

  & svg {
    stroke: var(--black-color);
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
