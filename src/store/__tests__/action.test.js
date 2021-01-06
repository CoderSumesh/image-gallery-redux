import * as actionTypes from "../actions";

describe("actions", () => {

  it("fetchImageRequest", () => {
    expect(actionTypes.fetchImageRequest()).toEqual({
      type: actionTypes.FETCH_REQUEST,
    });
  });

  it("sortMostLiked", () => {
    expect(actionTypes.sortMostLiked()).toEqual({
      type: actionTypes.SORT_MOST_LIKED,
    });
  });

  it("sortMostCommented", () => {
    expect(actionTypes.sortMostCommented()).toEqual({
      type: actionTypes.SORT_MOST_COMMENTED,
    });
  });

});