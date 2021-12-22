import { API_URL, SEARCH_API_URL } from '../../services/movie.services';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await getMoviesRequest(type, pageNumber);

    const { results, payload } = response;
    // console.log(results);
    dispatchMethod('MOVIE_LIST', results, dispatch);
    dispatchMethod('RES_PAGE', payload, dispatch);
  } catch (error) {
    if (error.response) {
      const payload = {
        message:
          error.response.data.message || error.response.data.status_message,
        statusCode: error.response.status
      };
      dispatchMethod('SET_ERROR', payload, dispatch);
    }
  }
};
export const loadMoreMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await getMoviesRequest(type, pageNumber);

    const { results, payload } = response;
    // console.log(results);
    dispatchMethod(
      'LOAD_MORE_RESULT',
      { list: results, page: payload.page, totalPages: payload.totalPages },
      dispatch
    );
    // dispatchMethod('RES_PAGE', payload, dispatch);
  } catch (error) {
    if (error.response) {
      const payload = {
        message:
          error.response.data.message || error.response.data.status_message,
        statusCode: error.response.status
      };
      dispatchMethod('SET_ERROR', payload, dispatch);
    }
  }
};
export const setResPgNm = (page, totalPages) => async (dispatch) => {
  const payload = { page, totalPages };
  dispatchMethod('RES_PAGE', payload, dispatch);
};
export const setMovieType = (type) => async (dispatch) => {
  dispatchMethod('MOVIE_TYPE', type, dispatch);
};
export const searchQuery = (query) => async (dispatch) => {
  dispatchMethod('SEARCH_QUERY', query, dispatch);
};
export const searchResult = (query) => async (dispatch) => {
  try {
    if (query) {
      const movies = await SEARCH_API_URL(query);
      const { results } = movies.data;
      dispatchMethod('SEARCH_RESULT', results, dispatch);
    } else {
      dispatchMethod('SEARCH_RESULT', [], dispatch);
    }
  } catch (error) {
    if (error.response) {
      const payload = {
        message:
          error.response.data.message || error.response.data.status_message,
        statusCode: error.response.status
      };
      dispatchMethod('SET_ERROR', payload, dispatch);
    }
  }
};
const dispatchMethod = (type, payload, dispatch) => {
  dispatch({
    type,
    payload
  });
};

const getMoviesRequest = async (type, pageNumber) => {
  const movies = await API_URL(type, pageNumber);
  const { results, page, total_pages } = movies.data;
  const payload = {
    page,
    totalPages: total_pages
  };
  return { results, payload };
};
