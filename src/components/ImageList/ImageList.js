import React, { useEffect, useState } from "react";

import { ImageCard } from "../ImageCard";

const ImageList = (props) => {
  const { isLoading, images, fetchImages, searchText } = props;

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

  return isLoading ? (
    <div className="text-center">Loading...</div>
  ) : !imageList.length ? (
    <div className="text-center">No record found</div>
  ) : (
    <div className="grid-container">
      {imageList.map((item) => (
        <div key={item.id} className="grid-item">
          <ImageCard data={{ ...item }} />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
