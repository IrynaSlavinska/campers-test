import {
  Form,
  FormTitle,
  FormText,
  InputsContainer,
  Label,
  Input,
  Textarea,
  SendButton,
} from './Modal.styled';

export const BookForm = () => {
  return (
    <Form>
      <FormTitle>Book your campervan now</FormTitle>
      <FormText>Stay connected! We are always ready to help you.</FormText>
      <InputsContainer>
        <Label htmlFor="name"></Label>
        <Input type="text" name="name" id="name" placeholder="Name" />
        <Label htmlFor="email"></Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
        <Label htmlFor="calendar"></Label>
        <Input
          type="date"
          name="date-picker"
          id="calendar"
          placeholder="Booking date"
        />
        <Label htmlFor="comment"></Label>
        <Textarea name="comment" id="comment" placeholder="Comment"></Textarea>
      </InputsContainer>
      <SendButton type="submit">Send</SendButton>
    </Form>
  );
};
