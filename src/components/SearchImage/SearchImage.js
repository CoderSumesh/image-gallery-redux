import React from "react";

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


export default SearchImage;
