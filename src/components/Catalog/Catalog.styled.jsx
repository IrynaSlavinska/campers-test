import styled from '@emotion/styled';

export const Content = styled.div``;

export const Gallery = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const GalleryItem = styled.li`
  width: 888px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  display: flex;
  gap: 24px;
`;

export const CardImage = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

export const CardTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.25;
`;

export const FavButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewsTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-decoration-line: underline;
  display: flex;
  align-items: center;
  gap: 4px;

  & > svg {
    fill: var(--yellow-color);
  }
`;

export const LocationTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CardDescription = styled.p`
  color: var(--gray-color);
  line-height: 1.5;
  margin-bottom: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: 100%;
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const FeatureItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 18px;
  border-radius: 100px;
  background: #f2f4f7;
`;

export const ShowMoreButton = styled.button`
  padding: 16px 40px;
  border-radius: 200px;
  background: var(--red-color);
  color: #fff;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  transition: background-color var(--transition-effect);
  &:hover,
  &:focus {
    background-color: #d84343;
  }
`;
