import { connect } from "react-redux";

import { fetchImages } from "../../store/actions";

import ImageList from "./ImageList";

const mapStateToProps = (state) => {
  const { isLoading, images, searchText } = state;
  return { isLoading, images, searchText };
};

const mapDispatchToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
