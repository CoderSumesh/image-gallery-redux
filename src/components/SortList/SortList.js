import React from "react";

import {
  SORT_MOST_LIKED,
  SORT_MOST_COMMENTED
} from "../../store/actionTypes";

const SortList = (props) => {
  const { sortType, sortImageMostLiked, sortImageMostCommented } = props;

  return (
    <ul className="sort-options">
      <li
        onClick={sortImageMostLiked}
        className={sortType === SORT_MOST_LIKED ? "active" : ""}
      >
        <span>Most Liked</span>
      </li>
      <li
        onClick={sortImageMostCommented}
        className={sortType === SORT_MOST_COMMENTED ? "active" : ""}
      >
        <span>Most Commented</span>
      </li>
    </ul>
  );
}

export default SortList;
