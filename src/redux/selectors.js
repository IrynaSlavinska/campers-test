export const selectAdvert = state => state.adverts.adverts;
export const selectAdvertCategories = state => state.adverts.adverts.details;
export const selectOneAdvert = state => state.adverts.oneAdvert;
export const selectError = state => state.adverts.error;
export const selectIsLoading = state => state.adverts.isLoading;
