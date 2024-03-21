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
  position: relative;
  margin-bottom: 48px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 360px;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.1);
  }
`;

export const EquipmentList = styled.ul`
  margin-bottom: 32px;
`;

export const TypesList = styled.ul`
  display: flex;
  gap: 10px;
  width: 360px;
`;

export const TypeItem = styled.li`
  padding: 17px 30px;
  height: 95px;
  width: 112px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  mix-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-of-type(2) {
    padding: 9.5px 24px;
    width: 128px;
  }
`;

export const TypeRadioInput = styled.input`
  display: none;
  &:checked + svg use {
    fill: var(--red-color);
  }
`;

export const TypeLabel = styled.label`
  text-align: center;
  font-weight: 500;
  line-height: 1.25;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
