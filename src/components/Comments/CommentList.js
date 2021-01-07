import React from "react";

const CommentList = ({ comments }) => (
  <ul className="comment-list">
    {comments.map((comment) => (
      <li key={comment} className="comment-item">
        {comment}
      </li>
    ))}
  </ul>
);

export default CommentList;
