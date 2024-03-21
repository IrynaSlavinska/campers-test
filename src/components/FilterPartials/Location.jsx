import { LocationLabel, LocationInput } from './FilterPartials.styled';

export const Location = () => {
  return (
    <LocationLabel>
      Location
      <LocationInput
        type="text"
        name="location"
        placeholder="Kyiv, Ukraine"
        autoFocus
      />
    </LocationLabel>
  );
};
