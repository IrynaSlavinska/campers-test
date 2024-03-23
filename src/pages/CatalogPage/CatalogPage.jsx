import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdvert } from '../../redux/advert/operations';
import {
  selectIsLoading,
  selectAdvert,
  selectTotal,
} from '../../redux/selectors';
import { Sidebar } from 'components/FilterPartials/Sidebar';
import { CatalogContainer, LoadMoreButton } from './CatalogPage.styled';
import { Catalog } from 'components/Catalog/Catalog';
import { Loader } from 'components/Loader/Loader';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdvert);
  const [page, setPage] = useState(1);
  const loadedBefore = useRef(false);
  const total = useSelector(selectTotal);

  useEffect(() => {
    if (loadedBefore.current) {
      return;
    }
    loadedBefore.current = true;
    dispatch(getAllAdvert(page));
  }, [dispatch, page]);

  const handleMoreClick = () => {
    loadedBefore.current = false;
    setPage(prevPage => prevPage + 1);
  };

  return (
    <CatalogContainer>
      <Sidebar />

      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Catalog adverts={adverts} />
          {adverts.length !== total && (
            <LoadMoreButton type="button" onClick={() => handleMoreClick()}>
              Load more
            </LoadMoreButton>
          )}
        </div>
      )}
    </CatalogContainer>
  );
};
