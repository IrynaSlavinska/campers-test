import equipmentSprite from 'assets/icons/equipment.svg';
import { VEHICLE_EQUIPMENT_ARRAY } from 'assets/constants';

import {
  FilterTitle,
  EquipmentList,
  EquipmentItem,
  EquipmentLabel,
  EquipmentCheckboxInput,
} from './FilterPartials.styled';

export const VehicleEquipment = () => {
  return (
    <>
      <FilterTitle>Vehicle Equipment</FilterTitle>
      <EquipmentList>
        {VEHICLE_EQUIPMENT_ARRAY.map(item => {
          return (
            <EquipmentItem key={item.id}>
              <EquipmentLabel>
                <EquipmentCheckboxInput type="checkbox" name="equipment" />
                <svg width="32" height="32">
                  <use xlinkHref={`${equipmentSprite}#${item.src}`} />
                </svg>
                {item.nameFront}
              </EquipmentLabel>
            </EquipmentItem>
          );
        })}
      </EquipmentList>
    </>
  );
};
