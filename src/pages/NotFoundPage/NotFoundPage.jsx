import {
  ErrorBackground,
  ErrorContainer,
  ErrorTitle,
  Text,
  StyledLink,
} from './NotFoundPage.styled';

export const NotFoundPage = () => {
  return (
    <ErrorBackground>
      <ErrorContainer>
        <ErrorTitle>
          Error <span>404</span>
        </ErrorTitle>
        <Text>You have gone to a non existing page</Text>
        <Text>Return to the</Text>
        <StyledLink to="/">Home</StyledLink>
      </ErrorContainer>
    </ErrorBackground>
  );
};
