import React from "react";
import { connect } from "react-redux";

import { searchImage } from "../../store/actions";

const SearchImage = ({ searchImageList }) => {
  const handleSearch = (event) => {
    const { value } = event.currentTarget;
    searchImageList(value);
  };

  return (
    <div className="search-box-wrapper">
      <input
        className="search-box"
        placeholder="Search images..."
        onChange={handleSearch}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchImageList: (search) => dispatch(searchImage(search)),
  };
};

export default connect(null, mapDispatchToProps)(SearchImage);
