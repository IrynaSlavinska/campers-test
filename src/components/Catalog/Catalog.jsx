import { Content, Gallery, GalleryItem } from './Catalog.styled';
import { CardContent } from './CardContent';

export const Catalog = ({ adverts }) => {
  return (
    <Content>
      <Gallery>
        {adverts.map(item => {
          return (
            <GalleryItem key={item._id}>
              <CardContent card={item} />
            </GalleryItem>
          );
        })}
      </Gallery>
    </Content>
  );
};
