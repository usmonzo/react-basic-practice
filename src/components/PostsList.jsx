import React from "react";

import PostsItem from "./PostsItem";

function PostsList({ posts, remove }) {
  return (
    <div>
      {posts ? (
        <div>
          <h1 style={{ textAlign: "center", fontSize: "40px" }}>Изречения:</h1>
          {posts.map((post, index) => (
            <PostsItem
              remove={remove}
              number={index + 1}
              post={post}
              key={post.id}
            />
          ))}
        </div>
      ) : (
        <h1
          style={{ textAlign: "center", fontSize: "30px", marginTop: "35px" }}
        >
          Нет результатов по этому запросу...
        </h1>
      )}
    </div>
  );
}

export default PostsList;
