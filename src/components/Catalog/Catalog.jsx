import { Content, Gallery } from './Catalog.styled';

export const Catalog = ({ adverts }) => {
  return (
    <Content>
      <Gallery>
        {adverts.map(item => {
          return (
            <li key={item._id}>
              <img src={item.gallery[0]} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <svg width={16} height={16}>
                  <use></use>
                </svg>
                <h3>
                  {item.rating} ({item.reviews.length} Reviews)
                </h3>
                <h3>{item.location}</h3>
                <p>{item.description}</p>
                <ul>
                  <li>details array</li>
                </ul>
              </div>
              <button type="button">Show more</button>
            </li>
          );
        })}
      </Gallery>
    </Content>
  );
};
