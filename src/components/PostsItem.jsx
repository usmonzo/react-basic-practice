import React from "react";
import MyButton from "./UI/button/MyButton";
import "./PostItem.css";

function PostsItem(props) {
  return (
    <div className="">
      <div className="post-container">
        <div className="post-items">
          <div>
            <h2 style={{ padding: "10px 0" }}>
              <strong>{props.number + "." + " " + props.post.body}.</strong>
            </h2>
            <p>{props.post.text}</p>
          </div>
          <MyButton
            style={{ margin: "10px 0" }}
            onClick={() => props.remove(props.post)}
          >
            Удалить
          </MyButton>
        </div>
      </div>
    </div>
  );
}

export default PostsItem;
