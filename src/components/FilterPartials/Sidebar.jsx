import { Location } from './Location';
import { VehicleType } from './VehicleType';

import { Filter } from './FilterPartials.styled';
import { VehicleEquipment } from './VehicleEquipment';

export const Sidebar = () => {
  return (
    <form>
      <Location />

      <Filter>Filters</Filter>

      <VehicleEquipment />

      <VehicleType />
    </form>
  );
};
