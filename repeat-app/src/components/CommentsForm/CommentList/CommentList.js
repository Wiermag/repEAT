import React from "react";
import  { Comment } from "../Comment/Comment";

const CommentList = (props) => {

  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        Comment{props.comments.length > 0 ? "s" : ""}
      </h5>

      {props.comments.length === 0 ? (
        <div className="alert text-center alert-info">
          Be the first to comment
        </div>
        ) : null}

      {props.comments.map((comment, index) => { 
        return (
          <Comment key={index} name={comment.name} message={comment.message}/>
        )})
      }
    </div>
  );
};

export {
  CommentList
}