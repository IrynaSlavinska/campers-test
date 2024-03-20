import { LocationLabel, LocationInput } from './CatalogPartials.styled';

export const Location = () => {
  return (
    <LocationLabel for="location">
      Location
      <LocationInput
        type="text"
        name="location"
        id="location"
        placeholder="Kyiv, Ukraine"
        autofocus
      />
    </LocationLabel>
  );
};
