import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import backgroundImage from 'images/pexels-photo-386025.jpeg';

export const ErrorBackground = styled.div`
  background-color: #2e2f42;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.1),
      rgba(46, 47, 66, 0.4)
    ),
    url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 1380px;
  height: calc(100vh - 65px);
  margin: 0 auto;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 100px;
  border-radius: 4px;
`;

export const ErrorTitle = styled.h1`
  font-size: 56px;
  margin-bottom: 24px;
  & span {
    color: var(--red-color);
  }
`;

export const Text = styled.p`
  font-size: 24px;
`;

export const StyledLink = styled(NavLink)`
  color: var(--red-color);
  font-size: 60px;
  margin-top: 24px;
  font-weight: 600;
`;
