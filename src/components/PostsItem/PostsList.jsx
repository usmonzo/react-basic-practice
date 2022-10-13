import React from "react";

import PostsItem from "./PostsItem";

function PostsList({ posts }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cписок постов:</h1>
      {posts.map((post, index) => (
        <PostsItem number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostsList;
