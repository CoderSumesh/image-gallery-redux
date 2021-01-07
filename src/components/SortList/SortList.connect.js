import { connect } from "react-redux";

import { sortMostLiked, sortMostCommented } from "../../store/actions";

import SortList from "./SortList";

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
