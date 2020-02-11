export const POPULAR_DETAILS_REQUESTED = 'POPULAR_DETAILS_REQUESTED';
export const POPULAR_DETAILS_RETRIEVED = 'POPULAR_DETAILS_RETRIEVED';
export const FEATURED_DETAILS_REQUESTED = 'FEATURED_DETAILS_REQUESTED';
export const FEATURED_DETAILS_RETRIEVED = 'FEATURED_DETAILS_RETRIEVED';
export const FETCH_ERROR = 'FETCH_ERROR';

const getData = async url => {
  try {
    const response = await fetch(url, {
      method: 'GET'
    });
    return await response.json();
  } catch (error) {
    return null;
  }
}

export const fetchPopular = () => async (dispatch) => {
  dispatch({
    type: POPULAR_DETAILS_REQUESTED
  });
  const results = await getData('http://demo3136867.mockable.io/carousel');
  if (results) {
    dispatch({
      type: POPULAR_DETAILS_RETRIEVED,
      results
    });
  } else {
    dispatch({
      type: FETCH_ERROR,
      results
    });
  }
};

export const fetchFeatured = () => async (dispatch) => {
  dispatch({
    type: FEATURED_DETAILS_REQUESTED
  });
  const results = await getData('http://demo3136867.mockable.io/featured');
  if (results) {
    dispatch({
      type: FEATURED_DETAILS_RETRIEVED,
      results
    });
  } else {
    dispatch({
      type: FETCH_ERROR,
      results
    });
  }
};