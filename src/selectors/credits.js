const getAllCreditsIds = state => state.credits.allIds;

export const getAllCredits = state =>
  getAllCreditsIds(state).map(id => ({
    ...state.credits.byId[id],
    id,
  }));

export const getCreditsIsLoading = state => state.credits.isLoading;
