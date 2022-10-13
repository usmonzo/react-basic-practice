import React from "react";
import "./PostItem.css";

function PostsItem(props) {
  return (
    <div className="">
      <div className="post-container">
        <div className="post-items" key={props.post.id}>
          <div>
            <h2>
              <strong>{props.number + "." + " " + props.post.body}.</strong>
            </h2>
            <p>{props.post.text}</p>
          </div>
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default PostsItem;
