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

export const TypesList = styled.ul`
  display: flex;
  gap: 10px;
  width: 360px;
`;

export const TypeItem = styled.li`
  padding: 17px 30px;
  height: 95px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  mix-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-of-type(2) {
    padding: 9.5px 24px;
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

export const EquipmentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  gap: 12px 8px;
`;

export const EquipmentItem = styled.li`
  width: calc((100% - 24px) / 3);
  height: 95px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  mix-blend-mode: multiply;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EquipmentLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EquipmentCheckboxInput = styled.input`
  display: none;

  &:checked + svg use {
    fill: var(--red-color);
  }
`;

export const SearchButton = styled.button`
  margin-top: 64px;
  padding: 16px 60px;
  border-radius: 200px;
  background-color: var(--red-color);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  color: var(--white-color);
  transition: background-color var(--transition-effect);
  &:hover,
  &:focus {
    color: var(--white-color);
    background-color: #d84343;
  }
`;
