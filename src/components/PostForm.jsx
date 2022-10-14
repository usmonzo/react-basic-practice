import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    text: "",
    body: "",
  });
  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    // setPosts([...posts, newPost]);
    create(newPost);
    setPost({ text: "", body: "" });
  };
  return (
    <form>
      <MyInput
        value={post.text}
        onChange={(e) => setPost({ ...post, text: e.target.value })}
        type="text"
        placeholder="Название"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание"
      />
      {/* <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" /> */}
      <MyButton onClick={addNewPost}>Добавить</MyButton>
    </form>
  );
};

export default PostForm;
