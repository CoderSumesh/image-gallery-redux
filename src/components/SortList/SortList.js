import React from "react";
import { connect } from "react-redux";

import {
  SORT_MOST_LIKED,
  SORT_MOST_COMMENTED
} from "../../store/actionTypes";

import {
  sortMostLiked,
  sortMostCommented,
} from "../../store/actions";

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

const mapStateToProps = (state) => {
  const { sortType } = state;
  return { sortType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortImageMostLiked: () => dispatch(sortMostLiked()),
    sortImageMostCommented: () => dispatch(sortMostCommented()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
