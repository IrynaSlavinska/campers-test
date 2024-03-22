import { Location } from './Location';
import { VehicleType } from './VehicleType';

import { Filter, SearchButton } from './FilterPartials.styled';
import { VehicleEquipment } from './VehicleEquipment';

export const Sidebar = () => {
  return (
    <form>
      <Location />

      <Filter>Filters</Filter>

      <VehicleEquipment />

      <VehicleType />

      <SearchButton type="submit">Search</SearchButton>
    </form>
  );
};
