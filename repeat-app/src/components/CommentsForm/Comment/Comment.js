import React from "react";

const  Comment = (props) => {

  return (
    <div className="media mb-3">
      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <h6 className="mt-0 mb-1 text-muted">{props.name} </h6>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export {
  Comment
}