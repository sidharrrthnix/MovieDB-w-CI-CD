import {
  API_URL,
  MOVIE_CREDITS_URL,
  MOVIE_DETAILS_URL,
  MOVIE_IMAGES_URL,
  MOVIE_REVIEWS_URL,
  MOVIE_VIDEOS_URL,
  SEARCH_API_URL
} from '../../services/movie.services';

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
export const movieDetails = (id) => async (dispatch) => {
  try {
    const details = await MOVIE_DETAILS_URL(id);
    const credits = await MOVIE_CREDITS_URL(id);
    const images = await MOVIE_IMAGES_URL(id);
    const videos = await MOVIE_VIDEOS_URL(id);
    const reviews = await MOVIE_REVIEWS_URL(id);

    const resp = await Promise.all([details, credits, images, videos, reviews])
      .then((values) =>
        values.map((value) => {
          return value.data;
        })
      )
      .then((response) => {
        return response;
      });
    dispatchMethod('MOVIE_DETAILS', resp, dispatch);
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
export const clearMovies = () => async (dispatch) => {
  dispatchMethod('CLEAR_MOVIE_DETAILS', [], dispatch);
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
