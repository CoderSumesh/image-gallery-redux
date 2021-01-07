import axios from "axios";
import * as actionTypes from "./actionTypes"
import data from "../mock/data";

export const searchImage = (searchText) => ({
  type: actionTypes.SEARCH_IMAGE,
  payload: searchText,
});

export const sortImage = (type) => ({
  type,
});

export const sortMostLiked = () => ({
  type: actionTypes.SORT_MOST_LIKED,
});

export const sortMostCommented = () => ({
  type: actionTypes.SORT_MOST_COMMENTED,
});

export const addComment = (imageId, comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: { id: imageId, comment },
});

export const likeImage = (imageId) => ({
  type: actionTypes.LIKE_IMAGE,
  payload: imageId,
});

export const unlikeImage = (imageId) => ({
  type: actionTypes.UNLIKE_IMAGE,
  payload: imageId,
});

export const fetchImageRequest = () => ({
  type: actionTypes.FETCH_REQUEST,
});

const fetchImageSuccess = (images) => ({
  type: actionTypes.FETCH_SUCCESS,
  payload: images,
});

export function fetchImages() {
  return (dispatch) => {
    dispatch(fetchImageRequest());
    axios
      .get(
        "https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json"
      )
      .then((res) => {
        let images;

        if (res.status === 200) {
          images = res.data.pics;
        } else {
          images = data.pics;
        }

        dispatch(fetchImageSuccess(images));
      })
      .catch((err) => {
        console.error(err);
        dispatch(fetchImageSuccess(data));
      });
  };
}
