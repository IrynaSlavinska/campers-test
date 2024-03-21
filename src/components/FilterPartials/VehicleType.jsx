import { useState } from 'react';

import typeSprite from 'assets/icons/type.svg';
import { VEHICLE_TYPE_ARRAY } from 'assets/constants';

import {
  FilterTitle,
  TypeRadioInput,
  TypesList,
  TypeItem,
  TypeLabel,
} from './FilterPartials.styled';

export const VehicleType = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = typeId => {
    setSelectedType(typeId);
  };

  return (
    <>
      <FilterTitle>Vehicle type</FilterTitle>
      <TypesList>
        {VEHICLE_TYPE_ARRAY.map(item => {
          return (
            <TypeItem key={item.id}>
              <TypeLabel>
                <TypeRadioInput
                  type="radio"
                  name="typeId"
                  defaultValue={selectedType}
                  checked={selectedType === item.id}
                  onChange={() => handleTypeChange(item.id)}
                />
                <svg width="40" height="28">
                  <use xlinkHref={`${typeSprite}#${item.src}`} />
                </svg>
                {item.name}
              </TypeLabel>
            </TypeItem>
          );
        })}
      </TypesList>
    </>
  );
};
