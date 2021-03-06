import * as actionTypes from "./actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST: {
      return { ...state, isLoading: true };
    }

    case actionTypes.FETCH_SUCCESS: {
      return { ...state, isLoading: false, images: action.payload };
    }

    case actionTypes.SEARCH_IMAGE: {
      return { ...state, searchText: action.payload };
    }

    case actionTypes.LIKE_IMAGE: {
      const { images } = state;
      const image = images.findIndex((item) => item.id === action.payload);
      images[image].likes += 1;
      images[image].liked = true;

      return { ...state, images: [...images] };
    }

    case actionTypes.UNLIKE_IMAGE: {
      const { images } = state;
      const image = images.findIndex((item) => item.id === action.payload);
      images[image].likes -= 1;
      images[image].liked = false;

      return { ...state, images: [...images] };
    }

    case actionTypes.ADD_COMMENT: {
      const { images } = state;
      const image = images.findIndex((item) => item.id === action.payload.id);
      images[image].comments.push(action.payload.comment);

      return { ...state, images: [...images] };
    }

    case actionTypes.SORT_MOST_LIKED: {
      const { images } = state;
      const data = images.sort((a, b) => b.likes - a.likes);
      return { ...state, images: [...data], sortType: actionTypes.SORT_MOST_LIKED };
    }

    case actionTypes.SORT_MOST_COMMENTED: {
      const { images } = state;
      const data = images.sort((a, b) => b.comments.length - a.comments.length);
      return { ...state, images: [...data], sortType: actionTypes.SORT_MOST_COMMENTED };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
