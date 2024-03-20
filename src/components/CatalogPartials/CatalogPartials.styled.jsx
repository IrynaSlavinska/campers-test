import styled from '@emotion/styled';

export const LocationLabel = styled.label`
  color: rgba(16, 24, 40, 0.6);
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const LocationInput = styled.input`
  background-color: var(--light-color);
  border: none;
  width: 360px;
  padding: 18px;
  border-radius: 4px;
`;

export const Filter = styled.p`
  color: var(--gray-color);
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 14px;
`;

export const FilterTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
`;

export const TypeRadioInput = styled.input`
  display: none;
  &:checked + svg use {
    fill: var(--red-color);
  }
`;
