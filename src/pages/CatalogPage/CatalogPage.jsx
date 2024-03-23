import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllAdvert } from '../../redux/advert/operations';
import { selectIsLoading } from '../../redux/selectors';
import { selectAdvert } from '../../redux/selectors';

import { Sidebar } from 'components/FilterPartials/Sidebar';

import { CatalogContainer, LoadMoreButton } from './CatalogPage.styled';
import { Catalog } from 'components/Catalog/Catalog';
import { Loader } from 'components/Loader/Loader';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdvert);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllAdvert(page));
  }, [dispatch, page]);

  const handleMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <CatalogContainer>
        <Sidebar />

        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Catalog adverts={adverts} />
            <LoadMoreButton type="button" onClick={() => handleMoreClick()}>
              Load more
            </LoadMoreButton>
          </div>
        )}
      </CatalogContainer>
    </>
  );
};
