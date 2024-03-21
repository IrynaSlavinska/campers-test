import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllAdvert } from '../../redux/advert/operations';
import { selectIsLoading } from '../../redux/selectors';
import { selectAdvert } from '../../redux/selectors';

import { Sidebar } from 'components/FilterPartials/Sidebar';

import { CatalogContainer } from './CatalogPage.styled';
import { Catalog } from 'components/Catalog/Catalog';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdvert);

  useEffect(() => {
    dispatch(getAllAdvert());
  }, [dispatch]);

  console.log(adverts);

  return (
    <>
      <CatalogContainer>
        <Sidebar />

        {isLoading ? <div>loading...</div> : <Catalog adverts={adverts} />}
      </CatalogContainer>
    </>
  );
};
