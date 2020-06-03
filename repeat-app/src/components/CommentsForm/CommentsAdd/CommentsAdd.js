import React from "react";

const  Comment = (props) => {
  const { name, message} = props.comment;

  return (
    <div className="media mb-3">
      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <h6 className="mt-0 mb-1 text-muted">{name}</h6>
        {message}
      </div>
    </div>
  );
}
export {
  Comment
}