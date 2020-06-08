import React, { useEffect, useState } from "react";
import  { Comment } from "../Comment/Comment";
import { refComments } from "../../../firebase"

const CommentList = () => {

  const [ commentsArray, setCommentsArray] = useState([]);

  useEffect(() => {
    refComments.orderByChild("userName").on("value", function(snapshot) {
      const array = [];
      snapshot.forEach(function(child) {
        array.push(child.val())
      });
      setCommentsArray(array)
    });
  },[]);

  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{commentsArray.length}</span>{" "}
        Comment{commentsArray.length > 0 ? "s:" : ":"}
      </h5>

      {commentsArray.length === 0 ? (
        <div className="alert text-center alert-warning">
          Be the first to comment !
        </div>
        ) : null}
        
      {commentsArray.map((comment, index) => { 
        return <Comment key={index} name={comment.userName} message={comment.message}/>
       })
      }
    </div>
  );
};

export {
  CommentList
}