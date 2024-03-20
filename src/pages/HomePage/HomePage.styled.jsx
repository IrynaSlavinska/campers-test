import styled from '@emotion/styled';
import backgroundImage from 'images/pexels-photo-15167402.jpeg';

export const HomeBack = styled.div`
  background-color: #2e2f42;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.2),
      rgba(46, 47, 66, 0.6)
    ),
    url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 1380px;
  height: calc(100vh - 65px);
  margin: 0 auto;
`;

export const HomeWrap = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
`;

export const HomeTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.07;
  margin-bottom: 28px;
  max-width: 460px;
`;

export const Company = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 250px;
`;

export const CompanyName = styled.p`
  font-weight: 500;
  font-size: 28px;
  color: var(--red-color);
`;

export const AboutContainer = styled.div`
  align-self: flex-end;
  max-width: 600px;
  backdrop-filter: blur(8px);
  padding: 20px;
  border-radius: 16px;
`;

export const AboutText = styled.p`
  color: var(--white-color);
  margin-bottom: 12px;
`;
