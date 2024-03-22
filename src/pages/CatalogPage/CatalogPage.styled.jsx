import styled from '@emotion/styled';

export const CatalogContainer = styled.div`
  padding: 48px;
  display: flex;
  gap: 64px;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 50px auto 0;
  padding: 16px 32px;
  border-radius: 200px;
  border: 1px solid var(--red-color);
  color: var(--red-color);
  background-color: transparent;
  transition: color var(--transition-effect),
    background-color var(--transition-effect);

  &:hover,
  &:focus {
    color: var(--white-color);
    background-color: var(--red-color);
  }
`;
