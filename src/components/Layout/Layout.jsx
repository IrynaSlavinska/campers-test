import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  Header,
  Container,
  Navigation,
  NavItem,
  StyledNav,
  Main,
} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavItem>
              <StyledNav to="/">Home</StyledNav>
            </NavItem>

            <NavItem>
              <StyledNav to="/catalog">Catalog</StyledNav>
            </NavItem>

            <NavItem>
              <StyledNav to="/favorites">Favorites</StyledNav>
            </NavItem>
          </Navigation>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};
