import React, { useState } from "react";

const CommentForm = () => {
  const [formComment, setFormComment] = useState({
      name: "",
      message: ""
  });

  const firebaseFold = require('firebase/app');
                       require('firebase/auth');
                       require('firebase/database');
  const db = firebaseFold.database().ref('comments');

  //save data:
  const saveFormComments = () => {
    const newFormRef = db.push();
    newFormRef.set(formComment);
  };

  const handleFieldChange = event => {
    const { value, name } = event.target;
    setFormComment({
      ...formComment,
        [name]: value
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveFormComments();
  };

    return (
      <>
        <form method="post" onSubmit={onSubmit}>
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
            <button variant="primary" type="submit" className="btn btn-primary">
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