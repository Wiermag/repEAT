import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { CommentList } from "../CommentList/CommentList";
import { CommentForm } from "../CommentForm/CommentForm";

const CommentsBox = () => {

  const [ state, setState ] = useState({
    commentsArray:[]
  });

  const addComment = (comment) => {
    setState({
      commentsArray:[comment, ...state.commentsArray]
    })
  };

    return (
      <div className="App container bg-light shadow">
        <header className="App-header">
          <h1 className="App-title">
            Comments:
            <span className="px-2" role="img" aria-label="Chat">💬</span>
          </h1>
        </header>

        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Say something about my app...</h6>
            <CommentForm addComment={addComment}/>
          </div>
          <div className="col-8  pt-3 bg-white">
            <CommentList comments={state.commentsArray}/>
          </div>
        </div>
      </div>
    );
};

export  {
    CommentsBox
}