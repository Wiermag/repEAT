import React, { useState } from "react";
import { refComments } from "../../../firebase"

const CommentForm = () => {

  const saveComment = () => {
    const newFormRef = refComments.push();
    newFormRef.set(formComment);
    };
  
  const [formComment, setFormComment] = useState({
      userName: "",
      message: ""
  });

  const handleFieldChange = e => {
    const { value, name } = e.target;
    setFormComment({
      ...formComment,
        [name]: value
      });
  };

  return (
    <>
      <form method="post" onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <input
            onChange={ handleFieldChange }
            value={ formComment.userName }
            className="form-control"
            placeholder="Your Name..."
            name="userName"
            type="text"/>
        </div>

        <div className="form-group">
          <textarea
            onChange={ handleFieldChange }
            value={ formComment.message }
            className="form-control"
            placeholder="Your Comment..."
            name="message"
            rows="5"/>
        </div>

        <div className="form-group">
          <button variant="primary" type="submit" onClick={ saveComment } className="btn btn-primary">
            Comment &#10148;
          </button>
        </div>
      </form>
    </>
  );
};

export { 
  CommentForm
}