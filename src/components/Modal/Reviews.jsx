import { Rating } from './Rating';
import {
  ReviewsList,
  TopPartRev,
  PreName,
  ReviewName,
  ReviewText,
} from './Modal.styled';

export const Reviews = ({ card }) => {
  const reviews = card.reviews;
  console.log(reviews);
  return (
    <ReviewsList>
      {reviews.map(rev => {
        return (
          <li key={rev.reviewer_name}>
            <TopPartRev>
              <PreName>{rev.reviewer_name.slice(0, 1)}</PreName>
              <div>
                <ReviewName>{rev.reviewer_name}</ReviewName>
                <Rating rating={rev.reviewer_rating} />
              </div>
            </TopPartRev>
            <ReviewText>{rev.comment}</ReviewText>
          </li>
        );
      })}
    </ReviewsList>
  );
};
