import { useState } from 'react';

import typeSprite from 'assets/icons/type.svg';
import { VEHICLE_TYPE_ARRAY } from 'assets/constants';

import { FilterTitle, TypeRadioInput } from './CatalogPartials.styled';

export const VehicleType = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = typeId => {
    setSelectedType(typeId);
  };

  return (
    <div>
      <FilterTitle>Vehicle type</FilterTitle>
      <ul>
        {VEHICLE_TYPE_ARRAY.map(item => {
          return (
            <li key={item.id}>
              <label>
                <TypeRadioInput
                  type="radio"
                  name="typeId"
                  value={selectedType}
                  checked={selectedType === item.id}
                  onChange={() => handleTypeChange(item.id)}
                />
                <svg width="40" height="28">
                  <use xlinkHref={`${typeSprite}#${item.src}`} />
                </svg>
                {item.name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
