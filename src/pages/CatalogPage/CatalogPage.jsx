import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllAdvert } from '../../redux/advert/operations';
import { selectIsLoading } from '../../redux/selectors';
import { selectAdvert } from '../../redux/selectors';

import { Sidebar } from 'components/CatalogPartials/Sidebar';

import { CatalogContainer } from './CatalogPage.styled';

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
      {isLoading && <div>loading...</div>}
      <CatalogContainer>
        <Sidebar />
      </CatalogContainer>
    </>
  );
};
