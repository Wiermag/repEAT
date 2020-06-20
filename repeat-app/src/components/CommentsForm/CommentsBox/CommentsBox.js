import React from "react";
import "./CommentsBox.css"
import "bootstrap/dist/css/bootstrap.css";
import { CommentList } from "../CommentList/CommentList";
import { CommentForm } from "../CommentForm/CommentForm";

const CommentsBox = () => {

    return (
      <div className="comment-box container ">
        <header className="comment-box-title">
          <h1>Your opinion matters !</h1>
        </header>

        <div className="row ">
          <div className="col-4 comments-box pt-3 border-right">
            <h6>Say something about my app...</h6>
            <CommentForm/>
          </div>
          <div className="col-8 comments-box pt-3 ">
            <CommentList  />
          </div>
        </div>
      </div>
    );
};

export  {
    CommentsBox
}