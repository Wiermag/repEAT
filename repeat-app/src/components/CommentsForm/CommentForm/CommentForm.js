import React, { useState } from "react";

const CommentForm = (props) => {
  const [formComment, setFormComment] = useState({
      name: "",
      message: ""
  });

  const handleFieldChange = event => {
    const { value, name } = event.target;
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
              onChange={handleFieldChange}
              value={formComment.name}
              className="form-control"
              placeholder="Your Name..."
              name="name"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={handleFieldChange}
              value={formComment.message}
              className="form-control"
              placeholder="Your Comment..."
              name="message"
              rows="5"
            />
          </div>

          <div className="form-group">
            <button variant="primary" type="submit" onClick={props.addComment} className="btn btn-primary">
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