import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../../redux/advert/operations';
import {
  Form,
  FormTitle,
  FormText,
  InputsContainer,
  Input,
  Textarea,
  SendButton,
} from './Modal.styled';

export const BookForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const bookingData = {
      name: name,
      email: email,
      date: date,
      comment: comment,
    };

    dispatch(addBooking(bookingData));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Book your campervan now</FormTitle>
      <FormText>Stay connected! We are always ready to help you.</FormText>
      <InputsContainer>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="date"
          name="date-picker"
          placeholder="Booking date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <Textarea
          name="comment"
          placeholder="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        ></Textarea>
      </InputsContainer>
      <SendButton type="submit">Send</SendButton>
    </Form>
  );
};
