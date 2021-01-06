import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { ImageCard } from "../ImageCard";

import {
  SORT_MOST_LIKED,
  SORT_MOST_COMMENTED,
  fetchImages,
} from "../../store/actions";

function ImageList(props) {
  const { isLoading, images, fetchImages, sortType, searchText } = props;

  const [imageList, setImageList] = useState(images);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let data = [...images];

    if (searchText) {
      data = data.filter((item) =>
        item.category.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setImageList([...data]);
  }, [images, searchText]);

  return (
    <div className="grid-container">
      {isLoading ? (
        <span className="spinner">Loading...</span>
      ) : (
        imageList.map((item) => (
          <div key={item.id} className="grid-item">
            <ImageCard data={{ ...item }} />
          </div>
        ))
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { isLoading, images, sortType, searchText } = state;
  return { isLoading, images, sortType, searchText };
};

const mapDispatchToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
