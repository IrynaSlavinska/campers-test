import { Location } from './Location';
import { VehicleType } from './VehicleType';

import { Filter } from './CatalogPartials.styled';

export const Sidebar = () => {
  return (
    <form>
      <Location />

      <Filter>Filters</Filter>

      <VehicleType />
    </form>
  );
};
