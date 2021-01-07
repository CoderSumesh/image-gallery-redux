import React, { useState } from "react";

const NewComment = ({ imageId, postComment }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handlePostComment = () => {
    postComment(imageId, value);
    setValue("");
  };

  return (
    <div className="input-group">
      <div className="input-group-area">
        <input
          type="text"
          placeholder="Type your comment here..."
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="input-group-icon" onClick={handlePostComment}>
        POST
      </div>
    </div>
  );
};

export default NewComment;
