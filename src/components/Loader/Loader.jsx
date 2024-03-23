import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#E44848"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </LoaderContainer>
  );
};
