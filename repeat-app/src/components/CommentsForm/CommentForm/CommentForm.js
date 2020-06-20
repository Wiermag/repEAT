import React, { useState } from "react";
import { refComments } from "../../../firebase"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

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
      <Form method="post" onSubmit={e => e.preventDefault()}>
        <div className="form-group form-comment">
          <Form.Control
            onChange={ handleFieldChange }
            value={ formComment.userName }
            className="form-control"
            placeholder="Your Name..."
            name="userName"
            type="text"/>
        </div>

        <div className="form-group form-comment">
         <Form.Control as="textarea"     
                      type="text" 
                      onChange={ handleFieldChange }
                      value={ formComment.message }
                      className="form-control"
                      placeholder="Your Comment..."
                      name="message"
                      rows="5"/>
        </div>
        <div className="form-group">
          <Button variant="outline-danger" 
                  type="submit" 
                  onClick={ saveComment } >
            Comment &#10148;
          </Button>
        </div>
      </Form>
    </>
  );
};

export { 
  CommentForm
}