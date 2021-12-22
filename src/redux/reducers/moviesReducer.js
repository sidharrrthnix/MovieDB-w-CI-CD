const initialState = {
  list: [],
  page: 1,
  totalPages: 1,
  movieType: 'now_playing',
  searchQuery: '',
  searchResult: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_LIST':
      return {
        ...state,
        list: action.payload
      };
    case 'RES_PAGE':
      return {
        ...state,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };

    case 'LOAD_MORE_RESULT':
      console.log(action);
      return {
        ...state,
        list: [...state.list, ...action.payload.list],
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };
    case 'MOVIE_TYPE':
      return {
        ...state,
        movieType: action.payload
      };
    case 'SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };
    case 'SEARCH_RESULT':
      return {
        ...state,
        searchResult: action.payload
      };
    default:
      return state;
  }
};
export default movieReducer;
