import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--red-color);
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  gap: 100px;
`;

export const NavItem = styled.li``;

export const StyledNav = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  transition: color var(--transition-effect);
  &:hover,
  &:focus {
    color: var(--white-color);
  }
  &.active {
    color: var(--yellow-color);
  }
`;

export const Main = styled.main``;
