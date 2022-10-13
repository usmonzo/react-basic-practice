import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = ({ posts, setPosts }) => {
  const [post, setPost] = useState({
    text: "",
    body: "",
  });
  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    // const newPost = {
    //   id: Date.now(),
    //   text,
    //   body,
    // };
    // setPosts([...posts, newPost]);
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ text: "", body: "" });
  };
  return (
    <form>
      <MyInput
        value={post.text}
        onChange={(e) => setPost({ ...post, text: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      {/* <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" /> */}
      <MyButton onClick={addNewPost}>Добавить пост</MyButton>
    </form>
  );
};

export default PostForm;
